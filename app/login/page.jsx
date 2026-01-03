"use client";

import axios from "axios";
import Link from "next/link";
import { toast } from "sonner";
import { Lobster } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { useAuth } from "@/app/context/Auth";
import { baseURL } from "@/app/api";
import isAuth from "@/app/components/isAuth";
import Turnstile from "react-turnstile";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider, signInWithPopup } from "@/app/config/firebase";

const inter = Lobster({ subsets: ["latin"], weight: "400" });

const Login = () => {
  const router = useRouter();
  const { setUserAuthInfo } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEye, setShowEye] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const eyeHandler = () => {
    setShowEye(!showEye);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Send user details to the backend for verification & token creation
      const getRandomMobileNumber = () => {
        return Math.floor(1000000000 + Math.random() * 9000000000).toString(); // Generates a 10-digit number
      };

      const response = await axios.post(`${baseURL}/user/google-login`, {
        email: user.email,
        firstName: user.displayName?.split(" ")[0] || "", // First name
        lastName: user.displayName?.split(" ").slice(1).join(" ") || "", // Last name
        fullName: user.displayName || "",
        googleUID: user.uid,
        providerId: user.providerData[0]?.providerId || "google.com",
        phoneNumber: user.phoneNumber || getRandomMobileNumber(), // Assigns a random 10-digit number if missing
      });

      setUserAuthInfo(response.data.data);
      toast.success(response.data.message);
      router.push("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Google login failed.");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    if (!captchaToken) {
      toast.error("Please complete the CAPTCHA verification.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${baseURL}/user/login`, {
        email,
        password,
        turnstileToken: captchaToken,
      });

      setUserAuthInfo(response.data.data);
      toast.success(response.data.message);
      router.push("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Only show CAPTCHA when both email and password are filled
  const shouldShowCaptcha = email.length > 0 && password.length > 0;

  return (
    <main className={inter.className}>
      <div className="flex justify-center items-center h-dvh bg-[url('/img/home/login_bg.jpg')] bg-cover bg-bottom-left md:bg-bottom">
        <div className="md:p-6 rounded-xl sm:w-auto sm:p-4">
          <div className="md:p-6 rounded-lg drop-shadow-xs w-72 sm:w-auto sm:h-auto sm:p-10">
            <div className="flex flex-col justify-center text-[#006E61] items-center font-semibold mb-5">
              <h1 className="text-2xl pb-2 heading-font font-bold sm:text-5xl">
                Welcome Back!
              </h1>
              <h1 className="border-t body-font border-neutral-500 pt-2 sm:pb-2 sm:text-xl">
                Log in to your account
              </h1>
            </div>

            <div className="w-full body-font relative">
              <input
                className="w-full outline-hidden h-10 sm:h-12 p-3 mb-4 bg-[#FFF6D2] rounded-xl ring-2 ring-black text-[#006E61] placeholder-[#006E61]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  // setCaptchaToken(""); // Reset CAPTCHA when email changes
                }}
              />
              <input
                className="w-full outline-hidden h-10 sm:h-12 p-3 mb-4 bg-[#FFF6D2] rounded-xl ring-2 ring-black text-[#006E61] placeholder-[#006E61]"
                type={showEye ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  // setCaptchaToken(""); // Reset CAPTCHA when password changes
                }}
              />
              <button
                className="absolute right-4 sm:bottom-8 bottom-7"
                onClick={eyeHandler}
              >
                {showEye ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>

            {shouldShowCaptcha && (
              <div className="flex justify-center items-center mb-4">
                <Turnstile
                  sitekey={
                    process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
                  }
                  onVerify={(token) => setCaptchaToken(token)}
                />
              </div>
            )}

            <div className="flex justify-between mb-4 description-font">
              <div className="flex items-center justify-center gap-1">
                <input id="remember" type="checkbox" value="remember" />
                <label
                  htmlFor="remember"
                  className="text-[#006E61] text-sm sm:text-sm"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-[#006E61] outline-hidden text-xs sm:text-sm underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center body-font space-y-4">
              {/* 🔹 Standard Login Button */}
              <button
                onClick={handleLogin}
                className="w-40 outline-hidden font-semibold ring-2 ring-black text-[#006E61] p-2 bg-[#F8E9CB] rounded-xl hover:bg-[#e8d396] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || !captchaToken}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <FiLoader className="animate-spin mr-2" />
                    Logging in...
                  </div>
                ) : (
                  "Log in"
                )}
              </button>

              {/* 🔹 Divider */}
              <div className="flex items-center w-full space-x-2">
                <hr className="flex-1 border border-black" />
                <p className="text-black text-sm font-medium">OR</p>
                <hr className="flex-1 border border-black" />
              </div>

              {/* 🔹 Google Login Button */}
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 outline-hidden font-semibold ring-2 ring-black text-[#006E61] p-3 bg-[#FFF6D2] rounded-xl hover:bg-[#e8d396] disabled:opacity-50 disabled:cursor-not-allowed description-font mb-2"
                disabled={isGoogleLoading}
              >
                {isGoogleLoading ? (
                  <FiLoader className="animate-spin" />
                ) : (
                  <FcGoogle />
                )}
                Sign in with Google
              </button>
            </div>

            {/* <div className="text-[#006E61] text-xs sm:text-sm space-x-2 flex justify-center description-font mt-2">
              <p>Don't have an account? </p>
              <Link href="/register" className="underline">
                Register here
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default isAuth(Login);
