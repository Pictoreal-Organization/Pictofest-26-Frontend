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
    <div
      className="
        relative
        flex
        justify-center
        items-center
        min-h-screen
        bg-[url('/img/home/bg_img.png')]
        bg-cover
        bg-[position:left_bottom]
        md:bg-center
        overflow-hidden
      "
    >
      {/* ⭐ Stars Background */}
      <img
        src="/img/home/Stars_bg.svg"
        alt="Stars Background"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          z-[1]
          pointer-events-none
        "
      />

      {/* 🎭 Pictofest Logo */}
      <img
        src="/img/home/pictofestLogoNew.png"
        alt="Pictofest Logo"
        className="
          absolute
          top-[80px]
          left-1/2
          -translate-x-1/2
          w-[200px]
          md:w-[230px]
          object-contain
          z-30
        "
      />

      {/* 🟣 Purple Block */}
      <img
        src="/img/home/Group-234.png"
        alt="Purple Block"
        className="
          absolute
          bottom-[135x]
          left-1/2
          -translate-x-1/2
          w-[100%]
          max-w-[430px]
          object-contain
          z-[5]
        "
      />

      {/* 🧾 LOGIN FORM (RESIZED TO FIT PURPLE BLOCK) */}
<div
  className="
    absolute
    bottom-[180px] 
    left-1/2
    -translate-x-1/2
    w-[85%]
    max-w-[340px]
    z-20
  "
>
  <div className="p-2 md:p-4"> {/* Reduced padding */}
    {/* Heading - Scaled down to prevent overlapping the logo */}
    <div className="flex flex-col items-center text-white mb-2"> 
      <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">
        Welcome Back!
      </h1>
      <p className="text-xs md:text-sm opacity-90">
        Login to your account
      </p>
    </div>

    {/* Inputs - Reduced height and font size */}
    <div className="relative space-y-2 md:space-y-3">
      <input
        className="w-full h-7 md:h-9 px-4 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none text-sm"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="relative">
        <input
          className="w-full h-7 md:h-9 px-4 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none text-sm"
          type={showEye ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white scale-75"
          onClick={eyeHandler}
        >
          {showEye ? <FiEye /> : <FiEyeOff />}
        </button>
      </div>
    </div>

    {/* Remember + Forgot - Reduced font and margins */}
    <div className="flex justify-between items-center text-[10px] md:text-xs text-white mt-2 mb-3 px-1">
      <label className="flex items-center gap-1 cursor-pointer">
        <input type="checkbox" className="accent-[#E77C40] w-3 h-3 rounded border-black" />
        Remember me
      </label>
      <Link href="/forgot-password">
        Forgot Password?
      </Link>
    </div>

    {/* CAPTCHA - Added small margin if it appears */}
    {shouldShowCaptcha && (
      <div className="flex justify-center mb-3 scale-75 origin-top">
        <Turnstile
          sitekey="YOUR_TURNSTILE_SITE_KEY"
          onVerify={(token) => setCaptchaToken(token)}
        />
      </div>
    )}

    {/* Login Button - Centered and resized */}
    <div className="flex justify-center">
      <button
        onClick={handleLogin}
        disabled={isLoading || !captchaToken}
        className="
          px-6
          py-1
          bg-[#E77C40]
          text-white
          text-lg
          font-bold
          rounded-xl
          border-2
          border-black
          hover:brightness-110
          transition-all
        "
      >
        {isLoading ? <FiLoader className="animate-spin" /> : "Log in"}
      </button>
    </div>

    {/* Register - Minimal text at the bottom */}
    <div className="text-[10px] md:text-xs text-center text-white mt-3">
      <span>Don’t have an account? </span>
      <Link href="/register" className="font-bold underline ml-1">
        Register here
      </Link>
    </div>
  </div>
</div>
      {/* 🏮 Lanterns */}
      <img
        src="/img/home/Group-350.svg"
        alt="Left Lantern"
        className="absolute top-0 left-[140px] w-[130px] z-10 hidden md:block"
      />
      <img
        src="/img/home/Group-350.svg"
        alt="Right Lantern"
        className="absolute top-0 right-[140px] w-[130px] scale-x-[-1] z-10 hidden md:block"
      />

      {/* 💀 Skeletons */}
      <img
        src="/img/home/Group 512.svg"
        alt="Skeletons"
        className="
          absolute
          bottom-0
          right-90
          w-full
          h-[180px]
          object-contain
          z-20
        "
      />
      <img
        src="/img/home/Group 513.svg"
        alt="Skeletons"
        className="
          absolute
          bottom-0
          left-95
          w-full
          h-[180px]
          object-contain
          z-20
        "
      />
    </div>
  </main>
  );
};
export default isAuth(Login);
