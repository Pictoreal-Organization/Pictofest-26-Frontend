

// "use client";

// import Link from "next/link";
// import axios from "axios";
// import { toast } from "sonner";
// import { Lobster } from "next/font/google";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
// import { useAuth } from "@/app/context/Auth";
// import { baseURL } from "@/app/api";
// import isAuth from "@/app/components/isAuth";
// import Turnstile from "react-turnstile";

// const inter = Lobster({ subsets: ["latin"], weight: "400" });

// const Register = () => {
//   const router = useRouter();
//   const { setUserAuthInfo } = useAuth();

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [collegeName, setCollegeName] = useState(
//     "Pune Institute Of Computer Technology"
//   );
//   const [collegeType, setCollegeType] = useState("PICT");
//   const [showEye, setShowEye] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [isOtpLoading, setIsOtpLoading] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [captchaToken, setCaptchaToken] = useState("");

//   const eyeHandler = () => {
//     setShowEye(!showEye);
//   };

//   const handleSelectChange = (e) => {
//     const college = e.target.value;
//     if (college === "NON-PICT") {
//       setCollegeName("");
//     } else {
//       setCollegeName("Pune Institute Of Computer Technology");
//     }
//     setCollegeType(college);
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       toast.error("Please enter a valid email.");
//       return;
//     }

//     if (phone.length < 10) {
//       toast.error("Phone No. must be 10 digits at least.");
//       return;
//     }
//     if (password.length < 8) {
//       toast.error("Min. Password Length: 8 characters.");
//       return;
//     }
//     if (!otp) {
//       toast.error("Please enter the OTP.");
//       return;
//     }

//     try {
//       const response = await axios.post(`${baseURL}/user/signup`, {
//         first_name: firstName,
//         last_name: lastName,
//         email: email,
//         mobile_number: phone,
//         college_type: collegeType,
//         college_name: collegeName,
//         password: password,
//         otp: otp,
//       });

//       setUserAuthInfo(response.data.data);
//       toast.success(response.data.message);
//       router.push("/");
//       window.location.reload();
//     } catch (err) {
//       if (err.response?.data?.message?.includes("Email already verified")) {
//         toast.error("Email already verified. Please login instead.");
//       } else {
//         toast.error(err.response?.data?.message || "Failed to sign up.");
//       }
//       console.error(err.response?.data?.message);
//     }
//   };

//   const sendOtp = async () => {
//     if (!validateEmail(email)) {
//       toast.error("Please enter a valid email to send OTP.");
//       return;
//     }

//     if (!captchaToken) {
//       toast.error("Please complete the CAPTCHA verification.");
//       return;
//     }

//     setIsOtpLoading(true);

//     try {
//       const response = await axios.post(`${baseURL}/email/sendZoho`, {
//         email: email,
//         turnstileToken: captchaToken,
//       });
//       toast.success("OTP sent to your email.");
//       setOtpSent(true);
//       console.log("Turnstile Token before sending:", captchaToken);
//     } catch (err) {
//       if (err.response?.status === 400 && err.response?.data === "Email already verified") {
//         toast.error("Email already verified. Please login instead.");
//       } else if (err.response?.status === 500) {
//         toast.error("Failed to send OTP. Please try again later.");
//       } else {
//         toast.error(err.response?.data || "An error occurred while sending OTP. Please try again.");
//       }
//       console.error(err.response?.data);
//     } finally {
//       setIsOtpLoading(false);
//     }
//   };

//   return (
//     <main className={inter.className}>
//       <style jsx>{`
//         .bumpy-card {
//           position: relative;
//           background: rgba(20, 20, 30, 0.85);
//           backdrop-filter: blur(10px);
//         }
        
//         .bumpy-card::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           border-radius: 20px;
//           padding: 3px;
//           background: repeating-linear-gradient(
//             90deg,
//             #E77C40 0px,
//             #E77C40 8px,
//             #8B4513 8px,
//             #8B4513 12px,
//             transparent 12px,
//             transparent 16px
//           );
//           -webkit-mask: 
//             linear-gradient(#fff 0 0) content-box, 
//             linear-gradient(#fff 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//         }
        
//         .bumpy-border-top,
//         .bumpy-border-bottom,
//         .bumpy-border-left,
//         .bumpy-border-right {
//           position: absolute;
//           background: #E77C40;
//           pointer-events: none;
//           z-index: 1;
//         }
        
//         .bumpy-border-top,
//         .bumpy-border-bottom {
//           left: 0;
//           right: 0;
//           height: 6px;
//           background-image: radial-gradient(circle at 10px 50%, transparent 5px, #E77C40 5px);
//           background-size: 20px 100%;
//           background-repeat: repeat-x;
//         }
        
//         .bumpy-border-top {
//           top: -3px;
//         }
        
//         .bumpy-border-bottom {
//           bottom: -3px;
//         }
        
//         .bumpy-border-left,
//         .bumpy-border-right {
//           top: 0;
//           bottom: 0;
//           width: 6px;
//           background-image: radial-gradient(circle at 50% 10px, transparent 5px, #E77C40 5px);
//           background-size: 100% 20px;
//           background-repeat: repeat-y;
//         }
        
//         .bumpy-border-left {
//           left: -3px;
//         }
        
//         .bumpy-border-right {
//           right: -3px;
//         }
//       `}</style>

//       <div className="relative flex justify-center items-center min-h-screen bg-[url('/img/home/bg_img.png')] bg-cover bg-[position:left_bottom] md:bg-center overflow-hidden">
        
//         {/* Stars Background */}
//         <img
//           src="/img/home/Stars_bg.svg"
//           alt="Stars Background"
//           className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none"
//         />

//         {/* Pictofest Logo */}
//         <img
//           src="/img/common/final_logo.png"
//           alt="Pictofest Logo"
//           className="absolute md:top-[70px] top-[12%] left-1/2 -translate-x-1/2 w-[200px] md:w-[230px] object-contain z-30"
//         />

//         {/* Lanterns */}
//         <img
//           src="/img/home/Group-350.svg"
//           alt="Left Lantern"
//           className="absolute top-0 left-[140px] w-[130px] z-10 hidden md:block"
//         />
//         <img
//           src="/img/home/Group-350.svg"
//           alt="Right Lantern"
//           className="absolute top-0 right-[140px] w-[130px] scale-x-[-1] z-10 hidden md:block"
//         />

//         {/* Mobile Skeleton */}
//         <img
//           src="/img/home/Group 514.svg"
//           alt="Skeleton Mobile"
//           className="absolute bottom-[-20px] left-[50%] -translate-x-1/2 w-[100%] max-w-[100%] scale-y-80 h-auto object-contain z-10 block md:hidden"
//         />

//         {/* Desktop Skeletons */}
//         <img
//           src="/img/home/Group 512.svg"
//           alt="Skeletons Left"
//           className="absolute bottom-0 left-[-5%] w-[45%] h-[180px] object-contain z-20 hidden md:block"
//         />
//         <img
//           src="/img/home/Group 513.svg"
//           alt="Skeletons Right"
//           className="absolute bottom-0 right-[-5%] w-[45%] h-[180px] object-contain z-20 hidden md:block"
//         />

//         {/* REGISTER FORM CARD WITH BUMPY BORDER */}
//         <div className="absolute top-[120px] md:top-[160px] left-1/2 -translate-x-1/2 w-[90%] max-w-[550px] z-80">
//         <div
//   className="bumpy-card rounded-2xl p-6 md:p-8 relative bg-cover bg-center"
//   style={{
//     backgroundImage: "url('/img/reg_login/reg_login_card_bg.svg')",
//   }}
// >
//             {/* Bumpy Border Elements */}
//             <div className="bumpy-border-top"></div>
//             <div className="bumpy-border-bottom"></div>
//             <div className="bumpy-border-left"></div>
//             <div className="bumpy-border-right"></div>

//             {/* Heading */}
//             <div className="flex flex-col items-center text-white mb-4 relative z-10">
//               <h1 className="text-3xl md:text-4xl leading-tight sub-heading-font">
//                 Create Account
//               </h1>
//             </div>

//             {/* Form Inputs - Two Column Layout */}
//             <div className="body-font relative z-10">
//               {/* First Row - First Name & Last Name */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
//                 <input
//                   className="h-10 px-4 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/90 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
//                   type="text"
//                   placeholder="First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
                
//                 <input
//                   className="h-10 px-4 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
//                   type="text"
//                   placeholder="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>

//               {/* Email - Full Width */}
//               <div className="mb-3">
//                 <input
//                   className="w-full h-10 px-4 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                     setOtpSent(false);
//                   }}
//                 />
//               </div>

//               {/* OTP Section - Full Width */}
//               {!otpSent && validateEmail(email) && (
//                 <div className="flex flex-col items-center space-y-2 mb-3">
//                   <div className="scale-90 origin-center">
//                     <Turnstile
//                       sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
//                       onVerify={(token) => setCaptchaToken(token)}
//                     />
//                   </div>
//                   <button
//                     className="w-full py-2.5 bg-[#E77C40] text-white border-2 border-black rounded-xl text-sm font-bold hover:bg-[#d67030] transition-colors disabled:opacity-50"
//                     onClick={sendOtp}
//                     disabled={isOtpLoading || !captchaToken}
//                   >
//                     {isOtpLoading ? "Sending..." : "Send OTP"}
//                   </button>
//                 </div>
//               )}

//               {(
//                 <div className="mb-3">
//                   <input
//                     className="w-full h-10 px-4 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
//                     type="text"
//                     placeholder="Enter OTP"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                   />
//                 </div>
//               )}

//               {/* Phone & Password Row */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
//                 <input
//                   className="h-10 px-4 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
//                   type="text"
//                   placeholder="Phone No."
//                   value={phone}
//                   maxLength={10}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />

//                 {/* Password with Eye Icon */}
//                 <div className="relative">
//                   <input
//                     className="w-full h-10 px-4 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
//                     type={showEye ? "text" : "password"}
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <button
//                     className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
//                     onClick={eyeHandler}
//                   >
//                     {showEye ? <FiEye size={18} /> : <FiEyeOff size={18} />}
//                   </button>
//                 </div>
//               </div>

//               {/* College Type & College Name Row */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 <select
//                   className="h-10 px-4 bg-[#E77C40] rounded-xl border-2 border-black text-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm appearance-none cursor-pointer"
//                   onChange={handleSelectChange}
//                   value={collegeType}
//                 >
//                   <option value="PICT">PICT</option>
//                   <option value="NON-PICT">NON-PICT</option>
//                 </select>

//                 <input
//                   className="h-10 px-4 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm disabled:opacity-60"
//                   type="text"
//                   placeholder="College Name"
//                   value={collegeName}
//                   disabled={collegeType === "PICT"}
//                   onChange={(e) => setCollegeName(e.target.value)}
//                 />
//               </div>
//             </div>

//             {/* Sign Up Button */}
//             <div className="flex justify-center mt-5 relative z-10">
//               <button
//                 onClick={handleRegister}
//                 // disabled={!otpSent}
//                 className="px-8 py-2.5 bg-[#E77C40] text-white text-lg font-bold rounded-xl border-2 border-black hover:bg-[#d67030] transition-all disabled:opacity-50 disabled:cursor-not-allowed body-font"
//               >
//                 Sign Up
//               </button>
//             </div>

//             {/* Login Redirect */}
//             <div className="text-xs text-center text-white mt-4 body-font relative z-10">
//               <span>Already have an account? </span>
//               <Link href="/login" className="font-bold underline ml-1 hover:text-[#E77C40] transition-colors">
//                 Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };


"use client";

import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import { Lobster } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAuth } from "@/app/context/Auth";
import { baseURL } from "@/app/api";
import isAuth from "@/app/components/isAuth";
import Turnstile from "react-turnstile";

const inter = Lobster({ subsets: ["latin"], weight: "400" });

const Register = () => {
  const router = useRouter();
  const { setUserAuthInfo } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [collegeName, setCollegeName] = useState("Pune Institute Of Computer Technology");
  const [collegeType, setCollegeType] = useState("PICT");
  const [showEye, setShowEye] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpLoading, setIsOtpLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const eyeHandler = () => setShowEye(!showEye);

  const handleSelectChange = (e) => {
    const college = e.target.value;
    college === "NON-PICT" ? setCollegeName("") : setCollegeName("Pune Institute Of Computer Technology");
    setCollegeType(college);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return toast.error("Please enter a valid email.");
    if (phone.length < 10) return toast.error("Phone No. must be 10 digits at least.");
    if (password.length < 8) return toast.error("Min. Password Length: 8 characters.");
    if (!otp) return toast.error("Please enter the OTP.");

    try {
      const response = await axios.post(`${baseURL}/user/signup`, {
        first_name: firstName, last_name: lastName, email, mobile_number: phone,
        college_type: collegeType, college_name: collegeName, password, otp
      });
      setUserAuthInfo(response.data.data);
      toast.success(response.data.message);
      router.push("/");
      window.location.reload();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to sign up.");
    }
  };

  const sendOtp = async () => {
    if (!validateEmail(email)) return toast.error("Valid email required.");
    if (!captchaToken) return toast.error("Complete CAPTCHA first.");
    setIsOtpLoading(true);
    try {
      await axios.post(`${baseURL}/email/sendZoho`, { email, turnstileToken: captchaToken });
      toast.success("OTP sent.");
      setOtpSent(true);
    } catch (err) {
      toast.error("Failed to send OTP.");
    } finally {
      setIsOtpLoading(false);
    }
  };

  // Reusable styles
  const inputStyle = "w-full h-11 px-4 bg-[#E77C40] rounded-xl border-2 border-black text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-sm";
  const buttonStyle = "w-full h-12 bg-[#E77C40] text-white text-xl font-bold rounded-xl border-2 border-black hover:bg-[#FF8C50] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_3px_0_#000] active:shadow-none active:translate-y-1";

  return (
    <main className={`${inter.className} min-h-screen w-full relative`}>
      
      {/* ============================================================
          LAYER 1: FIXED BACKGROUND (Stays Still)
         ============================================================ */}
      <div className="fixed inset-0 z-0 w-full h-screen pointer-events-none bg-[#2A0F55]">
        {/* Main Background Image */}
        <div className="absolute inset-0 bg-[url('/img/home/bg_img.png')] bg-cover bg-[position:left_bottom] md:bg-center"></div>
        {/* Stars */}
        <img src="/img/home/Stars_bg.svg" alt="Stars" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        {/* Lanterns */}
        <img src="/img/home/Group-350.svg" alt="Lantern" className="absolute top-0 left-[5%] w-[100px] z-10 hidden md:block" />
        <img src="/img/home/Group-350.svg" alt="Lantern" className="absolute top-0 right-[5%] w-[100px] scale-x-[-1] z-10 hidden md:block" />
        {/* MUSICIANS - Fixed at Bottom */}
        <img src="/img/home/Group 512.svg" alt="Skeleton Left" className="absolute bottom-0 left-[-5%] w-[45%] h-[180px] object-contain z-20 hidden md:block" />
        <img src="/img/home/Group 513.svg" alt="Skeleton Right" className="absolute bottom-0 right-[-5%] w-[45%] h-[180px] object-contain z-20 hidden md:block" />
        <img src="/img/home/Group 514.svg" alt="Skeleton Mobile" className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-full scale-y-90 object-contain z-20 block md:hidden" />
      </div>

      {/* ============================================================
          LAYER 2: SCROLLABLE CONTENT (Moves)
         ============================================================ */}
      <div className="relative z-10 w-full flex flex-col items-center pt-[100px] pb-[300px]">
          
          {/* Logo */}
          <img
            src="/img/common/final_logo.png"
            alt="Pictofest Logo"
            className="w-[200px] md:w-[260px] object-contain mb-8 drop-shadow-xl"
          />

          {/* Form Card */}
          <div className="w-[90%] max-w-[600px] relative">
            
            <div
              className="rounded-[30px] p-8 md:p-12 relative shadow-2xl border-[5px] border-[#E77C40]"
              style={{ 
                  // 1. Use the pattern image
                  backgroundImage: "url('/img/reg_login/reg_login_card_bg.svg')",
                  // 2. REPEAT it so it tiles instead of zooming
                  backgroundRepeat: 'repeat', 
                  // 3. Set a specific size for the pattern (e.g., 300px wide) so it stays constant
                  backgroundSize: '300px auto',
                  backgroundColor: '#2e1065' // Fallback color matches dark purple
              }}
            >
              
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl text-white heading-font text-center mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Create Account
              </h1>

              {/* Inputs */}
              <div className="body-font flex flex-col gap-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className={inputStyle} type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <input className={inputStyle} type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <input className={inputStyle} type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); setOtpSent(false); }} />

                {/* EXPANDING SECTION */}
                {!otpSent && validateEmail(email) && (
                  <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-300 bg-black/20 p-4 rounded-xl border border-white/10">
                    <div className="scale-90 origin-center">
                      <Turnstile sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY} onVerify={(token) => setCaptchaToken(token)} />
                    </div>
                    <button className={buttonStyle} onClick={sendOtp} disabled={isOtpLoading || !captchaToken}>
                      {isOtpLoading ? "Sending..." : "Send OTP"}
                    </button>
                  </div>
                )}

                {otpSent && (
                  <input className={`${inputStyle} ring-4 ring-yellow-400`} type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className={inputStyle} type="text" placeholder="Phone No." value={phone} maxLength={10} onChange={(e) => setPhone(e.target.value)} />
                  <div className="relative">
                    <input className={inputStyle} type={showEye ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200" onClick={eyeHandler}>
                      {showEye ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <select className={`${inputStyle} appearance-none cursor-pointer`} onChange={handleSelectChange} value={collegeType}>
                        <option value="PICT" className="text-black">PICT</option>
                        <option value="NON-PICT" className="text-black">NON-PICT</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none text-xs">▼</span>
                  </div>
                  <input className={`${inputStyle} ${collegeType === "PICT" ? "opacity-60 cursor-not-allowed" : ""}`} type="text" placeholder="College Name" value={collegeName} disabled={collegeType === "PICT"} onChange={(e) => setCollegeName(e.target.value)} />
                </div>

                <div className="mt-4">
                  <button onClick={handleRegister} className={buttonStyle}>
                    Sign Up
                  </button>
                </div>

                <div className="text-center description-font text-white mt-2">
                  <span>Already have an account? </span>
                  <Link href="/login" className="font-bold underline ml-1 hover:text-yellow-300 transition-colors">Login</Link>
                </div>

              </div>
            </div>
          </div>
      </div>
    </main>
  );
};

export default isAuth(Register);