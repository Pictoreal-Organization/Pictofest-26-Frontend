"use client";

import Link from "next/link";
import axios from "axios";
import { Lobster } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { baseURL } from "@/app/api";
import isAuth from "@/app/components/isAuth";
import Turnstile from "react-turnstile";
import { FiLoader } from "react-icons/fi";

const inter = Lobster({ subsets: ["latin"], weight: "400" });

const ForgotPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (phone.length < 10) {
      toast.error("Phone No. must be 10 digits at least.");
      return;
    }

    if (!captchaToken) {
      toast.error("Please complete the CAPTCHA verification.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${baseURL}/forgotPassword/`, {
        email: email,
        mobile_number: phone,
        turnstileToken: captchaToken,
      });

      toast.success(response.data.message);
      router.push("/login");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={inter.className}>
      <div className="flex justify-center items-center h-dvh bg-[url('/img/home/login_bg.jpg')] bg-cover bg-bottom-right md:bg-bottom">
        <div className="md:p-6 sm:w-auto sm:p-4">
          <div className="md:p-6 rounded-lg drop-shadow-xs w-72 sm:w-auto sm:h-auto sm:p-10 body-font">
            <div className="flex flex-col justify-center text-[#006E61] items-center font-semibold mb-5">
              <h1 className="text-2xl pb-2 border-b border-black font-bold sm:text-5xl heading-font">
                Forgot Password!
              </h1>
            </div>

            <input
              className="w-full outline-hidden h-10 sm:h-12 p-3 mb-4 bg-[#FFF6D2] rounded-md ring-2 ring-black text-[#006E61] placeholder-[#006E61]"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full outline-hidden h-10 sm:h-12 p-3 mb-4 bg-[#FFF6D2] rounded-md ring-2 ring-black text-[#006E61] placeholder-[#006E61]"
              type="text"
              placeholder="Phone No."
              value={phone}
              maxLength={10}
              onChange={(e) => setPhone(e.target.value)}
            />
            
            <div className="flex justify-center items-center mb-4">
              <Turnstile
                sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
                onVerify={(token) => setCaptchaToken(token)}
              />
            </div>

            <div className="p-2 flex justify-center items-center">
              <button
                onClick={handleForgotPassword}
                className="w-40 outline-hidden sm:w-40 font-semibold ring-2 ring-black text-[#006E61] p-2 mb-3 bg-[#FFF6D2] rounded-md hover:bg-[#e8d396] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || !captchaToken}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <FiLoader className="animate-spin mr-2" />
                    Processing...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
            <div className="text-[#006E61] text-xs sm:text-sm space-x-2 flex justify-center description-font">
              <p>Already have an account? </p>
              <Link href="/login" className="underline outline-hidden">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default isAuth(ForgotPassword);