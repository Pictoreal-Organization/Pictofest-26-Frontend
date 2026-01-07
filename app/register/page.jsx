"use client";

import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import { Lobster } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { useAuth } from "@/app/context/Auth";
import { baseURL } from "@/app/api";
import isAuth from "@/app/components/isAuth";
import Turnstile from "react-turnstile"; // Import Turnstile

const inter = Lobster({ subsets: ["latin"], weight: "400" });

const Register = () => {
  const router = useRouter();

  const { setUserAuthInfo } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [collegeName, setCollegeName] = useState(
    "Pune Institute Of Computer Technology"
  );
  const [collegeType, setCollegeType] = useState("PICT");
  const [showEye, setShowEye] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpLoading, setIsOtpLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(""); // Store CAPTCHA token

  const eyeHandler = () => {
    setShowEye(!showEye);
  };

  const handleSelectChange = (e) => {
    const college = e.target.value;
    if (college === "NON-PICT") {
      setCollegeName("");
    } else {
      setCollegeName("Pune Institute Of Computer Technology");
    }
    setCollegeType(college);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (phone.length < 10) {
      toast.error("Phone No. must be 10 digits at least.");
      return;
    }
    if (password.length < 8) {
      toast.error("Min. Password Length: 8 characters.");
      return;
    }
    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/user/signup`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        mobile_number: phone,
        college_type: collegeType,
        college_name: collegeName,
        password: password,
        otp: otp,
      });

      setUserAuthInfo(response.data.data);
      toast.success(response.data.message);
      router.push("/");
      window.location.reload();
    } catch (err) {
      if (err.response?.data?.message?.includes("Email already verified")) {
        toast.error("Email already verified. Please login instead.");
      } else {
        toast.error(err.response?.data?.message || "Failed to sign up.");
      }
      console.error(err.response?.data?.message);
    }
  };

  const sendOtp = async () => {
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email to send OTP.");
      return;
    }

    if (!captchaToken) {
      toast.error("Please complete the CAPTCHA verification.");
      return;
    }

    setIsOtpLoading(true);

    try {
      const response = await axios.post(`${baseURL}/email/sendZoho`, {
        email: email,
        turnstileToken: captchaToken, // Send CAPTCHA token to backend
        
      });
      toast.success("OTP sent to your email.");
      setOtpSent(true);
      console.log("Turnstile Token before sending:", captchaToken);
    } catch (err) {
      if (err.response?.status === 400 && err.response?.data === "Email already verified") {
        toast.error("Email already verified. Please login instead.");
      } else if (err.response?.status === 500) {
        toast.error("Failed to send OTP. Please try again later.");
      } else {
        toast.error(err.response?.data || "An error occurred while sending OTP. Please try again.");
      }
      console.error(err.response?.data);
    } finally {
      setIsOtpLoading(false);
    }
  };

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
      {/* 🟣 Purple Block */}
      <img
        src="/img/home/Group 234.svg"
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
          top-[70px]
          left-1/2
          -translate-x-1/2
          w-[200px]
          md:w-[230px]
          object-contain
          z-30
        "
      />
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
        {/* 🧾 REGISTER FORM CONTAINER */}
<div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[320px] z-10">
  <div className="p-2 md:p-2">
    
    {/* Heading using sub-heading-font */}
    <div className="flex flex-col items-center text-white mb-1">
      <h1 className="text-3xl md:text-4xl text-center leading-tight sub-heading-font">
        Create Account
      </h1>
    </div>

    {/* Inputs using body-font */}
    <div className="flex flex-col space-y-2 body-font">
      <input
        className="h-6 md:h-7 px-3 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none text-xs md:text-sm"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="h-6 md:h-7 px-3 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none text-xs md:text-sm"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="h-6 md:h-7 px-3 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none text-xs md:text-sm"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setOtpSent(false);
        }}
      />

      {/* OTP Logic - Compacted to save vertical space */}
      {!otpSent && validateEmail(email) && (
        <div className="flex flex-col items-center space-y-1">
          <div className="scale-75 origin-center h-14 overflow-hidden">
            <Turnstile
              sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
              onVerify={(token) => setCaptchaToken(token)}
            />
          </div>
          <button
            className="w-full py-1 bg-[#E77C40] text-white border-2 border-black rounded-xl text-xs font-bold"
            onClick={sendOtp}
            disabled={isOtpLoading || !captchaToken}
          >
            {isOtpLoading ? "Sending..." : "Send OTP"}
          </button>
        </div>
      )}

      {otpSent && (
        <input
          className="h-6 md:h-7 px-3 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none text-xs md:text-sm"
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      )}

      <input
        className="h-6 md:h-7 px-3 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none text-xs md:text-sm"
        type="text"
        placeholder="Phone No."
        value={phone}
        maxLength={10}
        onChange={(e) => setPhone(e.target.value)}
      />

      {/* Password with Eye Icon */}
      <div className="relative">
        <input
          className="w-full h-6 md:h-7 px-3 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none text-xs md:text-sm"
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

      <select
        className="h-6 md:h-7 px-3 bg-[#E77C40] rounded-xl border-2 border-black text-white focus:outline-none text-xs md:text-sm appearance-none"
        onChange={handleSelectChange}
        value={collegeType}
      >
        <option value="PICT">PICT</option>
        <option value="NON-PICT">NON-PICT</option>
      </select>

      <input
        className="h-6 md:h-7 px-3 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none text-xs md:text-sm"
        type="text"
        placeholder="College Name"
        value={collegeName}
        disabled={collegeType === "PICT"}
        onChange={(e) => setCollegeName(e.target.value)}
      />
    </div>

    {/* Sign Up Button */}
    <div className="flex justify-center mt-2">
      <button
        onClick={handleRegister}
        disabled={!otpSent}
        className="px-8 py-1 bg-[#E77C40] text-white text-lg font-bold rounded-2xl border-2 border-black hover:brightness-110 transition-all body-font"
      > Sign Up
      </button>
    </div>

    {/* Login Redirect */}
    <div className="text-[10px] md:text-xs text-center text-white mt-2 body-font">
      <span>Already have an account? </span>
      <Link href="/login" className="font-bold underline ml-1">
        Login
      </Link>
    </div>
  </div>
</div>
      </div>
    </main>
  );
};

export default isAuth(Register);
