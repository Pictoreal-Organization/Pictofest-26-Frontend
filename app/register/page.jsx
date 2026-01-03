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
      <div className="flex justify-center items-center h-full bg-[url('/img/home/login_bg.jpg')] bg-cover bg-bottom-left md:bg-bottom">
        <div className="md:p-6 md:w-auto sm:p-4 mt-20 mb-5">
          <div className="flex flex-col md:p-6 drop-shadow-xs">
            <div className="flex flex-col justify-center text-[#006E61] items-center font-semibold mb-5">
              <h1 className="text-2xl heading-font font-bold border-b border-[#006E61] p-2 sm:text-5xl">
                Create Account
              </h1>
            </div>
            <div className="flex flex-col w-full relative body-font">
              <input
                className="p-2 m-2 outline-hidden bg-[#FFF6D2] rounded-md ring-2 ring-black text-[#006E61] placeholder-[#006E61]"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="p-2 m-2 outline-hidden bg-[#FFF6D2] rounded-md ring-2 ring-black text-[#006E61] placeholder-[#006E61]"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className="p-2 m-2 outline-hidden bg-[#FFF6D2] rounded-md ring-2 ring-black text-[#006E61] placeholder-[#006E61]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setOtpSent(false);
                }}
              />
              {!otpSent && validateEmail(email) && (
                <>
                  <div className="flex justify-center items-center px-2">
                  <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}// Replace with your Turnstile site key
                    onVerify={(token) => setCaptchaToken(token)} // Handle CAPTCHA token
                  />
                  </div>
                  <button
                    className="p-2 m-2 bg-[#006E61] text-white rounded-lg flex justify-center items-center"
                    onClick={sendOtp}
                    disabled={isOtpLoading || !captchaToken} // Disable until CAPTCHA is completed
                  >
                    {isOtpLoading ? (
                      <div className="flex items-center">
                        <FiLoader className="animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      "Send OTP"
                    )}
                  </button>
                </>
              )}
              {otpSent && (
                <input
                  className="p-2 m-2 outline-hidden bg-[#FFF6D2] rounded-md ring-2 ring-black text-[#006E61] placeholder-[#006E61]"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              )}
              <input
                className="p-2 m-2 outline-hidden bg-[#FFF6D2] rounded-md ring-2 ring-black text-[#006E61] placeholder-[#006E61]"
                type="text"
                placeholder="Phone No."
                value={phone}
                maxLength={10}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className="p-2 m-2 outline-hidden bg-[#FFF6D2] rounded-md ring-2 ring-black text-[#006E61] placeholder-[#006E61]"
                type={showEye ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute right-[1.4rem] bottom-32 sm:bottom-32 sm:right-[1.4rem]"
                onClick={eyeHandler}
              >
                {showEye ? <FiEye /> : <FiEyeOff />}
              </button>
              <select
                className="p-2 m-2 outline-hidden rounded-md ring-2 bg-[#FFF6D2] focus:none ring-black text-[#006E61] placeholder-[#006E61]"
                onChange={handleSelectChange}
              >
                <option value="PICT">PICT</option>
                <option value="NON-PICT">NON-PICT</option>
              </select>
              <input
                className="p-2 m-2 outline-hidden rounded-md bg-[#FFF6D2] ring-2 ring-black text-[#006E61] placeholder-[#006E61]"
                type="text"
                placeholder="College Name"
                value={collegeName}
                onChange={(e) => {
                  if (collegeType === "NON-PICT") {
                    setCollegeName(e.target.value);
                  }
                }}
              />
            </div>
            <div className="flex justify-center items-center body-font">
              <button
                onClick={handleRegister}
                className="outline-hidden w-40 sm:w-40 m-2 font-semibold ring-2 ring-black text-[#006E61] p-2 mb-3 bg-[#FFF6D2] rounded-md hover:bg-[#e8d396]"
                disabled={!otpSent}
              >
                Sign Up
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

export default isAuth(Register);
