// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import { useAuth } from "@/app/context/Auth";
// // import Image from "next/image";
// // import { usePathname } from "next/navigation";
// // import api from "@/app/api";
// // import { toast } from "sonner";

// // // Common NavLink component
// // const NavLink = ({ href, text, size, onClick }) => {
// //   return (
// //     <Link href={href}>
// //       <p
// //         className={`body-font font-bold text-xl text-[#4E3506] px-1 ${size}`}
// //         onClick={onClick}
// //       >
// //         {text}
// //       </p>
// //     </Link>
// //   );
// // };

// // // Common Modal component
// // const CommonModal = ({ children, isOpen }) => (
// //   <div
// //     className={`text-sm absolute body-font bg-[#FFE7B9] w-3/5 md:2/5 lg:w-1/5 rounded-lg p-3 mr-8 right-0 items-center text-center transition-opacity transform ${
// //       isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"
// //     }`}
// //   >
// //     <div className="bg-[#FFE7B9] rounded-lg p-2 border-[3px] h-full border-dashed border-spacing-1 border-neutral-800">
// //       <div className="body-font">{children}</div>
// //     </div>
// //   </div>
// // );

// // const Navbar = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [activeNavLink, setActiveNavLink] = useState(null);
// //   const { authState, isUserAuthenticated, setUserAuthInfo } = useAuth();
// //   const pathname = usePathname();

// //   const toggleModal = () => {
// //     setIsModalOpen(!isModalOpen);
// //   };

// //   const handleNavLinkClick = (path) => {
// //     setActiveNavLink(path);
// //     setIsModalOpen(false);
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       const response = await api.post("/user/logout");
// //       localStorage.removeItem("token");
// //       localStorage.removeItem("user");
// //       setUserAuthInfo({ token: "", user: {} });
// //       toast.success(response.data.message);
// //     } catch (err) {
// //       console.log(err);
// //       toast.error(err.response.data.message);
// //     }
// //   };

// //   const renderHamburgerIcon = () => (isModalOpen ? "✕" : "☰");

// //   const renderAuthButton = () => {
// //     const { authState, isUserAuthenticated } = useAuth();

// //     return isUserAuthenticated() ? (
// //       <Link href="/">
// //         <button className="text-white bg-[#FFEDD5] font-bold py-2 px-4 rounded-full mr-4">
// //           <p className="text-[#4E3506] font-bold uppercase text-lg lg:text-xl tracking-widest body-font">
// //             {authState?.user?.first_name}
// //           </p>
// //         </button>
// //       </Link>
// //     ) : (
// //       <div className="bg-[#FFE7B9] rounded-full p-1 mr-1">
// //         <Link href="/login">
// //           <button className="bg-[#fbe6be]  py-1 px-4  border-neutral-500 rounded-full body-font">
// //             <p className=" links-font text-xl text-[#4E3506]">Login</p>
// //           </button>
// //         </Link>
// //       </div>
// //     );
// //   };

// //   const desktopHamburgerLinks = (
// //     <div className="flex flex-col body-font uppercase text-neutral-700 justify-center items-center gap-3">
// //       <NavLink
// //         href="/profile"
// //         text="My Profile"
// //         size="text-lg"
// //         onClick={() => handleNavLinkClick("/profile")}
// //       />
// //       <NavLink
// //         href="/"
// //         text="Logout"
// //         size="text-lg"
// //         onClick={() => {
// //           handleLogout();
// //           handleNavLinkClick("/");
// //         }}
// //       />
// //     </div>
// //   );

// //   const mobileNavLinks = (
// //     <div className="flex flex-col bazar lg:hidden justify-center items-center gap-3">
// //       <NavLink href="/" text="Home" onClick={() => handleNavLinkClick("/")} />
// //       <NavLink
// //         href="/picsoreel"
// //         text="Pics-o-Reel"
// //         onClick={() => handleNavLinkClick("/picsoreel")}
// //       />
// //       <NavLink
// //         href="/manthan"
// //         text="Manthan"
// //         onClick={() => handleNavLinkClick("/developers")}
// //       />
// //       <NavLink
// //         href="/workshops"
// //         text="Workshops"
// //         onClick={() => handleNavLinkClick("/workshops")}
// //       />
// //       <NavLink
// //         href="/events"
// //         text="Events"
// //         onClick={() => handleNavLinkClick("/events")}
// //       />
// //       {/* <NavLink
// //         href="/voting"
// //         text="Voting"
// //         onClick={() => handleNavLinkClick("/voting")}
// //       /> */}
// //             <NavLink
// //         href="/sponsors"
// //         text="Sponsors"
// //         onClick={() => handleNavLinkClick("/sponsors")}
// //       />
// //       <NavLink
// //         href="/developers"
// //         text="Our Team"
// //         onClick={() => handleNavLinkClick("/developers")}
// //       />
// //       <NavLink
// //         href="/cart"
// //         text="Cart"
// //         onClick={() => handleNavLinkClick("/cart")}
// //       />
// //       <NavLink
// //         href="/wishlist"
// //         text="My Wishlist"
// //         onClick={() => handleNavLinkClick("/wishlist")}
// //       />

// //       {isUserAuthenticated() && (
// //         <>
// //           <NavLink
// //             href="/profile"
// //             text="My Profile"
// //             onClick={() => handleNavLinkClick("/profile")}
// //           />
// //           <NavLink
// //             href="/"
// //             text="Logout"
// //             onClick={() => {
// //               handleLogout();
// //               handleNavLinkClick("/");
// //             }}
// //           />
// //         </>
// //       )}
// //     </div>
// //   );

// //   const revealAnimation = `
// //   @keyframes reveal {
// //             from {
// //               transform: translateY(-100%);
// //             }
// //             to {
// //               transform: translateY(0);
// //             }
// //           }
// //           .animate-reveal {

// //             animation: reveal .6s ease-in-out;
// //           }
// //   `;

// //   return (
// //     <>
// //       <style>{revealAnimation}</style>
// //       <div className="fixed w-full z-10 animate-reveal ">
// //         <div className="hidden lg:flex justify-center items-center p-2">
// //           {/* <img src="/img/home/navbar/nav_bg.svg" className="w-full" alt="" /> */}
// //           <div className="links  m-auto flex  lg:w-3/4 px-16 justify-around items-center p-5  bg-[url('/img/home/navbar/nav_bg.svg')] bg-center bg-no-repeat bg-cover">
// //             <NavLink
// //               href="/"
// //               text="HOME"
// //               size="text-2xl"
// //               onClick={() => handleNavLinkClick("/")}
// //             />
// //             <NavLink
// //               href="/picsoreel"
// //               text="PICS-O-REEL"
// //               size="text-2xl"
// //               onClick={() => handleNavLinkClick("/picsoreel")}
// //             />
// //             <NavLink
// //               href="/workshops"
// //               text="WORKSHOPS"
// //               size="text-2xl"
// //               onClick={() => handleNavLinkClick("/workshops")}
// //             />
// //             <NavLink
// //               href="/events"
// //               text="EVENTS"
// //               size="text-2xl"
// //               onClick={() => handleNavLinkClick("/events")}
// //             />
// //             {/* <NavLink
// //               href="/voting"
// //               text="VOTING"
// //               size="text-2xl"
// //               onClick={() => handleNavLinkClick("/voting")}
// //             /> */}
// //                         <NavLink
// //               href="/sponsors"
// //               text="SPONSORS"
// //               size="text-2xl"
// //               onClick={() => handleNavLinkClick("/sponsors")}
// //             />
// //             {/* <NavLink
// //               href="/developers"
// //               text="DEVELOPERS"
// //               size="text-2xl"
// //               onClick={() => handleNavLinkClick("/developers")}
// //             /> */}
// //             <NavLink
// //               href="/cart"
// //               text="CART"
// //               onClick={() => handleNavLinkClick("/cart")}
// //             />
// //             <NavLink
// //               href="/wishlist"
// //               text="WISHLIST"
// //               onClick={() => handleNavLinkClick("/wishlist")}
// //             />

// //             <div className="flex items-center">
// //               {renderAuthButton()}
// //               {isUserAuthenticated() && (
// //                 <div className="bg-orange-100 hover:scale-105 transition-all rounded-full p-2">
// //                   <button
// //                     className="text-2xl text-[#4E3506] font-bold py-1 px-2 rounded-md block transition-transform transform ease-in-out duration-300"
// //                     onClick={toggleModal}
// //                   >
// //                     {renderHamburgerIcon()}
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         <div>
// //           <div className="flex lg:hidden justify-between items-center p-2">
// //             {/* Logo aligned to the left */}
// //             <Link href="/">
// //               <img
// //                 src="/img/home/pictofest_logo.png"
// //                 alt="Logo"
// //                 className="w-28 cursor-pointer"
// //               />
// //             </Link>

// //             {/* Wrapper div for elements aligned to the right */}
// //             <div className="flex items-center gap-3">
// //               {renderAuthButton()}
// //               <div className="bg-orange-100 hover:scale-105 transition-all rounded-full p-2">
// //                 <button
// //                   className="text-2xl text-[#4E3506] font-bold py-1 px-2 rounded-md block transition-transform transform ease-in-out duration-300"
// //                   onClick={toggleModal}
// //                 >
// //                   {renderHamburgerIcon()}
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         {isModalOpen && (
// //           <CommonModal isOpen={isModalOpen}>
// //             <div className="hidden lg:block">
// //               {isUserAuthenticated() ? desktopHamburgerLinks : <div></div>}
// //             </div>
// //             <div className="lg:hidden"> {mobileNavLinks} </div>
// //           </CommonModal>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;


// //2026 Code

// // "use client";
// // import React, { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { useAuth } from "../context/Auth";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { toast } from "sonner";
// // import localFont from "next/font/local";

// // // --- Font Configuration ---
// // const rye = localFont({ src: "../../public/fonts/Rye-Regular.ttf" });
// // const ambystoma = localFont({
// //   src: "../../public/fonts/Ambystoma_Mexicanum.otf",
// // });
// // const anaheim = localFont({
// //   src: "../../public/fonts/Anaheim-VariableFont_wght.ttf",
// // });

// // // ==========================================
// // // 1. Common NavLink Component
// // // ==========================================
// // const NavLink = ({ href, text, onClick, className = "" }) => {
// //   const pathname = usePathname();
// //   const isActive = pathname === href;

// //   return (
// //     <Link href={href} onClick={onClick} className="relative group w-auto">
// //       <div
// //         className={`
// //           ${rye.className}
// //           relative px-6 py-2 lg:h-[38px] rounded-full border-[2px] transition-all duration-300 ease-in-out
// //           flex items-center justify-center cursor-pointer whitespace-nowrap
// //           text-lg tracking-widest uppercase
// //           ${
// //             isActive
// //               ? "bg-[#FFA53A] border-[#FFA53A] text-[#070044]"
// //               : "bg-transparent border-[#FFA53A] text-[#FFA53A] hover:bg-[#FFA53A] hover:bg-opacity-20 hover:text-[#070044]"
// //           }
// //           ${className}
// //         `}
// //       >
// //         {text}
// //       </div>
// //     </Link>
// //   );
// // };

// // // ==========================================
// // // 2. Common Modal Component
// // // ==========================================
// // const CommonModal = ({ isOpen, children }) => {
// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <motion.div
// //           initial={{ opacity: 0 }} // Changed animation to simple fade for full screen
// //           animate={{ opacity: 1 }}
// //           exit={{ opacity: 0 }}
// //           transition={{ duration: 0.3 }}
// //           // UPDATED CLASSES:
// //           // 1. Changed top-[100%] to top-0 (Covers whole screen)
// //           // 2. Changed position to 'fixed' to prevent scrolling issues
// //           // 3. Keep z-40 so it sits BEHIND the Navbar elements (which are z-50)
// //           className="fixed top-0 left-0 w-full h-screen z-40 overflow-hidden 
// //                      bg-black/40 backdrop-blur-sm 
// //                      lg:static lg:h-auto lg:bg-transparent lg:backdrop-blur-none lg:overflow-visible"
// //         >
// //           {/* Added pt-28 to push links down below the header area */}
// //           <div className="p-6 flex flex-col items-center justify-start pt-28 min-h-full lg:min-h-0 lg:justify-center lg:pt-0">
// //             {children}
// //           </div>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   );
// // };

// // // ==========================================
// // // 3. Main Navbar Component
// // // ==========================================
// // const Navbar = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const { authState, isUserAuthenticated, setUserAuthInfo } = useAuth();
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 50) {
// //         setIsScrolled(true);
// //       } else {
// //         setIsScrolled(false);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     setIsModalOpen(false);
// //   }, [pathname]);

// //   const toggleModal = () => {
// //     setIsModalOpen(!isModalOpen);
// //   };

// //   const handleNavLinkClick = (path) => {
// //     setIsModalOpen(false);
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       localStorage.removeItem("token");
// //       localStorage.removeItem("user");
// //       setUserAuthInfo({ token: "", user: {} });
// //       toast.success("Logged out successfully");
// //       setIsModalOpen(false);
// //     } catch (err) {
// //       console.log(err);
// //       toast.error("Logout failed");
// //     }
// //   };

// //   const renderHamburgerIcon = () => (isModalOpen ? "✕" : "☰");

// //   // --- Auth Button Logic ---
// //   const renderAuthButton = () => {
// //     return isUserAuthenticated() ? (
// //       <Link href="/profile">
// //         <div className="relative px-6 py-2 lg:py-0 lg:h-[38px] rounded-full border-[2px] border-[#FFA53A] bg-[#FFA53A] text-[#070044] flex items-center justify-center cursor-pointer transition-all hover:bg-white hover:border-white">
// //           <span
// //             className={`${anaheim.className} font-bold text-lg tracking-widest uppercase truncate max-w-[150px]`}
// //           >
// //             {authState?.user?.first_name || "Profile"}
// //           </span>
// //         </div>
// //       </Link>
// //     ) : (
// //       <NavLink href="/login" text="Login" />
// //     );
// //   };

// //   // --- Desktop Dropdown Links ---
// //   const desktopHamburgerLinks = (
// //     <div className="flex flex-col justify-center items-center gap-4">
// //       <NavLink
// //         href="/profile"
// //         text="My Profile"
// //         onClick={() => handleNavLinkClick("/profile")}
// //       />
// //       <div className="w-full h-[1px] bg-[#FFA53A] opacity-30"></div>
// //       <NavLink
// //         href="/"
// //         text="Logout"
// //         onClick={() => {
// //           handleLogout();
// //           handleNavLinkClick("/");
// //         }}
// //       />
// //     </div>
// //   );

// //   // --- Mobile Menu Links ---
// //   const mobileNavLinks = (
// //     <div className="flex flex-col w-full justify-center items-end pr-0.3 gap-4">
// //       <NavLink
// //         href="/"
// //         text="Home"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/")}
// //       />
// //       <NavLink
// //         href="/picsoreel"
// //         text="Pics-o-Reel"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/picsoreel")}
// //       />
// //       <NavLink
// //         href="/workshops"
// //         text="Workshops"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/workshops")}
// //       />
// //       <NavLink
// //         href="/events"
// //         text="Events"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/events")}
// //       />
// //       <NavLink
// //         href="/sponsors"
// //         text="Sponsors"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/sponsors")}
// //       />
// //       <NavLink
// //         href="/cart"
// //         text="Cart"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/cart")}
// //       />
// //       {/* <NavLink
// //         href="/voting"
// //         text="Vote"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/cart")}
// //       /> */}

// //       {isUserAuthenticated() ? (
// //         <>
// //           <div className="w-1/2 h-[1px] bg-[#FFA53A] opacity-30 my-2"></div>
// //           <NavLink
// //             href="/profile"
// //             text="Profile"
// //             className="w-40"
// //             onClick={() => handleNavLinkClick("/profile")}
// //           />
// //           <NavLink
// //             href="/"
// //             text="Logout"
// //             onClick={() => {
// //               handleLogout();
// //               handleNavLinkClick("/");
// //             }}
// //           />
// //         </>
// //       ) : (
// //         <NavLink
// //           href="/login"
// //           text="Login"
// //           className="w-40"
// //           onClick={() => handleNavLinkClick("/login")}
// //         />
// //       )}
// //     </div>
// //   );

// //   return (
// //     <div
// //       className={`fixed w-full top-0 z-50 transition-colors duration-300 
// //         ${
// //           isModalOpen
// //             ? "bg-transparent" // CHANGED: Header is transparent because Modal behind it provides the blur
// //             : isScrolled
// //             ? "bg-black/5 backdrop-blur-sm shadow-lg shadow-[#FFA53A]/10"
// //             : "bg-transparent"
// //         }
// //       `}
// //     >
// //       {/* --- Desktop View --- */}
// //       <div className="hidden lg:flex max-w-[1400px] mx-auto py-6 px-4 justify-center items-center gap-3 relative">
// //         <div className="flex flex-wrap justify-center items-center gap-3">
// //           <NavLink href="/" text="Home" />
// //           <NavLink href="/picsoreel" text="Pics-o-Reel" />
// //           <NavLink href="/workshops" text="Workshops" />
// //           <NavLink href="/events" text="Events" />
// //           <NavLink href="/sponsors" text="Sponsors" />
// //           <NavLink href="/cart" text="Cart" />
// //           {renderAuthButton()}
// //         </div>

// //         {isUserAuthenticated() && (
// //           <button
// //             onClick={toggleModal}
// //             className="absolute right-4 text-[#FFA53A] text-2xl focus:outline-none hover:scale-110 transition-transform"
// //           >
// //             {renderHamburgerIcon()}
// //           </button>
// //         )}
// //       </div>

// //       {/* --- Mobile View --- */}
// //       <div className="relative z-50 lg:hidden flex justify-between items-center py-4 px-6 bg-transparent">
// //         <Link href="/">
// //           {/* Logo - z-50 is inherited from parent div, so it sits on top of the blurred modal */}
// //           <span
// //             className={`${ambystoma.className} text-[#FFA53A] text-xl font-bold tracking-widest p-2`}
// //           >
// //             PICTOFEST
// //           </span>
// //         </Link>

// //         <div className="flex items-center gap-4">
// //           <button
// //             onClick={toggleModal}
// //             className="text-[#FFA53A] text-2xl focus:outline-none w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#FFA53A] bg-transparent"
// //           >
// //             {renderHamburgerIcon()}
// //           </button>
// //         </div>
// //       </div>

// //       {/* --- Common Modal --- */}
// //       <CommonModal isOpen={isModalOpen}>
// //         <div className="hidden lg:block">
// //           {isUserAuthenticated() ? desktopHamburgerLinks : null}
// //         </div>
// //         <div className="lg:hidden w-full">{mobileNavLinks}</div>
// //       </CommonModal>
// //     </div>
// //   );
// // };

// // export default Navbar;

// // "use client";
// // import React, { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { useAuth } from "../context/Auth";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { toast } from "sonner";
// // import localFont from "next/font/local";

// // // --- Font Configuration ---
// // const rye = localFont({ src: "../../public/fonts/Rye-Regular.ttf" });
// // const ambystoma = localFont({
// //   src: "../../public/fonts/Ambystoma_Mexicanum.otf",
// // });
// // const anaheim = localFont({
// //   src: "../../public/fonts/Anaheim-VariableFont_wght.ttf",
// // });

// // // ==========================================
// // // 1. Common NavLink Component
// // // ==========================================
// // const NavLink = ({ href, text, onClick, className = "" }) => {
// //   const pathname = usePathname();
// //   const isActive = pathname === href;

// //   return (
// //     <Link href={href} onClick={onClick} className="relative group w-auto">
// //       <div
// //         className={`
// //           ${rye.className}
// //           relative px-8 py-2 lg:h-[36px] rounded-full border-[2px] transition-all duration-300 ease-in-out
// //           flex items-center justify-center cursor-pointer whitespace-nowrap
// //           text-lg tracking-widest uppercase
// //           ${
// //             isActive
// //               ? "bg-[#FFA53A] border-[#FFA53A] text-[#070044]"
// //               : "bg-transparent border-[#FFA53A] text-[#FFA53A] hover:bg-[#FFA53A] hover:bg-opacity-20 hover:text-[#070044]"
// //           }
// //           ${className}
// //         `}
// //       >
// //         {text}
// //       </div>
// //     </Link>
// //   );
// // };

// // // ==========================================
// // // 2. Common Modal Component
// // // ==========================================
// // const CommonModal = ({ isOpen, children }) => {
// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           exit={{ opacity: 0 }}
// //           transition={{ duration: 0.3 }}
// //           className="fixed top-0 left-0 w-full h-screen z-40 overflow-hidden 
// //                      bg-black/40 backdrop-blur-sm 
// //                      lg:static lg:h-auto lg:bg-transparent lg:backdrop-blur-none lg:overflow-visible"
// //         >
// //           <div className="p-6 flex flex-col items-center justify-start pt-28 min-h-full lg:min-h-0 lg:justify-center lg:pt-0">
// //             {children}
// //           </div>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   );
// // };

// // // ==========================================
// // // 3. Main Navbar Component
// // // ==========================================
// // const Navbar = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const { authState, isUserAuthenticated, setUserAuthInfo } = useAuth();
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 50) {
// //         setIsScrolled(true);
// //       } else {
// //         setIsScrolled(false);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     setIsModalOpen(false);
// //   }, [pathname]);

// //   const toggleModal = () => {
// //     setIsModalOpen(!isModalOpen);
// //   };

// //   const handleNavLinkClick = (path) => {
// //     setIsModalOpen(false);
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       localStorage.removeItem("token");
// //       localStorage.removeItem("user");
// //       setUserAuthInfo({ token: "", user: {} });
// //       toast.success("Logged out successfully");
// //       setIsModalOpen(false);
// //     } catch (err) {
// //       console.log(err);
// //       toast.error("Logout failed");
// //     }
// //   };

// //   const renderHamburgerIcon = () => (isModalOpen ? "✕" : "☰");

// //   // --- Auth Button Logic ---
// //   const renderAuthButton = () => {
// //     return isUserAuthenticated() ? (
// //       <Link href="/profile">
// //         {/* Updated height to 36px to match siblings */}
// //         <div className="relative px-8 py-2 lg:py-0 lg:h-[36px] rounded-full border-[2px] border-[#FFA53A] bg-[#FFA53A] text-[#070044] flex items-center justify-center cursor-pointer transition-all hover:bg-white hover:border-white">
// //           <span
// //             className={`${anaheim.className} font-bold text-lg tracking-widest uppercase truncate max-w-[150px]`}
// //           >
// //             {authState?.user?.first_name || "Profile"}
// //           </span>
// //         </div>
// //       </Link>
// //     ) : (
// //       <NavLink href="/login" text="Login" />
// //     );
// //   };

// //   // --- Desktop Dropdown Links ---
// //   const desktopHamburgerLinks = (
// //     <div className="flex flex-col justify-center items-center gap-4">
// //       <NavLink
// //         href="/profile"
// //         text="My Profile"
// //         onClick={() => handleNavLinkClick("/profile")}
// //       />
// //       <div className="w-full h-[1px] bg-[#FFA53A] opacity-30"></div>
// //       <NavLink
// //         href="/"
// //         text="Logout"
// //         onClick={() => {
// //           handleLogout();
// //           handleNavLinkClick("/");
// //         }}
// //       />
// //     </div>
// //   );

// //   // --- Mobile Menu Links ---
// //   const mobileNavLinks = (
// //     <div className="flex flex-col w-full justify-center items-end pr-0.3 gap-4">
// //       <NavLink
// //         href="/"
// //         text="Home"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/")}
// //       />
// //       <NavLink
// //         href="/picsoreel"
// //         text="Pics-o-Reel"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/picsoreel")}
// //       />
// //       <NavLink
// //         href="/workshops"
// //         text="Workshops"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/workshops")}
// //       />
// //       <NavLink
// //         href="/events"
// //         text="Events"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/events")}
// //       />
// //       <NavLink
// //         href="/sponsors"
// //         text="Sponsors"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/sponsors")}
// //       />
// //       <NavLink
// //         href="/cart"
// //         text="Cart"
// //         className="w-40"
// //         onClick={() => handleNavLinkClick("/cart")}
// //       />

// //       {isUserAuthenticated() ? (
// //         <>
// //           <div className="w-1/2 h-[1px] bg-[#FFA53A] opacity-30 my-2"></div>
// //           <NavLink
// //             href="/profile"
// //             text="Profile"
// //             className="w-40"
// //             onClick={() => handleNavLinkClick("/profile")}
// //           />
// //           <NavLink
// //             href="/"
// //             text="Logout"
// //             onClick={() => {
// //               handleLogout();
// //               handleNavLinkClick("/");
// //             }}
// //           />
// //         </>
// //       ) : (
// //         <NavLink
// //           href="/login"
// //           text="Login"
// //           className="w-40"
// //           onClick={() => handleNavLinkClick("/login")}
// //         />
// //       )}
// //     </div>
// //   );

// //   return (
// //     <div
// //       className={`fixed w-full top-0 z-50 transition-all duration-300 
// //         ${
// //           isModalOpen
// //             ? "bg-transparent"
// //             : isScrolled
// //             ? "bg-black/30 backdrop-blur-md shadow-lg shadow-[#FFA53A]/10"
// //             : "bg-transparent"
// //         }
// //       `}
// //     >
// //       {/* --- Desktop View --- */}
// //       {/* Updated max-w to 1150px and gap to 18px to match SVG dimensions */}
// //       <div className="hidden lg:flex max-w-[100%] mx-auto py-6 min-px-4 justify-center items-center gap-[18px] relative">
// //         <div className="flex justify-center items-center gap-[18px]">
// //           <NavLink href="/" text="Home" />
// //           <NavLink href="/picsoreel" text="Pics-o-Reel" />
// //           <NavLink href="/workshops" text="Workshops" />
// //           <NavLink href="/events" text="Events" />
// //           <NavLink href="/sponsors" text="Sponsors" />
// //           <NavLink href="/cart" text="Cart" />
// //           {renderAuthButton()}
// //         </div>

// //         {isUserAuthenticated() && (
// //           <button
// //             onClick={toggleModal}
// //             className="absolute right-4 text-[#FFA53A] text-2xl focus:outline-none hover:scale-110 transition-transform"
// //           >
// //             {renderHamburgerIcon()}
// //           </button>
// //         )}
// //       </div>

// //       {/* --- Mobile View --- */}
// //       <div className="relative z-50 lg:hidden flex justify-between items-center py-4 px-6 bg-transparent">
// //         <Link href="/">
// //           <span
// //             className={`${ambystoma.className} text-[#FFA53A] text-xl font-bold tracking-widest p-2`}
// //           >
// //             PICTOFEST
// //           </span>
// //         </Link>

// //         <div className="flex items-center gap-4">
// //           <button
// //             onClick={toggleModal}
// //             className="text-[#FFA53A] text-2xl focus:outline-none w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#FFA53A] bg-transparent"
// //           >
// //             {renderHamburgerIcon()}
// //           </button>
// //         </div>
// //       </div>

// //       {/* --- Common Modal --- */}
// //       <CommonModal isOpen={isModalOpen}>
// //         <div className="hidden lg:block">
// //           {isUserAuthenticated() ? desktopHamburgerLinks : null}
// //         </div>
// //         <div className="lg:hidden w-full">{mobileNavLinks}</div>
// //       </CommonModal>
// //     </div>
// //   );
// // };

// // export default Navbar;

// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useAuth } from "../context/Auth";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "sonner";
// import localFont from "next/font/local";

// // --- Font Configuration ---
// const rye = localFont({ src: "../../public/fonts/Rye-Regular.ttf" });
// const ambystoma = localFont({
//   src: "../../public/fonts/Ambystoma_Mexicanum.otf",
// });
// const anaheim = localFont({
//   src: "../../public/fonts/Anaheim-VariableFont_wght.ttf",
// });

// // ==========================================
// // 1. Common NavLink Component
// // ==========================================
// const NavLink = ({ href, text, onClick, className = "" }) => {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link href={href} onClick={onClick} className="relative group w-auto">
//       <div
//         className={`
//           ${rye.className}
//           relative 
//           lg:h-[36px] rounded-full border-[2px] transition-all duration-300 ease-in-out
//           flex items-center justify-center cursor-pointer whitespace-nowrap
//           uppercase tracking-widest
          
//           /* --- RESPONSIVE FIXES --- */
//           lg:px-4 lg:text-sm      /* Smaller for 1024px screens */
//           xl:px-8 xl:text-lg      /* Original size for larger screens */
//           /* ------------------------ */

//           ${isActive
//             ? "bg-[#FFA53A] border-[#FFA53A] text-[#070044]"
//             : "bg-transparent border-[#FFA53A] text-[#FFA53A] hover:bg-[#FFA53A] hover:bg-opacity-20 hover:text-[#070044]"
//           }
//           ${className}
//         `}
//       >
//         {text}
//       </div>
//     </Link>
//   );
// };

// // ==========================================
// // 2. Common Modal Component
// // ==========================================
// const CommonModal = ({ isOpen, children }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="fixed top-0 left-0 w-full h-screen z-40 overflow-hidden 
//                      bg-black/40 backdrop-blur-sm 
//                      lg:static lg:h-auto lg:bg-transparent lg:backdrop-blur-none lg:overflow-visible"
//         >
//           <div className="p-6 flex flex-col justify-start pt-28 min-h-full lg:min-h-0 lg:pt-0">
//             {children}
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };


// // ==========================================
// // 3. Main Navbar Component
// // ==========================================
// const Navbar = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { authState, isUserAuthenticated, setUserAuthInfo } = useAuth();
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsModalOpen(false);
//   }, [pathname]);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleNavLinkClick = (path) => {
//     setIsModalOpen(false);
//   };

//   const handleLogout = async () => {
//     try {
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       setUserAuthInfo({ token: "", user: {} });
//       toast.success("Logged out successfully");
//       setIsModalOpen(false);
//     } catch (err) {
//       console.log(err);
//       toast.error("Logout failed");
//     }
//   };

//   const renderHamburgerIcon = () => (isModalOpen ? "✕" : "☰");

//   // --- Auth Button Logic ---
//   const renderAuthButton = () => {
//     return isUserAuthenticated() ? (
//       <Link href="/profile">
//         {/* Updated responsive sizing to match NavLink */}
//         <div
//           className="relative lg:py-0 lg:h-[36px] rounded-full border-[2px] border-[#FFA53A] bg-[#FFA53A] text-[#070044] flex items-center justify-center cursor-pointer transition-all hover:bg-white hover:border-white 
//           lg:px-4 xl:px-8 py-2"
//         >
//           <span
//             className={`${anaheim.className} font-bold tracking-widest uppercase truncate max-w-[150px]
//               lg:text-sm xl:text-lg`}
//           >
//             {authState?.user?.first_name || "Profile"}
//           </span>
//         </div>
//       </Link>
//     ) : (
//       <NavLink href="/login" text="Login" />
//     );
//   };

//   // --- Desktop Dropdown Links ---
//   const desktopHamburgerLinks = (
//     <div className="flex flex-col justify-center items-center gap-4">
//       <NavLink
//         href="/profile"
//         text="My Profile"
//         onClick={() => handleNavLinkClick("/profile")}
//       />
//       <div className="w-full h-[1px] bg-[#FFA53A] opacity-30"></div>
//       <NavLink
//         href="/"
//         text="Logout"
//         onClick={() => {
//           handleLogout();
//           handleNavLinkClick("/");
//         }}
//       />
//     </div>
//   );

//   // --- Mobile Menu Links ---
//   const mobileNavLinks = (
//     <div className="flex flex-col w-full justify-center items-end pr-0.3 gap-4">
//       <NavLink
//         href="/"
//         text="Home"
//         className="w-40"
//         onClick={() => handleNavLinkClick("/")}
//       />
//       <NavLink
//         href="/picsoreel"
//         text="Pics-o-Reel"
//         className="w-40"
//         onClick={() => handleNavLinkClick("/picsoreel")}
//       />
//       <NavLink
//         href="/workshops"
//         text="Workshops"
//         className="w-40"
//         onClick={() => handleNavLinkClick("/workshops")}
//       />
//       <NavLink
//         href="/events"
//         text="Events"
//         className="w-40"
//         onClick={() => handleNavLinkClick("/events")}
//       />
//       <NavLink
//         href="/sponsors"
//         text="Sponsors"
//         className="w-40"
//         onClick={() => handleNavLinkClick("/sponsors")}
//       />
//       <NavLink
//         href="/cart"
//         text="Cart"
//         className="w-40"
//         onClick={() => handleNavLinkClick("/cart")}
//       />

//       {isUserAuthenticated() ? (
//         <>
//           <div className="w-1/2 h-[1px] bg-[#FFA53A] opacity-30 my-2"></div>
//           <NavLink
//             href="/profile"
//             text="Profile"
//             className="w-40"
//             onClick={() => handleNavLinkClick("/profile")}
//           />
//           <NavLink
//             href="/"
//             text="Logout"
//             className="w-40"
//             onClick={() => {
//               handleLogout();
//               handleNavLinkClick("/");
//             }}
//           />
//         </>
//       ) : (
//         <NavLink
//           href="/login"
//           text="Login"
//           className="w-40"
//           onClick={() => handleNavLinkClick("/login")}
//         />
//       )}
//     </div>
//   );

//   return (
//     <div
//       className={`fixed w-full top-0 z-50 transition-all duration-300 
//         ${isModalOpen
//           ? "bg-transparent"
//           : isScrolled
//             ? "bg-black/30 backdrop-blur-md shadow-lg shadow-[#FFA53A]/10"
//             : "bg-transparent"
//         }
//       `}
//     >
//       {/* --- Desktop View --- */}
//       {/* CHANGES MADE HERE:
//           1. lg:gap-2 -> Tight gap for 1024px screens
//           2. xl:gap-[18px] -> Restores original gap for larger screens
//       */}
//     {/* --- Desktop View --- */}
// <div className="hidden lg:flex w-full px-6 py-6 items-center relative">
//   {/* Left spacer – keeps center truly centered */}
//   <div className="flex-1" />

//   {/* Centered nav group */}
//   <div className="flex justify-center items-center lg:gap-2 xl:gap-[18px]">
//     <NavLink href="/" text="Home" />
//     <NavLink href="/picsoreel" text="Pics-o-Reel" />
//     <NavLink href="/workshops" text="Workshops" />
//     <NavLink href="/events" text="Events" />
//     <NavLink href="/sponsors" text="Sponsors" />
//     <NavLink href="/cart" text="Cart" />
//     {renderAuthButton()}
//   </div>

//   {/* Right area (hamburger) */}
//   <div className="flex-1 flex justify-end">
//     {isUserAuthenticated() && (
//       <button
//         onClick={toggleModal}
//         className="text-[#FFA53A] text-2xl focus:outline-none hover:scale-110 transition-transform"
//       >
//         {renderHamburgerIcon()}
//       </button>
//     )}
//   </div>
// </div>


//       {/* --- Mobile View --- */}
//       <div className="relative z-50 lg:hidden flex justify-between items-center py-4 px-6 bg-transparent">
//         <Link href="/">
//           <span
//             className={`${ambystoma.className} text-[#FFA53A] text-xl font-bold tracking-widest p-2`}
//           >
//             PICTOFEST
//           </span>
//         </Link>

//         <div className="flex items-center gap-4">
//           <button
//             onClick={toggleModal}
//             className="text-[#FFA53A] text-2xl focus:outline-none w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#FFA53A] bg-transparent"
//           >
//             {renderHamburgerIcon()}
//           </button>
//         </div>
//       </div>

//       {/* --- Common Modal --- */}
//       <CommonModal isOpen={isModalOpen}>
//         <div className="hidden lg:flex justify-end">
//           {isUserAuthenticated() ? desktopHamburgerLinks : null}
//         </div>
//         <div className="lg:hidden w-full">{mobileNavLinks}</div>
//       </CommonModal>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/Auth";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import localFont from "next/font/local";

// --- Font Configuration ---
const rye = localFont({ src: "../../public/fonts/Rye-Regular.ttf" });
const ambystoma = localFont({
  src: "../../public/fonts/Ambystoma_Mexicanum.otf",
});
const anaheim = localFont({
  src: "../../public/fonts/Anaheim-VariableFont_wght.ttf",
});

// ==========================================
// 1. Common NavLink Component
// ==========================================
const NavLink = ({ href, text, onClick, className = "" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} onClick={onClick} className="relative group w-auto">
      <div
        className={`
          ${rye.className}
          relative 
          lg:h-[36px] rounded-full border-[2px] transition-all duration-300 ease-in-out
          flex items-center justify-center cursor-pointer whitespace-nowrap
          uppercase tracking-widest
          
          /* --- RESPONSIVE FIXES --- */
          lg:px-4 lg:text-sm      /* Smaller for 1024px screens */
          xl:px-8 xl:text-lg      /* Original size for larger screens */
          /* ------------------------ */

          ${
            isActive
              ? "bg-[#FFA53A] border-[#FFA53A] text-[#070044]"
              : "bg-transparent border-[#FFA53A] text-[#FFA53A] hover:bg-[#FFA53A] hover:bg-opacity-20 hover:text-[#070044]"
          }
          ${className}
        `}
      >
        {text}
      </div>
    </Link>
  );
};

// ==========================================
// 2. Common Modal Component
// ==========================================
const CommonModal = ({ isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-screen z-40 overflow-hidden 
                     bg-black/40 backdrop-blur-sm 
                     lg:static lg:h-auto lg:bg-transparent lg:backdrop-blur-none lg:overflow-visible"
        >
          <div className="p-6 flex flex-col justify-start pt-28 min-h-full lg:min-h-0 lg:pt-0">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// 3. Main Navbar Component
// ==========================================
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ADDED: Local state to hold the display name for immediate updates
  const [displayName, setDisplayName] = useState("");

  const { authState, isUserAuthenticated, setUserAuthInfo } = useAuth();
  const pathname = usePathname();

  // --- SCROLL EFFECT ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- MODAL CLOSE ON NAVIGATE ---
  useEffect(() => {
    setIsModalOpen(false);
  }, [pathname]);

  // --- FIX: USERNAME SYNC LOGIC ---
  // This effect runs whenever the Path changes (navigation) or AuthState changes.
  // It forces the Navbar to check LocalStorage if AuthState is slightly delayed.
  useEffect(() => {
    // 1. Try to get name from Context first (Most reliable source)
    if (authState?.user?.first_name) {
      setDisplayName(authState.user.first_name);
    }
    // 2. Fallback: If context is empty, check LocalStorage directly (Fixes "Refresh Needed" bug)
    else if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser?.first_name) {
            setDisplayName(parsedUser.first_name);
          }
        } catch (error) {
          console.error("Error parsing user from local storage", error);
        }
      } else {
        // If nothing in context AND nothing in storage, clear the name
        setDisplayName("");
      }
    }
  }, [authState, pathname]); // Dependency on pathname ensures it checks again after a redirect

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNavLinkClick = (path) => {
    setIsModalOpen(false);
  };

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUserAuthInfo({ token: "", user: {} });
      setDisplayName(""); // Immediately clear name from UI
      toast.success("Logged out successfully");
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
      toast.error("Logout failed");
    }
  };

  const renderHamburgerIcon = () => (isModalOpen ? "✕" : "☰");

  // --- Auth Button Logic ---
  const renderAuthButton = () => {
    // We check authentication status
    const authenticated = isUserAuthenticated();

    return authenticated ? (
      <Link href="/profile">
        {/* Updated responsive sizing to match NavLink */}
        <div
          className="relative lg:py-0 lg:h-[36px] rounded-full border-[2px] border-[#FFA53A] bg-[#FFA53A] text-[#070044] flex items-center justify-center cursor-pointer transition-all hover:bg-white hover:border-white 
          lg:px-4 xl:px-8 py-2"
        >
          <span
            className={`${anaheim.className} font-bold tracking-widest uppercase truncate max-w-[150px]
              lg:text-sm xl:text-lg`}
          >
            {/* USE THE LOCAL 'displayName' STATE INSTEAD OF DIRECT AUTHSTATE */}
            {displayName || "Profile"}
          </span>
        </div>
      </Link>
    ) : (
      <NavLink href="/login" text="Login" />
    );
  };

  // --- Desktop Dropdown Links ---
  const desktopHamburgerLinks = (
    <div className="flex flex-col justify-center items-center gap-4">
      <NavLink
        href="/profile"
        text="My Profile"
        onClick={() => handleNavLinkClick("/profile")}
      />
      <div className="w-full h-[1px] bg-[#FFA53A] opacity-30"></div>
      <NavLink
        href="/"
        text="Logout"
        onClick={() => {
          handleLogout();
          handleNavLinkClick("/");
        }}
      />
    </div>
  );

  // --- Mobile Menu Links ---
  const mobileNavLinks = (
    <div className="flex flex-col w-full justify-center items-end pr-0.3 gap-4">
      <NavLink
        href="/"
        text="Home"
        className="w-40"
        onClick={() => handleNavLinkClick("/")}
      />
      <NavLink
        href="/picsoreel"
        text="Pics-o-Reel"
        className="w-40"
        onClick={() => handleNavLinkClick("/picsoreel")}
      />
      <NavLink
        href="/workshops"
        text="Workshops"
        className="w-40"
        onClick={() => handleNavLinkClick("/workshops")}
      />
      <NavLink
        href="/events"
        text="Events"
        className="w-40"
        onClick={() => handleNavLinkClick("/events")}
      />
      <NavLink
        href="/sponsors"
        text="Sponsors"
        className="w-40"
        onClick={() => handleNavLinkClick("/sponsors")}
      />
      <NavLink
        href="/cart"
        text="Cart"
        className="w-40"
        onClick={() => handleNavLinkClick("/cart")}
      />

      {isUserAuthenticated() ? (
        <>
          <div className="w-1/2 h-[1px] bg-[#FFA53A] opacity-30 my-2"></div>
          <NavLink
            href="/profile"
            text="Profile"
            className="w-40"
            onClick={() => handleNavLinkClick("/profile")}
          />
          <NavLink
            href="/"
            text="Logout"
            className="w-40"
            onClick={() => {
              handleLogout();
              handleNavLinkClick("/");
            }}
          />
        </>
      ) : (
        <NavLink
          href="/login"
          text="Login"
          className="w-40"
          onClick={() => handleNavLinkClick("/login")}
        />
      )}
    </div>
  );

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 
        ${
          isModalOpen
            ? "bg-transparent"
            : isScrolled
            ? "bg-black/30 backdrop-blur-md shadow-lg shadow-[#FFA53A]/10"
            : "bg-transparent"
        }
      `}
    >
      {/* --- Desktop View --- */}
      <div className="hidden lg:flex w-full px-6 py-6 items-center relative">
        {/* Left spacer – keeps center truly centered */}
        <div className="flex-1" />

        {/* Centered nav group */}
        <div className="flex justify-center items-center lg:gap-2 xl:gap-[18px]">
          <NavLink href="/" text="Home" />
          <NavLink href="/picsoreel" text="Pics-o-Reel" />
          <NavLink href="/workshops" text="Workshops" />
          <NavLink href="/events" text="Events" />
          <NavLink href="/sponsors" text="Sponsors" />
          <NavLink href="/cart" text="Cart" />
          {renderAuthButton()}
        </div>

        {/* Right area (hamburger) */}
        <div className="flex-1 flex justify-end">
          {isUserAuthenticated() && (
            <button
              onClick={toggleModal}
              className="text-[#FFA53A] text-2xl focus:outline-none hover:scale-110 transition-transform"
            >
              {renderHamburgerIcon()}
            </button>
          )}
        </div>
      </div>

      {/* --- Mobile View --- */}
      <div className="relative z-50 lg:hidden flex justify-between items-center py-4 px-6 bg-transparent">
        <Link href="/">
          <span
            className={`${ambystoma.className} text-[#FFA53A] text-xl font-bold tracking-widest p-2`}
          >
            PICTOFEST
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleModal}
            className="text-[#FFA53A] text-2xl focus:outline-none w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#FFA53A] bg-transparent"
          >
            {renderHamburgerIcon()}
          </button>
        </div>
      </div>

      {/* --- Common Modal --- */}
      <CommonModal isOpen={isModalOpen}>
        <div className="hidden lg:flex justify-end">
          {isUserAuthenticated() ? desktopHamburgerLinks : null}
        </div>
        <div className="lg:hidden w-full">{mobileNavLinks}</div>
      </CommonModal>
    </div>
  );
};

export default Navbar;