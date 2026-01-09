// "use client";

// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import About from "@/app/components/About";
// import Events from "@/app/components/Events";
// import Footer from "@/app/components/Footer";
// import Landing from "@/app/components/Landing";
// import PrizePool from "./components/PrizePool";

// const Home = () => {
//   useEffect(() => {
//     const CURRENT_DB_VERSION = "2.0"; // Change this after each migration

//     const storedVersion = localStorage.getItem("dbVersion");

//     if (storedVersion !== CURRENT_DB_VERSION) {
//       localStorage.clear();
//       sessionStorage.clear();

//       localStorage.setItem("dbVersion", CURRENT_DB_VERSION);
//     }
//   }, []);

//   return (
//     <motion.main
//       className="bg-[url('/img/home/bg-repeat.svg')] bg-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="bg-[url('/img/home/background.svg')] bg-right flex flex-col justify-evenly lg:justify-start pt-12 lg:pt-24 items-center md:bg-center bg-cover">
//         <Landing />
//       </div>
//       <div>
//        <PrizePool />
//       </div>
//       <div className="md:px-24 lg:px-40 sm:pt-60">
//         <Events />
//       </div>
//       <div className="pt-20">
//         <About />
//         <Footer />
//       </div>
//     </motion.main>
//   );
// };

// export default Home;


//2026 code
// "use client";

// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import About from "@/app/components/About";
// import Events from "@/app/components/Events";
// import Footer from "@/app/components/Footer";
// import PrizePool from "./components/PrizePool";

// const Home = () => {
//   useEffect(() => {
//     const CURRENT_DB_VERSION = "2.0";
//     const storedVersion = localStorage.getItem("dbVersion");
//     if (storedVersion !== CURRENT_DB_VERSION) {
//       localStorage.clear();
//       sessionStorage.clear();
//       localStorage.setItem("dbVersion", CURRENT_DB_VERSION);
//     }
//   }, []);

//   return (
//     <motion.main
//       className="relative min-h-screen w-full"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       {/* ============================================================
//           1. BACKGROUND LAYER (Scrolls with content)
//          ============================================================ */}
//       <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044]">
//         {/* --- Mobile Background --- */}
//         <div className="block lg:hidden w-full relative">
//           <Image
//             src="/img/home/mobile-bg.png"
//             alt="Mobile Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>

//         {/* --- Desktop Background --- */}
//         <div className="hidden lg:block w-full relative">
//           <Image
//             src="/img/home/desktop-bg.png"
//             alt="Desktop Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//       </div>

//       {/* ============================================================
//           2. HERO SECTION (Presents Ribbon + Logo)
//          ============================================================ */}
//       <div className="flex flex-col justify-center items-center pt-24 lg:pt-32 min-h-[60vh] gap-4">
//         {/* --- A. PICTOREAL PRESENTS RIBBON --- */}
//         {/* Adjust width (w-64) as needed to fit your design */}
//         <div className="w-64 md:w-80 transition-transform hover:scale-105 duration-500">
//           <Image
//             src="/img/home/pictoreal-presents.png" // <--- MAKE SURE FILENAME MATCHES
//             alt="Pictoreal Presents"
//             width={400}
//             height={100}
//             className="w-full h-auto drop-shadow-lg"
//             priority
//           />
//         </div>

//         {/* --- B. MAIN LOGO --- */}
//         {/* I restored this so the ribbon has something to sit 'above' */}
//         <div className="w-72 md:w-[500px] transition-transform hover:scale-105 duration-500">
//           <Image
//             src="/img/common/final_logo.png"
//             alt="Pictofest Logo"
//             width={600}
//             height={400}
//             className="w-full mt-2 h-auto drop-shadow-2xl"
//             priority
//           />
//         </div>
//       </div>

//       {/* {/* ============================================================
//           3. REST OF CONTENT
//          ============================================================ */}
//       <div>
//         <PrizePool />
//       </div>
//       <div className="md:px-24 lg:px-40 sm:pt-60">
//         <Events />
//       </div>
//       <div className="pt-20">
//         <About />
//         <Footer />
//       </div>
//     </motion.main> 
//   );
// };

// export default Home;


// "use client";

// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import About from "@/app/components/About";
// import Events from "@/app/components/Events";
// import Footer from "@/app/components/Footer";
// import PrizePool from "./components/PrizePool";

// const Home = () => {
//   useEffect(() => {
//     const CURRENT_DB_VERSION = "2.0";
//     const storedVersion = localStorage.getItem("dbVersion");
//     if (storedVersion !== CURRENT_DB_VERSION) {
//       localStorage.clear();
//       sessionStorage.clear();
//       localStorage.setItem("dbVersion", CURRENT_DB_VERSION);
//     }
//   }, []);

//   return (
//     <motion.main
//       className="relative min-h-screen w-full overflow-x-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       {/* ============================================================
//           1. BACKGROUND LAYER (Scrolls with content)
//          ============================================================ */}
//       <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044]">
//         {/* --- Mobile Background --- */}
//         <div className="block lg:hidden w-full relative">
//           <Image
//             src="/img/home/mobile-bg.png"
//             alt="Mobile Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>

//         {/* --- Desktop Background --- */}
//         <div className="hidden lg:block w-full relative">
//           <Image
//             src="/img/home/desktop-bg.png"
//             alt="Desktop Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//       </div>

//       {/* ============================================================
//           2. HERO SECTION (Logo + Singers + Base)
//           Changed to h-screen to fit the 'Landing Page' feel
//          ============================================================ */}
//       <div className="relative h-screen flex flex-col justify-start items-center pt-24 lg:pt-32">
//         {/* --- A. LOGO & RIBBON WRAPPER ---
//             z-20 ensures this stays on top of the singers 
//         */}
//         <div className="z-20 flex flex-col items-center gap-4">
//           {/* Ribbon */}
//           <div className="w-64 md:w-80 transition-transform hover:scale-105 duration-500">
//             <Image
//               src="/img/home/pictoreal-presents.png"
//               alt="Pictoreal Presents"
//               width={400}
//               height={100}
//               className="w-full h-auto drop-shadow-lg"
//               priority
//             />
//           </div>

//           {/* Main Logo */}
//           <div className="w-200 md:w-[700px] transition-transform hover:scale-105 duration-500">
//             <Image
//               src="/img/common/final_logo.png"
//               alt="Pictofest Logo"
//               width={600}
//               height={400}
//               className="w-full mt-2 h-auto drop-shadow-2xl"
//               priority
//             />
//           </div>
//         </div>

//         {/* --- B. THE STAGE (Base + Singers) --- 
//             Added as requested. Positioned absolutely at the bottom of the Hero screen.
//         */}
//         <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-10 pointer-events-none">
//           {/* Wrapper for alignment */}
//           <div className="relative w-full flex justify-center items-end">
//             {/* SINGERS LAYER 
//                     - Positioned relative to the base (bottom-[12%]).
//                     - Equal width (35%) for both.
//                 */}
//             <div className="absolute bottom-[10%] sm:bottom-[12%] w-full flex justify-between items-end z-20">
//               {/* Left Singer */}
//               {/* Note: Ensure these paths match where you put the files */}
//               <img
//                 src="/img/home/home-left-singers.png"
//                 alt="Left Singer"
//                 className="w-[35%] md:w-[30%] h-auto object-contain drop-shadow-2xl items-start"
//               />

//               {/* Right Singer */}
//               <img
//                 src="/img/home/home-right-singers.png"
//                 alt="Right Singer"
//                 className="w-[25%] md:w-[20%] h-auto object-contain drop-shadow-2xl items-end translate-y-15 -translate-x-3"
//               />
//             </div>

//             {/* BASE LAYER */}
//             <img
//               src="/img/home/home-base.png"
//               alt="Home Base"
//               className="relative z-10 w-full md:w-[100%] object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ============================================================
//           3. REST OF CONTENT
//           Added relative z-30 to ensure it stacks correctly below the hero
//          ============================================================ */}
//       <div className="relative z-30">
//         <div>
//           <PrizePool />
//         </div>
//         <div className="md:px-24 lg:px-40 sm:pt-60">
//           <Events />
//         </div>
//         <div className="pt-20">
//           <About />
//           <Footer />
//         </div>
//       </div>
//     </motion.main>
//   );
// };

// export default Home;

//new 
// "use client";

// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import About from "@/app/components/About";
// import Events from "@/app/components/Events";
// import Footer from "@/app/components/Footer";
// import PrizePool from "./components/PrizePool";

// const Home = () => {
//   useEffect(() => {
//     const CURRENT_DB_VERSION = "2.0";
//     const storedVersion = localStorage.getItem("dbVersion");
//     if (storedVersion !== CURRENT_DB_VERSION) {
//       localStorage.clear();
//       sessionStorage.clear();
//       localStorage.setItem("dbVersion", CURRENT_DB_VERSION);
//     }
//   }, []);

//   return (
//     <motion.main
//       className="relative min-h-screen w-full overflow-x-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       {/* ============================================================
//           1. BACKGROUND LAYER
//          ============================================================ */}
//       <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044]">
//         <div className="block lg:hidden w-full relative">
//           <Image
//             src="/img/home/mobile-bg.png"
//             alt="Mobile Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//         <div className="hidden lg:block w-full relative">
//           <Image
//             src="/img/home/desktop-bg.png"
//             alt="Desktop Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//       </div>

//       {/* ============================================================
//           2. HERO SECTION
//          ============================================================ */}
//       <div className="relative h-screen flex flex-col justify-start items-center pt-24 lg:pt-32">
//         {/* --- A. LOGO WRAPPER ---
//             Added 'relative' so we can position the Pot relative to this central logo.
//         */}
//         <div className="relative z-20 flex flex-col items-center gap-2">
//           {/* 1. Ribbon */}
//           <div className="w-64 md:w-80 transition-transform hover:scale-105 duration-500">
//             <Image
//               src="/img/home/pictoreal-presents.png"
//               alt="Pictoreal Presents"
//               width={400}
//               height={100}
//               className="w-full h-auto drop-shadow-lg"
//               priority
//             />
//           </div>

//           {/* 2. Main Logo */}
//           <div className="w-72 md:w-[700px] transition-transform hover:scale-105 duration-500">
//             <Image
//               src="/img/common/final_logo.png"
//               alt="Pictofest Logo"
//               width={600}
//               height={400}
//               className="w-full mt-2 h-auto drop-shadow-2xl"
//               priority
//             />
//           </div>

//           {/* 3. ANIMATION: Dates & Pot
//                 - Positioned ABSOLUTE to the RIGHT of the logo.
//                 - top-[40%]: Adjusts how high/low it hangs relative to the logo.
//                 - -right-4 md:-right-36: Pushes it to the extreme right.
//             */}
//           <motion.div
//             className="absolute top-[53%] -right-0 left-118.5 -z-10"
//             initial={{ y: -300, opacity: 0 }} // Start high up (like up the thread)
//             animate={{ y: 0, opacity: 1 }} // Slide down to resting position
//             transition={{
//               delay: 0.8, // Wait for logo to settle
//               duration: 1000, // Slow slide down
//               type: "spring", // Slight bounce at the end
//               stiffness: 70,
//               damping: 12,
//             }}
//           >
//             <Image
//               src="/img/home/dates-and-pot.png"
//               alt="Dates 20-22 Feb"
//               width={300}
//               height={200}
//               // Widths: w-24 (mobile), w-40 (tablet), w-48 (desktop)
//               className="w-24 md:w-40 lg:w-48 h-auto drop-shadow-xl"
//             />
//           </motion.div>
//         </div>

//         {/* --- B. THE STAGE (Base + Singers) --- */}
//         <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-10 pointer-events-none">
//           <div className="relative w-full flex justify-center items-end">
//             {/* SINGERS */}
//             <div className="absolute bottom-[10%] sm:bottom-[12%] w-full flex justify-between items-end z-20">
//               {/* Left Singer */}
//               <img
//                 src="/img/home/home-left-singers.png"
//                 alt="Left Singer"
//                 className="w-[50%md:w-[35%] md:w-[35%] h-auto object-contain drop-shadow-2xl items-start"
//               />

//               {/* Right Singer */}
//               <img
//                 src="/img/home/home-right-singers.png"
//                 alt="Right Singer"
//                 className="hidden md:block w-[25%] md:w-[20%] h-auto object-contain drop-shadow-2xl items-end translate-y-16 -translate-x-15"
//               />
//             </div>

//             {/* BASE */}
//             <img
//               src="/img/home/home-base.png"
//               alt="Home Base"
//               className="relative z-10 w-full md:w-[100%] object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ============================================================
//           3. REST OF CONTENT
//          ============================================================ */}
//       <div className="relative z-30">
//         <div>
//           <PrizePool />
//         </div>
//         <div className="md:px-24 lg:px-40 sm:pt-60">
//           <Events />
//         </div>
//         <div className="pt-20">
//           <About />
//           <Footer />
//         </div>
//       </div>
//     </motion.main>
//   );
// };

// export default Home;

// "use client";

// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import About from "@/app/components/About";
// import Events from "@/app/components/Events";
// import Footer from "@/app/components/Footer";
// import PrizePool from "./components/PrizePool";

// const Home = () => {
//   useEffect(() => {
//     const CURRENT_DB_VERSION = "2.0";
//     const storedVersion = localStorage.getItem("dbVersion");
//     if (storedVersion !== CURRENT_DB_VERSION) {
//       localStorage.clear();
//       sessionStorage.clear();
//       localStorage.setItem("dbVersion", CURRENT_DB_VERSION);
//     }
//   }, []);

//   return (
//     <motion.main
//       className="relative min-h-screen w-full overflow-x-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       {/* ============================================================
//           1. BACKGROUND LAYER
//          ============================================================ */}
//       <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044] h-full object-cover">
        
//         <div className="block lg:hidden w-full relative">
          
//           <Image
//             src="/img/home/mobile-bg.png"
//             alt="Mobile Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-full object-cover"
//             priority
//           />
//         </div>
        
//         <div className="hidden lg:block w-full relative">
//           <Image
//             src="/img/home/desktop-bg.png"
//             alt="Desktop Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//       </div>

//       {/* ============================================================
//           2. HERO SECTION
//          ============================================================ */}
//       <div className="relative h-screen flex flex-col justify-start items-center pt-24 lg:pt-32">
//         {/* --- A. LOGO WRAPPER --- */}
//         <div className="relative z-20 flex flex-col items-center gap-2">
//           {/* 1. Ribbon */}
//           <div className="w-64 md:w-80 transition-transform hover:scale-105 duration-500">
//             <Image
//               src="/img/home/pictoreal-presents.png"
//               alt="Pictoreal Presents"
//               width={400}
//               height={100}
//               className="w-full h-auto drop-shadow-lg"
//               priority
//             />
//           </div>

//           {/* 2. Main Logo */}
//           <div className="relative z-20 w-72 md:w-[700px] transition-transform hover:scale-105 duration-500">
//             <Image
//               src="/img/common/final_logo.png"
//               alt="Pictofest Logo"
//               width={600}
//               height={400}
//               className="w-full mt-2 h-auto drop-shadow-2xl"
//               priority
//             />
//           </div>

//           {/* -------------------------------------------------------
//               3. ANIMATION A: MOBILE VIEW ONLY (Centered)
//               - block md:hidden: Shows on mobile, hides on desktop
//               - New Image Path assumed: /img/home/mobile-dates-pot.png
//               - Centered: left-1/2 -translate-x-1/2
//              ------------------------------------------------------- */}
//           <motion.div
//             className="block md:hidden absolute left-[51%] -translate-x-1/2 top-[70%] -z-10 w-[60vw]"
//             initial={{ y: -100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{
//               delay: 0.8,
//               duration: 2,
//               type: "spring",
//               bounce: 0.5,
//             }}
//           >
//             <Image
//               src="/img/home/dates-and-pot-mobile.png" // <--- RENAME THIS TO YOUR NEW MOBILE IMAGE FILE
//               alt="Mobile Dates"
//               width={300}
//               height={300}
//               className="w-full h-auto drop-shadow-xl"
//             />
//           </motion.div>

//           {/* -------------------------------------------------------
//               3. ANIMATION B: DESKTOP VIEW ONLY (Right Corner)
//               - hidden md:block: Hides on mobile, shows on desktop
//               - Old Image Path: /img/home/dates-and-pot.png
//               - Right Aligned: right-0
//              ------------------------------------------------------- */}
//           <motion.div
//             className="absolute top-[53%] -right-0 left-116 -z-10"
//             initial={{ y: -300, opacity: 0 }} // Start high up (like up the thread)
//             animate={{ y: 0, opacity: 1 }} // Slide down to resting position
//             transition={{
//               delay: 0.9, // Wait for logo to settle
//               duration: 2, // Slow slide down
//               type: "spring", // Slight bounce at the end
//               bounce: 0.3,
//             }}
//           >
//             <Image
//               src="/img/home/dates-and-pot.png" // <--- YOUR ORIGINAL DESKTOP IMAGE
//               alt="Desktop Dates"
//               width={300}
//               height={200}
//               className="md:w-36 lg:w-44 h-auto drop-shadow-xl"
//             />
//           </motion.div>
//         </div>

//         {/* --- B. THE STAGE (Base + Singers) --- */}
//         <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-10 pointer-events-none">
//           <div className="relative w-full flex justify-center items-end">
//             {/* SINGERS */}
//             <div className="absolute bottom-[10%] sm:bottom-[12%] w-full flex justify-center md:justify-between items-end z-20">
//               {/* Left Singer (Centered on Mobile) */}
//               <img
//                 src="/img/home/home-left-singers.png"
//                 alt="Left Singer"
//                 className="w-[100%] md:w-[35%] h-auto object-contain items-start"
//               />

//               {/* Right Singer (Hidden on Mobile) */}
//               <img
//                 src="/img/home/home-right-singers.png"
//                 alt="Right Singer"
//                 className="hidden md:block w-[25%] md:w-[20%] h-auto object-contain drop-shadow-2xl items-end translate-y-16 -translate-x-15"
//               />
//             </div>

//             {/* BASE */}
//             <img
//               src="/img/home/home-base.png"
//               alt="Home Base"
//               className="relative z-10 w-full md:w-[100%] object-cover"
//             />

//             {/* 1. Top Left Sparkles */}
//             <div className="hidden lg:block absolute top-30 left-0 z-10 w-32 xl:w-42">
//               <Image
//                 src="/img/home/home-bg-left-sparkle-desktop.png" // <--- UPDATE PATH
//                 alt="Sparkles Left"
//                 width={200}
//                 height={200}
//                 className="w-full h-auto"
//               />
//             </div>

//             {/* 2. Top Right Music Notes */}
//             <div className="hidden lg:block absolute top-[540px] right-0 z-10 w-24 xl:w-68">
//               <Image
//                 src="/img/home/home-bg-right-musicStream-desktop.png" // <--- UPDATE PATH
//                 alt="Music Notes Right"
//                 width={200}
//                 height={200}
//                 className="w-full h-auto"
//               />
//             </div>

//             {/* 3. Middle Left Music Stream */}
//             <div className="hidden lg:block absolute top-259 -translate-y-1/2 left-0 z-10 w-28 md:w-[30%] md:h-auto">
//               <Image
//                 src="/img/home/home-bg-left-musicStream-desktop.png" // <--- UPDATE PATH
//                 alt="Music Stream Left"
//                 width={200}
//                 height={200}
//                 className="w-full h-auto"
//               />
//             </div>

//             {/* 4. Middle Right Sparkles/Confetti */}
//             <div className="hidden lg:block absolute top-[870px] right-0 z-10 w-32 xl:w-35">
//               <Image
//                 src="/img/home/home-bg-right-sparkle-desktop.png" // <--- UPDATE PATH
//                 alt="sparkle Right"
//                 width={200}
//                 height={200}
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ============================================================
//           3. REST OF CONTENT
//          ============================================================ */}
//       <div className="relative z-30">
//         <div>{/* <PrizePool /> */}</div>
//         <div className="md:px-24 lg:px-40 sm:pt-20">
//         <Events />
//         </div>
//         <div className="pt-20">
//           <About />
//           <Footer />
//         </div>
//       </div>
//     </motion.main>
//   );
// };

// export default Home;

// "use client";

// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import About from "@/app/components/About";
// import Events from "@/app/components/Events";
// import Footer from "@/app/components/Footer";
// import Landing from "@/app/components/Landing";
// import PrizePool from "./components/PrizePool";

// const Home = () => {
//   useEffect(() => {
//     const CURRENT_DB_VERSION = "2.0"; // Change this after each migration

//     const storedVersion = localStorage.getItem("dbVersion");

//     if (storedVersion !== CURRENT_DB_VERSION) {
//       localStorage.clear();
//       sessionStorage.clear();

//       localStorage.setItem("dbVersion", CURRENT_DB_VERSION);
//     }
//   }, []);

//   return (
//     <motion.main
//       className="bg-[url('/img/home/bg-repeat.svg')] bg-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="bg-[url('/img/home/background.svg')] bg-right flex flex-col justify-evenly lg:justify-start pt-12 lg:pt-24 items-center md:bg-center bg-cover">
//         <Landing />
//       </div>
//       <div>
//        <PrizePool />
//       </div>
//       <div className="md:px-24 lg:px-40 sm:pt-60">
//         <Events />
//       </div>
//       <div className="pt-20">
//         <About />
//         <Footer />
//       </div>
//     </motion.main>
//   );
// };

// export default Home;


//2026 code
// "use client";

// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import About from "@/app/components/About";
// import Events from "@/app/components/Events";
// import Footer from "@/app/components/Footer";
// import PrizePool from "./components/PrizePool";

// const Home = () => {
//   useEffect(() => {
//     const CURRENT_DB_VERSION = "2.0";
//     const storedVersion = localStorage.getItem("dbVersion");
//     if (storedVersion !== CURRENT_DB_VERSION) {
//       localStorage.clear();
//       sessionStorage.clear();
//       localStorage.setItem("dbVersion", CURRENT_DB_VERSION);
//     }
//   }, []);

//   return (
//     <motion.main
//       className="relative min-h-screen w-full"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       {/* ============================================================
//           1. BACKGROUND LAYER (Scrolls with content)
//          ============================================================ */}
//       <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044]">
//         {/* --- Mobile Background --- */}
//         <div className="block lg:hidden w-full relative">
//           <Image
//             src="/img/home/mobile-bg.png"
//             alt="Mobile Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>

//         {/* --- Desktop Background --- */}
//         <div className="hidden lg:block w-full relative">
//           <Image
//             src="/img/home/desktop-bg.png"
//             alt="Desktop Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//       </div>

//       {/* ============================================================
//           2. HERO SECTION (Presents Ribbon + Logo)
//          ============================================================ */}
//       <div className="flex flex-col justify-center items-center pt-24 lg:pt-32 min-h-[60vh] gap-4">
//         {/* --- A. PICTOREAL PRESENTS RIBBON --- */}
//         {/* Adjust width (w-64) as needed to fit your design */}
//         <div className="w-64 md:w-80 transition-transform hover:scale-105 duration-500">
//           <Image
//             src="/img/home/pictoreal-presents.png" // <--- MAKE SURE FILENAME MATCHES
//             alt="Pictoreal Presents"
//             width={400}
//             height={100}
//             className="w-full h-auto drop-shadow-lg"
//             priority
//           />
//         </div>

//         {/* --- B. MAIN LOGO --- */}
//         {/* I restored this so the ribbon has something to sit 'above' */}
//         <div className="w-72 md:w-[500px] transition-transform hover:scale-105 duration-500">
//           <Image
//             src="/img/common/final_logo.png"
//             alt="Pictofest Logo"
//             width={600}
//             height={400}
//             className="w-full mt-2 h-auto drop-shadow-2xl"
//             priority
//           />
//         </div>
//       </div>

//       {/* {/* ============================================================
//           3. REST OF CONTENT
//          ============================================================ */}
//       <div>
//         <PrizePool />
//       </div>
//       <div className="md:px-24 lg:px-40 sm:pt-60">
//         <Events />
//       </div>
//       <div className="pt-20">
//         <About />
//         <Footer />
//       </div>
//     </motion.main> 
//   );
// };

// export default Home;


// "use client";

// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import About from "@/app/components/About";
// import Events from "@/app/components/Events";
// import Footer from "@/app/components/Footer";
// import PrizePool from "./components/PrizePool";

// const Home = () => {
//   useEffect(() => {
//     const CURRENT_DB_VERSION = "2.0";
//     const storedVersion = localStorage.getItem("dbVersion");
//     if (storedVersion !== CURRENT_DB_VERSION) {
//       localStorage.clear();
//       sessionStorage.clear();
//       localStorage.setItem("dbVersion", CURRENT_DB_VERSION);
//     }
//   }, []);

//   return (
//     <motion.main
//       className="relative min-h-screen w-full overflow-x-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       {/* ============================================================
//           1. BACKGROUND LAYER (Scrolls with content)
//          ============================================================ */}
//       <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044]">
//         {/* --- Mobile Background --- */}
//         <div className="block lg:hidden w-full relative">
//           <Image
//             src="/img/home/mobile-bg.png"
//             alt="Mobile Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>

//         {/* --- Desktop Background --- */}
//         <div className="hidden lg:block w-full relative">
//           <Image
//             src="/img/home/desktop-bg.png"
//             alt="Desktop Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//       </div>

//       {/* ============================================================
//           2. HERO SECTION (Logo + Singers + Base)
//           Changed to h-screen to fit the 'Landing Page' feel
//          ============================================================ */}
//       <div className="relative h-screen flex flex-col justify-start items-center pt-24 lg:pt-32">
//         {/* --- A. LOGO & RIBBON WRAPPER ---
//             z-20 ensures this stays on top of the singers 
//         */}
//         <div className="z-20 flex flex-col items-center gap-4">
//           {/* Ribbon */}
//           <div className="w-64 md:w-80 transition-transform hover:scale-105 duration-500">
//             <Image
//               src="/img/home/pictoreal-presents.png"
//               alt="Pictoreal Presents"
//               width={400}
//               height={100}
//               className="w-full h-auto drop-shadow-lg"
//               priority
//             />
//           </div>

//           {/* Main Logo */}
//           <div className="w-200 md:w-[700px] transition-transform hover:scale-105 duration-500">
//             <Image
//               src="/img/common/final_logo.png"
//               alt="Pictofest Logo"
//               width={600}
//               height={400}
//               className="w-full mt-2 h-auto drop-shadow-2xl"
//               priority
//             />
//           </div>
//         </div>

//         {/* --- B. THE STAGE (Base + Singers) --- 
//             Added as requested. Positioned absolutely at the bottom of the Hero screen.
//         */}
//         <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-10 pointer-events-none">
//           {/* Wrapper for alignment */}
//           <div className="relative w-full flex justify-center items-end">
//             {/* SINGERS LAYER 
//                     - Positioned relative to the base (bottom-[12%]).
//                     - Equal width (35%) for both.
//                 */}
//             <div className="absolute bottom-[10%] sm:bottom-[12%] w-full flex justify-between items-end z-20">
//               {/* Left Singer */}
//               {/* Note: Ensure these paths match where you put the files */}
//               <img
//                 src="/img/home/home-left-singers.png"
//                 alt="Left Singer"
//                 className="w-[35%] md:w-[30%] h-auto object-contain drop-shadow-2xl items-start"
//               />

//               {/* Right Singer */}
//               <img
//                 src="/img/home/home-right-singers.png"
//                 alt="Right Singer"
//                 className="w-[25%] md:w-[20%] h-auto object-contain drop-shadow-2xl items-end translate-y-15 -translate-x-3"
//               />
//             </div>

//             {/* BASE LAYER */}
//             <img
//               src="/img/home/home-base.png"
//               alt="Home Base"
//               className="relative z-10 w-full md:w-[100%] object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ============================================================
//           3. REST OF CONTENT
//           Added relative z-30 to ensure it stacks correctly below the hero
//          ============================================================ */}
//       <div className="relative z-30">
//         <div>
//           <PrizePool />
//         </div>
//         <div className="md:px-24 lg:px-40 sm:pt-60">
//           <Events />
//         </div>
//         <div className="pt-20">
//           <About />
//           <Footer />
//         </div>
//       </div>
//     </motion.main>
//   );
// };

// export default Home;

//new 
// "use client";

// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import About from "@/app/components/About";
// import Events from "@/app/components/Events";
// import Footer from "@/app/components/Footer";
// import PrizePool from "./components/PrizePool";

// const Home = () => {
//   useEffect(() => {
//     const CURRENT_DB_VERSION = "2.0";
//     const storedVersion = localStorage.getItem("dbVersion");
//     if (storedVersion !== CURRENT_DB_VERSION) {
//       localStorage.clear();
//       sessionStorage.clear();
//       localStorage.setItem("dbVersion", CURRENT_DB_VERSION);
//     }
//   }, []);

//   return (
//     <motion.main
//       className="relative min-h-screen w-full overflow-x-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       {/* ============================================================
//           1. BACKGROUND LAYER
//          ============================================================ */}
//       <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044]">
//         <div className="block lg:hidden w-full relative">
//           <Image
//             src="/img/home/mobile-bg.png"
//             alt="Mobile Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//         <div className="hidden lg:block w-full relative">
//           <Image
//             src="/img/home/desktop-bg.png"
//             alt="Desktop Background"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//       </div>

//       {/* ============================================================
//           2. HERO SECTION
//          ============================================================ */}
//       <div className="relative h-screen flex flex-col justify-start items-center pt-24 lg:pt-32">
//         {/* --- A. LOGO WRAPPER ---
//             Added 'relative' so we can position the Pot relative to this central logo.
//         */}
//         <div className="relative z-20 flex flex-col items-center gap-2">
//           {/* 1. Ribbon */}
//           <div className="w-64 md:w-80 transition-transform hover:scale-105 duration-500">
//             <Image
//               src="/img/home/pictoreal-presents.png"
//               alt="Pictoreal Presents"
//               width={400}
//               height={100}
//               className="w-full h-auto drop-shadow-lg"
//               priority
//             />
//           </div>

//           {/* 2. Main Logo */}
//           <div className="w-72 md:w-[700px] transition-transform hover:scale-105 duration-500">
//             <Image
//               src="/img/common/final_logo.png"
//               alt="Pictofest Logo"
//               width={600}
//               height={400}
//               className="w-full mt-2 h-auto drop-shadow-2xl"
//               priority
//             />
//           </div>

//           {/* 3. ANIMATION: Dates & Pot
//                 - Positioned ABSOLUTE to the RIGHT of the logo.
//                 - top-[40%]: Adjusts how high/low it hangs relative to the logo.
//                 - -right-4 md:-right-36: Pushes it to the extreme right.
//             */}
//           <motion.div
//             className="absolute top-[53%] -right-0 left-118.5 -z-10"
//             initial={{ y: -300, opacity: 0 }} // Start high up (like up the thread)
//             animate={{ y: 0, opacity: 1 }} // Slide down to resting position
//             transition={{
//               delay: 0.8, // Wait for logo to settle
//               duration: 1000, // Slow slide down
//               type: "spring", // Slight bounce at the end
//               stiffness: 70,
//               damping: 12,
//             }}
//           >
//             <Image
//               src="/img/home/dates-and-pot.png"
//               alt="Dates 20-22 Feb"
//               width={300}
//               height={200}
//               // Widths: w-24 (mobile), w-40 (tablet), w-48 (desktop)
//               className="w-24 md:w-40 lg:w-48 h-auto drop-shadow-xl"
//             />
//           </motion.div>
//         </div>

//         {/* --- B. THE STAGE (Base + Singers) --- */}
//         <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-10 pointer-events-none">
//           <div className="relative w-full flex justify-center items-end">
//             {/* SINGERS */}
//             <div className="absolute bottom-[10%] sm:bottom-[12%] w-full flex justify-between items-end z-20">
//               {/* Left Singer */}
//               <img
//                 src="/img/home/home-left-singers.png"
//                 alt="Left Singer"
//                 className="w-[50%md:w-[35%] md:w-[35%] h-auto object-contain drop-shadow-2xl items-start"
//               />

//               {/* Right Singer */}
//               <img
//                 src="/img/home/home-right-singers.png"
//                 alt="Right Singer"
//                 className="hidden md:block w-[25%] md:w-[20%] h-auto object-contain drop-shadow-2xl items-end translate-y-16 -translate-x-15"
//               />
//             </div>

//             {/* BASE */}
//             <img
//               src="/img/home/home-base.png"
//               alt="Home Base"
//               className="relative z-10 w-full md:w-[100%] object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ============================================================
//           3. REST OF CONTENT
//          ============================================================ */}
//       <div className="relative z-30">
//         <div>
//           <PrizePool />
//         </div>
//         <div className="md:px-24 lg:px-40 sm:pt-60">
//           <Events />
//         </div>
//         <div className="pt-20">
//           <About />
//           <Footer />
//         </div>
//       </div>
//     </motion.main>
//   );
// };

// export default Home;

"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import About from "@/app/components/About";
import Events from "@/app/components/Events";
import Footer from "@/app/components/Footer";
import PrizePool from "./components/PrizePool";

const Home = () => {
  useEffect(() => {
    const CURRENT_DB_VERSION = "2.0";
    const storedVersion = localStorage.getItem("dbVersion");
    if (storedVersion !== CURRENT_DB_VERSION) {
      localStorage.clear();
      sessionStorage.clear();
      localStorage.setItem("dbVersion", CURRENT_DB_VERSION);
    }
  }, []);

  return (
    <motion.main
      className="relative min-h-screen w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* ============================================================
          1. BACKGROUND LAYER
         ============================================================ */}
      <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044] h-full object-cover">
        <div className="block lg:hidden w-full relative">
          <Image
            src="/img/home/mobile-bg.png"
            alt="Mobile Background"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="hidden lg:block w-full relative">
          <Image
            src="/img/home/desktop-bg.png"
            alt="Desktop Background"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* ============================================================
          2. HERO SECTION
         ============================================================ */}
      <div className="relative h-screen flex flex-col justify-start items-center pt-24 lg:pt-32">
        {/* --- A. LOGO WRAPPER --- */}
        <div className="relative z-20 flex flex-col items-center gap-2">
          {/* 1. Ribbon */}
          <div className="w-64 md:w-80 transition-transform hover:scale-105 duration-500">
            <Image
              src="/img/home/pictoreal-presents.png"
              alt="Pictoreal Presents"
              width={400}
              height={100}
              className="w-full h-auto drop-shadow-lg"
              priority
            />
          </div>

          {/* 2. Main Logo */}
          <div className="relative z-20 w-72 md:w-[700px] transition-transform hover:scale-105 duration-500">
            <Image
              src="/img/common/final_logo.png"
              alt="Pictofest Logo"
              width={600}
              height={400}
              className="w-full mt-2 h-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* -------------------------------------------------------
              3. ANIMATION A: MOBILE VIEW ONLY (Centered)
              - block md:hidden: Shows on mobile, hides on desktop
              - New Image Path assumed: /img/home/mobile-dates-pot.png
              - Centered: left-1/2 -translate-x-1/2
             ------------------------------------------------------- */}
          <motion.div
            className="block md:hidden absolute left-[51%] -translate-x-1/2 top-[70%] -z-10 w-[60vw]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 2,
              type: "spring",
              bounce:0.5,
            }}
          >
            <Image
              src="/img/home/dates-and-pot-mobile.png" // <--- RENAME THIS TO YOUR NEW MOBILE IMAGE FILE
              alt="Mobile Dates"
              width={300}
              height={300}
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>

          {/* -------------------------------------------------------
              3. ANIMATION B: DESKTOP VIEW ONLY (Right Corner)
              - hidden md:block: Hides on mobile, shows on desktop
              - Old Image Path: /img/home/dates-and-pot.png
              - Right Aligned: right-0
             ------------------------------------------------------- */}
          <motion.div
            className="absolute top-[53%] -right-0 left-116 -z-10"
                        initial={{ y: -300, opacity: 0 }} // Start high up (like up the thread)
                        animate={{ y: 0, opacity: 1 }} // Slide down to resting position
                        transition={{
                          delay: 0.9, // Wait for logo to settle
                          duration: 2, // Slow slide down
                          type: "spring", // Slight bounce at the end
                          bounce:0.3
            }}
          >
            <Image
              src="/img/home/dates-and-pot.png" // <--- YOUR ORIGINAL DESKTOP IMAGE
              alt="Desktop Dates"
              width={300}
              height={200}
              className="md:w-36 lg:w-44 h-auto drop-shadow-xl"
            />
          </motion.div>
        </div>

        {/* --- B. THE STAGE (Base + Singers) --- */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-10 pointer-events-none">
          <div className="relative w-full flex justify-center items-end">
            {/* SINGERS */}
            <div className="absolute bottom-[10%] sm:bottom-[12%] w-full flex justify-center md:justify-between items-end z-20">
              {/* Left Singer (Centered on Mobile) */}
              <img
                src="/img/home/home-left-singers.png"
                alt="Left Singer"
                className="w-[100%] md:w-[35%] h-auto object-contain drop-shadow-2xl items-start"
              />

              {/* Right Singer (Hidden on Mobile) */}
              <img
                src="/img/home/home-right-singers.png"
                alt="Right Singer"
                className="hidden md:block w-[25%] md:w-[20%] h-auto object-contain drop-shadow-2xl items-end translate-y-16 -translate-x-15"
              />
            </div>

            {/* BASE */}
            <img
              src="/img/home/home-base.png"
              alt="Home Base"
              className="relative z-10 w-full md:w-[100%] object-cover"
            />

<div className="hidden lg:block absolute top-30 left-0 z-10 w-32 xl:w-42">
              <Image
                src="/img/home/home-bg-left-sparkle-desktop.png" // <--- UPDATE PATH
                alt="Sparkles Left"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>

            {/* 2. Top Right Music Notes */}
            <div className="hidden lg:block absolute top-[540px] right-0 z-10 w-24 xl:w-68">
              <Image
                src="/img/home/home-bg-right-musicStream-desktop.png" // <--- UPDATE PATH
                alt="Music Notes Right"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>

            {/* 3. Middle Left Music Stream */}
            <div className="hidden lg:block absolute top-259 -translate-y-1/2 left-0 z-10 w-28 md:w-[30%] md:h-auto">
              <Image
                src="/img/home/home-bg-left-musicStream-desktop.png" // <--- UPDATE PATH
                alt="Music Stream Left"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>

            {/* 4. Middle Right Sparkles/Confetti */}
            <div className="hidden lg:block absolute top-[870px] right-0 z-10 w-32 xl:w-35">
              <Image
                src="/img/home/home-bg-right-sparkle-desktop.png" // <--- UPDATE PATH
                alt="sparkle Right"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ============================================================
          3. REST OF CONTENT
         ============================================================ */}
      <div className="relative z-30">
        <div>
          {/* <PrizePool /> */}
        </div>
        <div className="md:px-24 lg:px-40 sm:pt-20">
          <Events />
        </div>
        <div className="w-full h-auto bg-[url('/img/home/Aboutbg.svg')] bg-cover">
          <About />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </motion.main>
  );
};

export default Home;