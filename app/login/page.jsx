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
          md:top-[80px]
          top-[15%]
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
          bottom-[19%]   
          md:bottom-[110px]
          left-1/2
          -translate-x-1/2
          md:w-[90%] 
          w-[115%]
          h-[60%]
          max-w-[430px]
          object-contain
          z-[5]
        "
      />

      {/* 🧾 LOGIN FORM */}
      <div
        className="
          absolute
          top-[30%]
          md: top-[25%] 
          left-1/2
          -translate-x-1/2
          w-[90%]          
          max-w-[340px]
          z-20
        "
      >        
        <div className="p-1 md:p-4"> 
          <div className="flex flex-col items-center text-white  mt-10 md:mt-0"> 
            <h1 className="text-xl md:text-3xl sub-heading-font tracking-tight">
              Welcome Back!
            </h1>
            <p className="text-[15px] md:text-sm opacity-90 body-font">
              Login to your account
            </p>
          </div>

          <div className="relative space-y-2 md:space-y-3 flex flex-col items-center w-full"> 
  
  {/* Email Input */}
  <input
    className="
      w-[85%]           /* Defines the width on mobile */
      mx-auto           /* Centers the box horizontally */
      md:w-full         /* Returns to full width on desktop */
      h-9 md:h-10 
      px-4 
      bg-[#E77C40] 
      rounded-xl
      border-2 
      border-black 
      text-white 
      placeholder:text-white/80 
      focus:outline-none 
      text-xs md:text-sm 
      body-font"
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  {/* Password Wrapper - Centered to match the Email input */}
  <div className="relative w-[85%] mx-auto md:w-full"> 
    <input
      className="
        w-full          /* Fills exactly the centered 85% width */
        h-9 md:h-10 
        px-4 
        bg-[#E77C40] 
        rounded-xl 
        border-2 
        border-black 
        text-white 
        placeholder:text-white/80 
        focus:outline-none 
        text-xs md:text-sm 
        body-font"
      type={showEye ? "text" : "password"}
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    {/* Eye Icon - Now positioned inside the centered wrapper */}
    <button
      className="absolute right-3 top-1/2 -translate-y-1/2 text-white scale-75"
      onClick={eyeHandler}
    >
      {showEye ? <FiEye /> : <FiEyeOff />}
    </button>
  </div>
</div>
          <div className="flex justify-between items-center text-[15px] md:text-xs text-white mt-3 mb-1 body-font px-5 md:px-0">
            <label className="flex items-center gap-1 cursor-pointer body-font">
              <input type="checkbox" className="w-3 h-3 right-3" />
              Remember me
            </label>
            <Link href="/forgot-password">Forgot Password?</Link>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              onClick={handleLogin}
              className=" px-6               
                          md:px-8           
                          py-1 
                          md:py-1            
                          bg-[#E77C40] 
                          text-white 
                          text-sm            
                          md:text-xl          
                          rounded-xl 
                          border-2 
                          px-8
                          border-black
                          sub-heading-font"
            >
              Log in
            </button>
            <div className="flex items-center justify-center gap-15 mt-0 md:mt-1 body-font">
            <span className="text-[15px] md:text-xs text-white">
            Don’t have an account?
            </span>
            <Link 
              href="/register" 
              className="text-[15px] md:text-xs text-white underline font-bold"
            >
            Register here
            </Link>
        </div>  
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
      
      {/* Mobile Skeleton (Group 514) */}
      <img
        src="/img/home/Group 514.svg"
        alt="Skeleton Mobile"
        className="
          absolute
          bottom-[-10px]   /* Positioned slightly off-screen to look grounded */
          left-1/2
          -translate-x-1/2
          w-[100%]         
          max-w-[100%]
          h-auto
          object-contain
          z-10
          block
          md:hidden
        "
      />

      {/* Desktop Skeletons */}
      <img
        src="/img/home/Group 512.svg"
        alt="Skeletons Left"
        className="absolute bottom-0 left-[-5%] w-[45%] h-[180px] object-contain z-20 hidden md:block"
      />
      <img
        src="/img/home/Group 513.svg"
        alt="Skeletons Right"
        className="absolute bottom-0 right-[-5%] w-[45%] h-[180px] object-contain z-20 hidden md:block"
      />
    </div>
  </main>
  );
};
export default isAuth(Login);
