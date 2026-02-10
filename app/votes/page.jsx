// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { baseURL } from "@/app/api";
// import Image from "next/image";
// import Navbar from "@/app/components/Navbar";
// import localFont from "next/font/local";
// import isNotAuth from "@/app/components/isNotAuth";
// import { toast } from "sonner";

// const Votes = () => {
//   const [selectedCategory, setSelectedCategory] = useState("craft");

//   const [votedEntries, setVotedEntries] = useState([]);
//   const [wishlistEntries, setWishlistEntries] = useState([]);
//   const [mode, setMode] = useState("voted"); // voted | wishlist
//   const [loading, setLoading] = useState(true);
//   const [isVoting, setIsVoting] = useState(false);

//   // Dummy data for entries - will be replaced with backend data later
//   const dummyEntries = {
//     craft: [
//       { id: 1, ticket_id: "CR001", img: "/img/gallery/dummy-img.png" },
//       { id: 2, ticket_id: "CR002", img: "/img/gallery/dummy-img.png" },
//       { id: 3, ticket_id: "CR003", img: "/img/gallery/dummy-img.png" },
//       { id: 4, ticket_id: "CR004", img: "/img/gallery/dummy-img.png" },
//       { id: 5, ticket_id: "CR005", img: "/img/gallery/dummy-img.png" },
//       { id: 6, ticket_id: "CR006", img: "/img/gallery/dummy-img.png" },
//     ],
//     "digital-art": [
//       { id: 1, ticket_id: "DA001", img: "/img/gallery/dummy-img.png" },
//       { id: 2, ticket_id: "DA002", img: "/img/gallery/dummy-img.png" },
//       { id: 3, ticket_id: "DA003", img: "/img/gallery/dummy-img.png" },
//       { id: 4, ticket_id: "DA004", img: "/img/gallery/dummy-img.png" },
//       { id: 5, ticket_id: "DA005", img: "/img/gallery/dummy-img.png" },
//       { id: 6, ticket_id: "DA006", img: "/img/gallery/dummy-img.png" },
//     ],
//     "painting-sketching": [
//       { id: 1, ticket_id: "PA001", img: "/img/gallery/dummy-img.png" },
//       { id: 2, ticket_id: "PA002", img: "/img/gallery/dummy-img.png" },
//       { id: 3, ticket_id: "PA003", img: "/img/gallery/dummy-img.png" },
//       { id: 4, ticket_id: "PA004", img: "/img/gallery/dummy-img.png" },
//       { id: 5, ticket_id: "PA005", img: "/img/gallery/dummy-img.png" },
//       { id: 6, ticket_id: "PA006", img: "/img/gallery/dummy-img.png" },
//     ],
//     "virtual-gallery": [
//       { id: 1, ticket_id: "VG001", img: "/img/gallery/dummy-img.png" },
//       { id: 2, ticket_id: "VG002", img: "/img/gallery/dummy-img.png" },
//       { id: 3, ticket_id: "VG003", img: "/img/gallery/dummy-img.png" },
//       { id: 4, ticket_id: "VG004", img: "/img/gallery/dummy-img.png" },
//       { id: 5, ticket_id: "VG005", img: "/img/gallery/dummy-img.png" },
//       { id: 6, ticket_id: "VG006", img: "/img/gallery/dummy-img.png" },
//     ],
//     "theme-category": [
//       { id: 1, ticket_id: "TC001", img: "/img/gallery/dummy-img.png" },
//       { id: 2, ticket_id: "TC002", img: "/img/gallery/dummy-img.png" },
//       { id: 3, ticket_id: "TC003", img: "/img/gallery/dummy-img.png" },
//       { id: 4, ticket_id: "TC004", img: "/img/gallery/dummy-img.png" },
//       { id: 5, ticket_id: "TC005", img: "/img/gallery/dummy-img.png" },
//       { id: 6, ticket_id: "TC006", img: "/img/gallery/dummy-img.png" },
//     ],
//   };

//   const dummyVoted = [
//     ...dummyEntries["craft"].map(e => ({ ...e, event_code: "craft", image_link: e.img })),
//     ...dummyEntries["digital-art"].slice(0,2).map(e => ({ ...e, event_code: "digital-art", image_link: e.img })),
//   ];
  
//   const dummyWishlist = [
//     ...dummyEntries["painting-sketching"].slice(0,3).map(e => ({ ...e, event_code: "painting-sketching", image_link: e.img })),
//     ...dummyEntries["theme-category"].slice(0,1).map(e => ({ ...e, event_code: "theme-category", image_link: e.img })),
//   ];
  

//   const categories = [
//     { id: "craft", label: "Craft" },
//     { id: "digital-art", label: "Digital Art" },
//     { id: "painting-sketching", label: "Painting/Sketching" },
//     { id: "virtual-gallery", label: "Virtual Gallery" },
//     { id: "theme-category", label: "Theme Category" },
//   ];

//   // useEffect(() => {
//   //   const fetchMyEntries = async () => {
//   //     try {
//   //       const [votedRes, wishlistRes] = await Promise.all([
//   //         axios.get(`${baseURL}/voting`, { withCredentials: true }),
//   //         axios.get(`${baseURL}/wishlist`, { withCredentials: true }),
//   //       ]);
  
//   //       if (!votedRes.data.error) {
//   //         setVotedEntries(votedRes.data.data);
//   //       }
  
//   //       if (!wishlistRes.data.error) {
//   //         setWishlistEntries(wishlistRes.data.data);
//   //       }
  
//   //     } catch (err) {
//   //       console.log(err);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
  
//   //   fetchMyEntries();
//   // }, []);
  

//   // const source = mode === "voted" ? votedEntries : wishlistEntries;

//   const source = mode === "voted" ? dummyVoted : dummyWishlist;

//   const currentEntries = source.filter(
//     (e) => e.event_code === selectedCategory
//   );

//   const filteredEntries = currentEntries;

//   // Get category name helper
//   const getCategoryName = (categoryId) => {
//     return categories.find(cat => cat.id === categoryId)?.label || categoryId;
//   };

//   // Check if user has already voted in a category
//   const hasVotedInCategory = (categoryId) => {
//     return votedEntries.some(entry => entry.event_code === categoryId);
//     // For dummy data:
//     // return dummyVoted.some(entry => entry.event_code === categoryId);
//   };

//   // Check if all wishlist entries in current category are already voted
//   const areAllWishlistEntriesVoted = (categoryId) => {
//     const wishlistInCategory = wishlistEntries.filter(entry => entry.event_code === categoryId);
//     // For dummy:
//     // const wishlistInCategory = dummyWishlist.filter(entry => entry.event_code === categoryId);
    
//     if (wishlistInCategory.length === 0) return false;
    
//     return wishlistInCategory.every(wishlistEntry => 
//       votedEntries.some(votedEntry => votedEntry.id === wishlistEntry.id)
//       // For dummy:
//       // dummyVoted.some(votedEntry => votedEntry.id === wishlistEntry.id)
//     );
//   };

//   // Get breakdown by category for display
//   const getWishlistBreakdown = () => {
//     const breakdown = {};
    
//     wishlistEntries.forEach(entry => {
//       const category = entry.event_code;
//       if (!breakdown[category]) {
//         breakdown[category] = {
//           name: getCategoryName(category),
//           count: 0
//         };
//       }
//       breakdown[category].count++;
//     });

//     // For dummy data:
//     // dummyWishlist.forEach(entry => {
//     //   const category = entry.event_code;
//     //   if (!breakdown[category]) {
//     //     breakdown[category] = {
//     //       name: getCategoryName(category),
//     //       count: 0
//     //     };
//     //   }
//     //   breakdown[category].count++;
//     // });

//     return Object.values(breakdown);
//   };

//   // Validate wishlist before voting
//   const validateWishlistVotes = () => {
//     const MAX_VOTES_PER_CATEGORY = 2;
//     const categoryCount = {};
    
//     // Count entries per category
//     wishlistEntries.forEach(entry => {
//       const category = entry.event_code;
//       categoryCount[category] = (categoryCount[category] || 0) + 1;
//     });

//     // For dummy data (replace above with this during testing):
//     // dummyWishlist.forEach(entry => {
//     //   const category = entry.event_code;
//     //   categoryCount[category] = (categoryCount[category] || 0) + 1;
//     // });

//     // Check for violations
//     const violations = [];
//     Object.entries(categoryCount).forEach(([category, count]) => {
//       if (count > MAX_VOTES_PER_CATEGORY) {
//         violations.push({
//           category,
//           count,
//           categoryName: getCategoryName(category)
//         });
//       }
//     });

//     return { isValid: violations.length === 0, violations };
//   };

//   // Handle vote all from wishlist
//   const handleVoteAllFromWishlist = async () => {
//     const validation = validateWishlistVotes();
    
//     if (!validation.isValid) {
//       const errorMessages = validation.violations.map(v => 
//         `${v.categoryName} (${v.count} entries)`
//       ).join(', ');
      
//       toast.error(
//         `Maximum 2 votes allowed per category. Please remove extra entries from: ${errorMessages}`
//       );
//       return;
//     }

//     setIsVoting(true);
    
//     try {
//       // Backend call to vote all wishlist entries
//       // const response = await axios.post(
//       //   `${baseURL}/voting/vote-wishlist`,
//       //   {},
//       //   { withCredentials: true }
//       // );
      
//       // if (!response.data.error) {
//       //   toast.success("All wishlist entries voted successfully!");
//       //   // Refresh data
//       //   await fetchMyEntries();
//       //   setMode("voted");
//       // }

//       // Dummy success for testing
//       toast.success("All wishlist entries voted successfully!");
//       setTimeout(() => {
//         setMode("voted");
//       }, 1000);
      
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to submit votes. Please try again.");
//     } finally {
//       setIsVoting(false);
//     }
//   };

//   // Get total wishlist count
//   const totalWishlistCount = wishlistEntries.length;
//   // For dummy: 
//   const totalWishlistCount_dummy = dummyWishlist.length;

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
  
//   const isVotingLive = true;

//   useEffect(() => {
//     if (!isVotingLive) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
  
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isVotingLive]);
  
//   return (
//     <div className="min-h-screen relative">
//       {/* Background */}
//       <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044] min-h-screen">
//         {/* Mobile Background */}
//         <div className="block lg:hidden w-full relative h-full">
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
//         {/* Desktop Background */}
//         <div className="hidden lg:block w-full relative h-full">
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

//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <main className="relative min-h-screen overflow-x-hidden">
//         <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 lg:gap-10 justify-center items-center lg:py-16 py-10 px-4 sm:px-6 lg:px-8">

//           {/* Gallery Title */}
//           <h1 className={`heading-font text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mt-8 lg:mt-12 drop-shadow-lg`}>
//             My Votes
//           </h1>

//           {/* Mode Toggle - Enhanced Design */}
//           <div className="relative inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1.5 shadow-xl border border-white/20">
//             <button
//               onClick={() => setMode("voted")}
//               className={`sub-heading-font relative px-8 sm:px-10 lg:px-12 py-3 lg:py-3.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ease-in-out
//                 ${mode === "voted"
//                   ? "bg-white text-[#070044] shadow-lg scale-105"
//                   : "text-white hover:text-white/80"}`}
//             >
//               My Votes
//               {mode === "voted" && (
//                 <div className="absolute inset-0 rounded-full bg-white/20 blur-md -z-10"></div>
//               )}
//             </button>

//             <button
//               onClick={() => setMode("wishlist")}
//               className={`sub-heading-font relative px-8 sm:px-10 lg:px-12 py-3 lg:py-3.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ease-in-out
//                 ${mode === "wishlist"
//                   ? "bg-white text-[#070044] shadow-lg scale-105"
//                   : "text-white hover:text-white/80"}`}
//             >
//               Wishlist
//               {mode === "wishlist" && totalWishlistCount_dummy > 0 && (
//                 <span className="ml-2 bg-[#FFA53A] text-white text-xs px-2 py-0.5 rounded-full">
//                   {totalWishlistCount_dummy}
//                 </span>
//               )}
//               {mode === "wishlist" && (
//                 <div className="absolute inset-0 rounded-full bg-white/20 blur-md -z-10"></div>
//               )}
//             </button>
//           </div>

//           {/* Vote All Button with Breakdown - Only show in wishlist mode */}
//           {mode === "wishlist" && totalWishlistCount_dummy > 0 && (
//             <div className="w-full max-w-4xl">
//               <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl px-6 sm:px-8 py-6 border-2 border-white/30 shadow-2xl">
                
//                 {/* Header */}
//                 <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
//                   <div className="text-center sm:text-left">
//                     <p className="text-white text-base sm:text-lg body-font font-semibold">
//                       Ready to Submit Your Votes?
//                     </p>
//                     <p className="text-white/80 text-xs sm:text-sm mt-1">
//                       This will vote for <span className="font-bold text-[#FFA53A]">{totalWishlistCount_dummy} {totalWishlistCount_dummy === 1 ? 'artwork' : 'artworks'}</span> across all categories
//                     </p>
//                   </div>
//                   <button
//                     onClick={handleVoteAllFromWishlist}
//                     disabled={isVoting}
//                     className="sub-heading-font px-10 py-3.5 bg-gradient-to-r from-[#FFA53A] to-[#FF8C1A] hover:from-[#FF8C1A] hover:to-[#FFA53A] text-white rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 whitespace-nowrap text-base"
//                   >
//                     {isVoting ? "Submitting..." : "Submit All Votes"}
//                   </button>
//                 </div>

//                 {/* Category Breakdown */}
//                 <div className="bg-black/20 rounded-2xl p-4 border border-white/10">
//                   <p className="text-white/70 text-xs sm:text-sm mb-3 font-semibold">
//                     Your votes breakdown:
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {getWishlistBreakdown().map((cat, index) => (
//                       <div
//                         key={index}
//                         className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
//                       >
//                         <span className="text-white text-xs sm:text-sm">
//                           <span className="font-bold text-[#FFA53A]">{cat.count}</span> × {cat.name}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                   <p className="text-white/50 text-xs mt-3 italic">
//                     💡 Clicking "Submit All Votes" will vote for all artworks shown above, not just the current category view
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Category Filters - Enhanced */}
//           <div className="w-full max-w-6xl">
//             <div className="flex flex-nowrap justify-start lg:justify-center items-center gap-3 lg:gap-4 overflow-x-auto pb-3 px-2 lg:px-0">
//               <style jsx>{`
//                 div::-webkit-scrollbar {
//                   height: 6px;
//                 }
//                 div::-webkit-scrollbar-track {
//                   background: rgba(255, 255, 255, 0.1);
//                   border-radius: 10px;
//                 }
//                 div::-webkit-scrollbar-thumb {
//                   background: rgba(255, 255, 255, 0.3);
//                   border-radius: 10px;
//                 }
//                 div::-webkit-scrollbar-thumb:hover {
//                   background: rgba(255, 255, 255, 0.5);
//                 }
//                 @media (min-width: 1024px) {
//                   div::-webkit-scrollbar {
//                     display: none;
//                   }
//                 }
//               `}</style>
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => {
//                     setSelectedCategory(category.id);
//                   }}
//                   className={`sub-heading-font 
//                     px-5 sm:px-6 lg:px-8 py-3 lg:py-3.5
//                     rounded-full 
//                     text-xs sm:text-sm lg:text-base 
//                     font-semibold 
//                     transition-all duration-300
//                     tracking-wider uppercase
//                     whitespace-nowrap
//                     flex-shrink-0
//                     transform hover:scale-105
//                     ${selectedCategory === category.id
//                       ? "bg-white text-[#070044] shadow-xl border-2 border-white"
//                       : "bg-white/5 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60"
//                     }`}
//                 >
//                   {category.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Voting Info Message */}
//           {!isVotingLive && (
//             <div className="text-center mt-32 mb-20">
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 shadow-2xl">
//                 <h2
//                   className={`sub-heading-font 
//                     text-[#FFA53A] 
//                     text-xl sm:text-2xl md:text-3xl 
//                     tracking-widest uppercase 
//                     drop-shadow-lg`}
//                 >
//                   Voting phase starts on 23 Feb
//                 </h2>
//               </div>
//             </div>
//           )}

//           {/* Gallery Grid - Enhanced spacing */}
//           {isVotingLive && filteredEntries.length > 0 ? (
//             <div className="w-full max-w-7xl mt-6 lg:mt-8">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 px-4 sm:px-6 lg:px-8">
//                 {filteredEntries.map((entry) => (
//                   <div
//                     key={entry.id}
//                     className="flex flex-col items-center mx-auto w-full transform transition-all duration-300 hover:scale-105"
//                   >
//                     {/* Card Container */}
//                     <div className="relative w-full max-w-[400px]">
//                       {/* Frame Container */}
//                       <div className="relative drop-shadow-2xl">
//                         {/* Outer Frame */}
//                         <Image
//                           src="/img/gallery/gallary-frame.png"
//                           alt="Gallery Frame"
//                           width={450}
//                           height={450}
//                           className="w-full h-auto"
//                           priority={false}
//                         />

//                         {/* Ticket ID - Positioned at top */}
//                         <h2
//                           className={`sub-heading-font absolute top-3 left-1/2 -translate-x-1/2 text-[#A53A1F] font-semibold text-lg lg:text-xl tracking-widest uppercase drop-shadow-md`}
//                         >
//                           {entry.ticket_id}
//                         </h2>

//                         {/* Entry Image - Centered */}
//                         <div className="absolute top-[15%] left-1/2 -translate-x-[52%] w-[56%]" style={{ minWidth: '180px', minHeight: '240px' }}>
//                           <img
//                             src={entry.image_link}
//                             alt={entry.ticket_id}
//                             className="w-full h-full object-cover rounded-sm"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : isVotingLive ? (
//             <div className="text-center py-20 mt-10">
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl px-10 py-8 border border-white/20 shadow-xl max-w-lg mx-auto">
//                 {mode === "voted" ? (
//                   <div>
//                     <p className="text-white text-base lg:text-lg body-font leading-relaxed">
//                       You haven't voted for any artwork in this category yet.
//                     </p>
//                   </div>
//                 ) : (
//                   areAllWishlistEntriesVoted(selectedCategory) ? (
//                     <div>
//                       <p className="text-white text-base lg:text-lg body-font leading-relaxed">
//                         All the artworks in this category are already voted.
//                       </p>
//                     </div>
//                   ) : (
//                     <div>
//                       <p className="text-white text-base lg:text-lg body-font leading-relaxed">
//                         You don't have any artworks in your wishlist for this category.
//                       </p>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           ) : null}

//           {/* Bottom spacing */}
//           <div className="h-12 lg:h-16"></div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Votes;





"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "@/app/api";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import isNotAuth from "@/app/components/isNotAuth";
import { toast } from "sonner";
import api from "@/app/api";

const Votes = () => {
  const [selectedCategory, setSelectedCategory] = useState("SK");

  const [votedEntries, setVotedEntries] = useState([]);
  const [wishlistEntries, setWishlistEntries] = useState([]);
  const [mode, setMode] = useState("voted"); // voted | wishlist
  const [loading, setLoading] = useState(true);
  const [isVoting, setIsVoting] = useState(false);

  // Updated categories based on PICSOREEL events from database
  const categories = [
    { id: "sketching", label: "Sketching", event_code: "SK" },
    { id: "photography", label: "Photography", event_code: "PH" },
    { id: "themed-category", label: "Themed Category", event_code: "TC" },
    { id: "scripts-styles", label: "Scripts & Styles", event_code: "SS" },
    { id: "painting", label: "Painting", event_code: "PA" },
  ];

  useEffect(() => {
    const fetchMyEntries = async () => {
      try {
        const [votedRes, wishlistRes] = await Promise.all([
          api.get(`${baseURL}/voting`),
          api.get(`${baseURL}/wishlist`),
        ]);
  
        if (!votedRes.data.error) {
          setVotedEntries(votedRes.data.data);
        }
  
        if (!wishlistRes.data.error) {
          setWishlistEntries(wishlistRes.data.data);
        }
  
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchMyEntries();
  }, []);

  const source = mode === "voted" ? votedEntries : wishlistEntries;

  const currentEntries = source.filter(
    (e) => e.event_code === selectedCategory
  );

  const filteredEntries = currentEntries;

  // Get category name helper
  const getCategoryName = (eventCode) => {
    return categories.find(cat => cat.event_code === eventCode)?.label || eventCode;
  };
  

  // Check if user has already voted in a category
  const hasVotedInCategory = (categoryId) => {
    return votedEntries.some(entry => entry.event_code === categoryId);
  };

  // Check if all wishlist entries in current category are already voted
  const areAllWishlistEntriesVoted = (categoryId) => {
    const wishlistInCategory = wishlistEntries.filter(entry => entry.event_code === categoryId);
    
    if (wishlistInCategory.length === 0) return false;
    
    return wishlistInCategory.every(wishlistEntry => 
      votedEntries.some(votedEntry => votedEntry.id === wishlistEntry.id)
    );
  };

  // Get breakdown by category for display
  const getWishlistBreakdown = () => {
    const breakdown = {};
    
    wishlistEntries.forEach(entry => {
      const category = entry.event_code;
      if (!breakdown[category]) {
        breakdown[category] = {
          name: getCategoryName(category),
          count: 0
        };
      }
      breakdown[category].count++;
    });

    return Object.values(breakdown);
  };

  // Validate wishlist before voting
  const validateWishlistVotes = () => {
    const MAX_VOTES_PER_CATEGORY = 2;
    const categoryCount = {};
    
    // Count entries per category
    wishlistEntries.forEach(entry => {
      const category = entry.event_code;
      categoryCount[category] = (categoryCount[category] || 0) + 1;
    });

    // Check for violations
    const violations = [];
    Object.entries(categoryCount).forEach(([category, count]) => {
      if (count > MAX_VOTES_PER_CATEGORY) {
        violations.push({
          category,
          count,
          categoryName: getCategoryName(category)
        });
      }
    });

    return { isValid: violations.length === 0, violations };
  };

  // Handle vote all from wishlist
  const handleVoteAllFromWishlist = async () => {
    const validation = validateWishlistVotes();
    
    if (!validation.isValid) {
      const errorMessages = validation.violations.map(v => 
        `${v.categoryName} (${v.count} entries)`
      ).join(', ');
      
      toast.error(
        `Maximum 2 votes allowed per category. Please remove extra entries from: ${errorMessages}`
      );
      return;
    }

    setIsVoting(true);
    
    try {
      const response = await api.post(
        `${baseURL}/voting/vote-wishlist`,
        {}      );
      
      if (!response.data.error) {
        toast.success("All wishlist entries voted successfully!");
        // Refresh data
        const [votedRes, wishlistRes] = await Promise.all([
          api.get(`${baseURL}/voting`),
          api.get(`${baseURL}/wishlist`),
        ]);
        
        if (!votedRes.data.error) {
          setVotedEntries(votedRes.data.data);
        }
        
        if (!wishlistRes.data.error) {
          setWishlistEntries(wishlistRes.data.data);
        }
        
        setMode("voted");
      }
      
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit votes. Please try again.");
    } finally {
      setIsVoting(false);
    }
  };

  // Get total wishlist count
  const totalWishlistCount = wishlistEntries.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const isVotingLive = true;

  useEffect(() => {
    if (!isVotingLive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVotingLive]);
  
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044] min-h-screen">
        {/* Mobile Background */}
        <div className="block lg:hidden w-full relative h-full">
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
        {/* Desktop Background */}
        <div className="hidden lg:block w-full relative h-full">
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

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 lg:gap-10 justify-center items-center lg:py-16 py-10 px-4 sm:px-6 lg:px-8">

          {/* Gallery Title */}
          <h1 className={`heading-font text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mt-8 lg:mt-12 drop-shadow-lg`}>
            My Votes
          </h1>

          {/* Mode Toggle - Enhanced Design */}
          <div className="relative inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1.5 shadow-xl border border-white/20">
            <button
              onClick={() => setMode("voted")}
              className={`sub-heading-font relative px-8 sm:px-10 lg:px-12 py-3 lg:py-3.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ease-in-out
                ${mode === "voted"
                  ? "bg-white text-[#070044] shadow-lg scale-105"
                  : "text-white hover:text-white/80"}`}
            >
              My Votes
              {mode === "voted" && (
                <div className="absolute inset-0 rounded-full bg-white/20 blur-md -z-10"></div>
              )}
            </button>

            <button
              onClick={() => setMode("wishlist")}
              className={`sub-heading-font relative px-8 sm:px-10 lg:px-12 py-3 lg:py-3.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ease-in-out
                ${mode === "wishlist"
                  ? "bg-white text-[#070044] shadow-lg scale-105"
                  : "text-white hover:text-white/80"}`}
            >
              Wishlist
              {mode === "wishlist" && totalWishlistCount > 0 && (
                <span className="ml-2 bg-[#FFA53A] text-white text-xs px-2 py-0.5 rounded-full">
                  {totalWishlistCount}
                </span>
              )}
              {mode === "wishlist" && (
                <div className="absolute inset-0 rounded-full bg-white/20 blur-md -z-10"></div>
              )}
            </button>
          </div>

          {/* Vote All Button with Breakdown - Only show in wishlist mode */}
          {mode === "wishlist" && totalWishlistCount > 0 && (
            <div className="w-full max-w-4xl">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl px-6 sm:px-8 py-6 border-2 border-white/30 shadow-2xl">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white text-base sm:text-lg body-font font-semibold">
                      Ready to Submit Your Votes?
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm mt-1">
                      This will vote for <span className="font-bold text-[#FFA53A]">{totalWishlistCount} {totalWishlistCount === 1 ? 'artwork' : 'artworks'}</span> across all categories
                    </p>
                  </div>
                  <button
                    onClick={handleVoteAllFromWishlist}
                    disabled={isVoting}
                    className="sub-heading-font px-10 py-3.5 bg-gradient-to-r from-[#FFA53A] to-[#FF8C1A] hover:from-[#FF8C1A] hover:to-[#FFA53A] text-white rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 whitespace-nowrap text-base"
                  >
                    {isVoting ? "Submitting..." : "Submit All Votes"}
                  </button>
                </div>

                {/* Category Breakdown */}
                <div className="bg-black/20 rounded-2xl p-4 border border-white/10">
                  <p className="text-white/70 text-xs sm:text-sm mb-3 font-semibold">
                    Your votes breakdown:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {getWishlistBreakdown().map((cat, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                      >
                        <span className="text-white text-xs sm:text-sm">
                          <span className="font-bold text-[#FFA53A]">{cat.count}</span> × {cat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/50 text-xs mt-3 italic">
                    💡 Clicking "Submit All Votes" will vote for all artworks shown above, not just the current category view
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Category Filters - Enhanced */}
          <div className="w-full max-w-6xl">
            <div className="flex flex-nowrap justify-start lg:justify-center items-center gap-3 lg:gap-4 overflow-x-auto pb-3 px-2 lg:px-0">
              <style jsx>{`
                div::-webkit-scrollbar {
                  height: 6px;
                }
                div::-webkit-scrollbar-track {
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 10px;
                }
                div::-webkit-scrollbar-thumb {
                  background: rgba(255, 255, 255, 0.3);
                  border-radius: 10px;
                }
                div::-webkit-scrollbar-thumb:hover {
                  background: rgba(255, 255, 255, 0.5);
                }
                @media (min-width: 1024px) {
                  div::-webkit-scrollbar {
                    display: none;
                  }
                }
              `}</style>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.event_code);
                  }}
                  className={`sub-heading-font 
                    px-5 sm:px-6 lg:px-8 py-3 lg:py-3.5
                    rounded-full 
                    text-xs sm:text-sm lg:text-base 
                    font-semibold 
                    transition-all duration-300
                    tracking-wider uppercase
                    whitespace-nowrap
                    flex-shrink-0
                    transform hover:scale-105
                    ${selectedCategory === category.event_code
                      ? "bg-white text-[#070044] shadow-xl border-2 border-white"
                      : "bg-white/5 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Voting Info Message */}
          {!isVotingLive && (
            <div className="text-center mt-32 mb-20">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 shadow-2xl">
                <h2
                  className={`sub-heading-font 
                    text-[#FFA53A] 
                    text-xl sm:text-2xl md:text-3xl 
                    tracking-widest uppercase 
                    drop-shadow-lg`}
                >
                  Voting phase starts on 23 Feb
                </h2>
              </div>
            </div>
          )}

          {/* Gallery Grid - Enhanced spacing */}
          {isVotingLive && filteredEntries.length > 0 ? (
            <div className="w-full max-w-7xl mt-6 lg:mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 px-4 sm:px-6 lg:px-8">
                {filteredEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex flex-col items-center mx-auto w-full transform transition-all duration-300 hover:scale-105"
                  >
                    {/* Card Container */}
                    <div className="relative w-full max-w-[400px]">
                      {/* Frame Container */}
                      <div className="relative drop-shadow-2xl">
                        {/* Outer Frame */}
                        <Image
                          src="/img/gallery/gallary-frame.png"
                          alt="Gallery Frame"
                          width={450}
                          height={450}
                          className="w-full h-auto"
                          priority={false}
                        />

                        {/* Ticket ID - Positioned at top */}
                        <h2
                          className={`sub-heading-font absolute top-3 left-1/2 -translate-x-1/2 text-[#A53A1F] font-semibold text-lg lg:text-xl tracking-widest uppercase drop-shadow-md`}
                        >
                          {entry.ticket_id}
                        </h2>

                        {/* Entry Image - Centered */}
                        <div className="absolute top-[15%] left-1/2 -translate-x-[52%] w-[56%]" style={{ minWidth: '180px', minHeight: '240px' }}>
                          <img
                            src={entry.image_link}
                            alt={entry.ticket_id}
                            className="w-full h-full object-cover rounded-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : isVotingLive ? (
            <div className="text-center py-20 mt-10">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-10 py-8 border border-white/20 shadow-xl max-w-lg mx-auto">
                {mode === "voted" ? (
                  <div>
                    <p className="text-white text-base lg:text-lg body-font leading-relaxed">
                      You haven't voted for any artwork in this category yet.
                    </p>
                  </div>
                ) : (
                  areAllWishlistEntriesVoted(selectedCategory) ? (
                    <div>
                      <p className="text-white text-base lg:text-lg body-font leading-relaxed">
                        All the artworks in this category are already voted.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-white text-base lg:text-lg body-font leading-relaxed">
                        You don't have any artworks in your wishlist for this category.
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : null}

          {/* Bottom spacing */}
          <div className="h-12 lg:h-16"></div>
        </div>
      </main>
    </div>
  );
};

export default isNotAuth(Votes);