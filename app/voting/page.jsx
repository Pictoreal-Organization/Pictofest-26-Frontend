
// "use client";

// import { useState, useEffect, useMemo } from "react";
// import Image from "next/image";
// import Navbar from "@/app/components/Navbar";
// import localFont from "next/font/local";
// import isNotAuth from "@/app/components/isNotAuth";
// import api from "@/app/api";
// import { useRouter } from "next/navigation"; // Import useRouter

// const rye = localFont({
//   src: "../../public/fonts/Rye-Regular.ttf",
// });

// const Voting = () => {
//   const router = useRouter(); // Initialize router
//   const [entries, setEntries] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("sketching");
//   const [searchCode, setSearchCode] = useState("");
//   const [wishlist, setWishlist] = useState([]);
//   const [wishlistOpen, setWishlistOpen] = useState(false);
//   const isVotingLive = true;

//   const categories = [
//     { id: "sketching", label: "Sketching", eventCode: "SK" },
//     { id: "painting", label: "Painting", eventCode: "PA" },
//     { id: "photography", label: "Photography", eventCode: "PH" },
//     { id: "scripts-and-styles", label: "Scripts and Styles", eventCode: "SS" },
//     { id: "themed-category", label: "Themed Category", eventCode: "TC" },
//   ];

//   // Fetch Entries
//   useEffect(() => {
//     const fetchEntries = async () => {
//       setLoading(true);
//       const category = categories.find((c) => c.id === selectedCategory);
//       if (!category) return;

//       try {
//         const res = await api.get(
//           `/entry/eventcode/${category.eventCode}?page=1&size=12`
//         );
//         if (!res.data.error) {
//           setEntries(res.data.data.entries);
//         }
//       } catch (err) {
//         console.error("Entries fetch failed:", err);
//       }
//       setLoading(false);
//     };

//     fetchEntries();
//   }, [selectedCategory]);

//   // Fetch Wishlist
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const res = await api.get("/wishlist");
//         if (!res.data.error) {
//           setWishlist(res.data.data);
//         }
//       } catch (err) {
//         console.error("Wishlist fetch failed:", err);
//       }
//     };
//     fetchWishlist();
//   }, []);

//   // Filter entries
//   const filteredEntries = searchCode
//     ? entries.filter((entry) =>
//         entry.ticket_id.toLowerCase().includes(searchCode.toLowerCase())
//       )
//     : entries;

//   // Handle Scroll Locking
//   useEffect(() => {
//     if (!isVotingLive || wishlistOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isVotingLive, wishlistOpen]);

//   const handleVote = async (entry) => {
//     try {
//       const res = await api.post("/wishlist", { entry_id: entry.id });
//       if (!res.data.error && !wishlist.some((w) => w.id === entry.id)) {
//         setWishlist((prev) => [...prev, entry]);
//       }
//     } catch (err) {
//       console.error("Vote failed:", err);
//     }
//   };

//   const removeVote = async (entryId) => {
//     try {
//       const res = await api.delete("/wishlist", {
//         data: { entry_id: entryId },
//       });
//       if (!res.data.error) {
//         setWishlist((prev) => prev.filter((item) => item.id !== entryId));
//         if (wishlist.length - 1 === 0) setWishlistOpen(false);
//       }
//     } catch (err) {
//       console.error("Remove vote failed:", err);
//     }
//   };

//   // --- GROUPING LOGIC FOR WISHLIST ---
//   const groupedWishlist = useMemo(() => {
//     const groups = {};
//     wishlist.forEach((item) => {
//       const prefix = item.ticket_id
//         ? item.ticket_id.substring(0, 2).toUpperCase()
//         : "OT";
//       const cat = categories.find((c) => c.eventCode === prefix);
//       const label = cat ? cat.label : "Other";

//       if (!groups[label]) {
//         groups[label] = [];
//       }
//       groups[label].push(item);
//     });
//     return groups;
//   }, [wishlist, categories]);

//   return (
//     <div className="min-h-screen relative">
//       {/* Background */}
//       <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044] min-h-screen">
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

//       <Navbar />

//       <main className="pt-32 lg:pt-40 px-4 lg:px-8 pb-32">
//         <div className="max-w-7xl mx-auto">
//           {/* Title */}
//           <div
//             className="text-center heading-font text-white 
//             text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px]
//             mb-8 sm:mb-10 md:mb-12
//             drop-shadow-lg uppercase"
//           >
//             My Votes
//           </div>

//           {/* Categories */}
//           <div className="flex flex-nowrap justify-start lg:justify-center items-center gap-4 lg:gap-6 mb-8 lg:mb-10 overflow-x-auto pb-2 scrollbar-hide">
//             <style jsx>{`
//               .scrollbar-hide::-webkit-scrollbar {
//                 display: none;
//               }
//               .scrollbar-hide {
//                 -ms-overflow-style: none;
//                 scrollbar-width: none;
//               }
//             `}</style>
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => {
//                   setSelectedCategory(category.id);
//                   setSearchCode("");
//                 }}
//                 className={`${rye.className} 
//                   px-6 lg:px-8 py-4 lg:py-4
//                   rounded-full 
//                   text-sm lg:text-base 
//                   font-semibold 
//                   transition-all duration-300
//                   tracking-widest uppercase
//                   drop-shadow-md
//                   whitespace-nowrap
//                   flex-shrink-0
//                   ${
//                     selectedCategory === category.id
//                       ? "bg-white text-[#070044]"
//                       : "bg-transparent border-2 border-white text-white hover:bg-white/20"
//                   }`}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </div>

//           {!isVotingLive && (
//             <div className="text-center mt-40 mb-14">
//               <h2
//                 className={`${rye.className} text-[#FFA53A] text-xl sm:text-2xl md:text-3xl tracking-widest uppercase drop-shadow-md`}
//               >
//                 Voting phase starts on 23 Feb
//               </h2>
//             </div>
//           )}

//           {/* Search */}
//           <div className="max-w-2xl lg:max-w-3xl mx-auto mb-12 lg:mb-16">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Enter the code"
//                 value={searchCode}
//                 onChange={(e) => setSearchCode(e.target.value)}
//                 className={`${rye.className} 
//                   w-full px-6 lg:px-8 py-4 lg:py-5 
//                   rounded-full border-2 border-white 
//                   bg-white/10 backdrop-blur-sm 
//                   text-white 
//                   placeholder-white/70 
//                   focus:outline-none focus:ring-2 
//                   focus:ring-[#FFA53A] focus:border-[#FFA53A]
//                   text-base lg:text-lg`}
//               />
//               <div className="absolute right-4 top-1/2 -translate-y-1/2">
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="text-white"
//                 >
//                   <path
//                     d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Grid */}
//           {isVotingLive && filteredEntries.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//               {filteredEntries.map((entry) => (
//                 <div
//                   key={entry.id}
//                   className="flex flex-col items-center mx-auto w-full"
//                 >
//                   <div className="relative w-full max-w-[300px]">
//                     <div className="relative">
//                       <Image
//                         src="/img/gallery/gallary-frame.png"
//                         alt="Gallery Frame"
//                         width={450}
//                         height={450}
//                         className="w-full h-auto translate-x-1"
//                         priority={false}
//                       />
//                       <h2
//                         className={`${rye.className} absolute top-3 left-1/2 -translate-x-1/2 text-[#A53A1F] font-semibold text-lg lg:text-xl tracking-widest uppercase`}
//                       >
//                         {entry.ticket_id}
//                       </h2>
//                       <div className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[71%] h-[69%] p-1 flex items-center justify-center">
//                         <img
//                           src={entry.image_link}
//                           alt={`Entry ${entry.ticket_id}`}
//                           className="w-full h-full object-contain"
//                         />
//                       </div>
//                     </div>
//                     <div className="relative mt-6 ml-4">
//                       <Image
//                         src="/img/gallery/TagNo.png"
//                         alt="Tag Number"
//                         width={350}
//                         height={60}
//                         className="w-full h-auto hover:scale-95 transition-transform"
//                       />
//                       <button
//                         onClick={() => handleVote(entry)}
//                         className={`${rye.className} text-[#A53A1F] absolute inset-0 flex items-center justify-center font-semibold text-lg lg:text-xl xl:text-2xl cursor-pointer -translate-y-1`}
//                       >
//                         Vote
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <p className="text-white text-lg lg:text-xl body-font">
//                 No entries found for this category.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* --- ZOMATO STYLE CART / WISHLIST --- */}
//         {wishlist.length > 0 && (
//           <>
//             {/* Dark Backdrop for Modal */}
//             {wishlistOpen && (
//               <div
//                 className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
//                 onClick={() => setWishlistOpen(false)}
//               />
//             )}

//             {/* Bottom Interaction Area */}
//             <div className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-6">
              
//               {/* Collapsed Bar */}
//               {!wishlistOpen && (
//                 <div
//                   onClick={() => setWishlistOpen(true)}
//                   className="max-w-2xl mx-auto 
//                     bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md 
//                     border-2 border-white/30 shadow-2xl
//                     rounded-3xl p-4 sm:px-6 sm:py-5
//                     flex justify-between items-center cursor-pointer 
//                     transform hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <div className="flex flex-col">
//                     <span
//                       className={`${rye.className} text-white/70 text-xs uppercase tracking-widest mb-1`}
//                     >
//                       Your Selections
//                     </span>
//                     <span className="font-bold text-white text-lg drop-shadow-sm">
//                       {wishlist.length} Entries Selected
//                     </span>
//                   </div>

//                   <div 
//                     className="flex items-center gap-2 
//                     bg-gradient-to-r from-[#FFA53A] to-[#FF8C1A] hover:from-[#FF8C1A] hover:to-[#FFA53A]
//                     px-5 py-3 rounded-full shadow-lg transition-all"
//                   >
//                     <span className={`${rye.className} text-white font-semibold text-sm`}>
//                       View Votes
//                     </span>
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="text-white transform -rotate-90"
//                     >
//                       <path
//                         d="M6 9L12 15L18 9"
//                         stroke="currentColor"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               )}

//               {/* Expanded Drawer */}
//               <div
//                 className={`fixed left-0 right-0 bottom-0 bg-white rounded-t-3xl shadow-2xl transition-transform duration-500 ease-in-out transform
//                 ${wishlistOpen ? "translate-y-0" : "translate-y-[110%]"}`}
//                 style={{ maxHeight: "85vh" }}
//               >
//                 {/* Drawer Header */}
//                 <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white sticky top-0 z-10 rounded-t-3xl">
//                   <div>
//                     <h3 className={`${rye.className} text-2xl text-[#070044]`}>
//                       Your Votes
//                     </h3>
//                     <p className="text-gray-500 text-sm">
//                       Total {wishlist.length} items
//                     </p>
//                   </div>

//                   {/* Header Actions: Vote Button & Close Button */}
//                   <div className="flex items-center gap-3">
//                     <button
//                         onClick={() => router.push('/votes')}
//                         className={`${rye.className} bg-[#FFA53A] hover:bg-[#e08e2b] text-[#070044] px-6 py-2 rounded-full font-bold text-sm shadow-md transition-all uppercase tracking-wider`}
//                     >
//                         Vote
//                     </button>
                    
//                     <button
//                         onClick={() => setWishlistOpen(false)}
//                         className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
//                     >
//                         <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="#070044"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         >
//                         <line x1="18" y1="6" x2="6" y2="18"></line>
//                         <line x1="6" y1="6" x2="18" y2="18"></line>
//                         </svg>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Drawer Content (Scrollable) */}
//                 <div
//                   className="overflow-y-auto p-6 pb-24"
//                   style={{ maxHeight: "calc(85vh - 80px)" }}
//                 >
//                   {/* Iterate over Categories */}
//                   {Object.keys(groupedWishlist).map((categoryLabel) => (
//                     <div key={categoryLabel} className="mb-8 last:mb-0">
//                       {/* Category Title */}
//                       <div className="flex items-center gap-4 mb-4">
//                         <h4
//                           className={`${rye.className} text-lg text-[#FFA53A] uppercase tracking-wide`}
//                         >
//                           {categoryLabel}
//                         </h4>
//                         <div className="h-[1px] bg-gray-200 flex-1"></div>
//                       </div>

//                       {/* Items Grid for this Category */}
//                       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
//                         {groupedWishlist[categoryLabel].map((item) => (
//                           <div
//                             key={item.id}
//                             className="group relative flex flex-col gap-2"
//                           >
//                             {/* Image Container */}
//                             <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm">
//                               <img
//                                 src={item.image_link || item.img}
//                                 className="w-full h-full object-cover"
//                                 alt={item.ticket_id}
//                               />
//                               {/* Remove Button Overlay */}
//                               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                                 <button
//                                   onClick={() => removeVote(item.id)}
//                                   className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transform hover:scale-110 transition-all"
//                                 >
//                                   <svg
//                                     width="16"
//                                     height="16"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="3"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   >
//                                     <line x1="18" y1="6" x2="6" y2="18"></line>
//                                     <line x1="6" y1="6" x2="18" y2="18"></line>
//                                   </svg>
//                                 </button>
//                               </div>
//                             </div>

//                             {/* Ticket ID */}
//                             <span className="text-xs font-bold text-center text-[#070044] bg-gray-100 rounded py-1">
//                               {item.ticket_id}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}

//                   {/* Empty State Safety Check */}
//                   {wishlist.length === 0 && (
//                     <div className="text-center text-gray-400 py-10">
//                       No votes selected yet.
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </main>
//     </div>
//   );
// };

// export default isNotAuth(Voting);

"use client";

import { useState, useEffect } from "react";
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
  const [removingIds, setRemovingIds] = useState(new Set());

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
          api.get(`/voting`),
          api.get(`/wishlist`),
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
    return (
      categories.find((cat) => cat.event_code === eventCode)?.label || eventCode
    );
  };

  // Check if all wishlist entries in current category are already voted
  const areAllWishlistEntriesVoted = (categoryId) => {
    const wishlistInCategory = wishlistEntries.filter(
      (entry) => entry.event_code === categoryId
    );

    if (wishlistInCategory.length === 0) return false;

    return wishlistInCategory.every((wishlistEntry) =>
      votedEntries.some((votedEntry) => votedEntry.id === wishlistEntry.id)
    );
  };

  // Get breakdown by category for display
  const getWishlistBreakdown = () => {
    const breakdown = {};

    wishlistEntries.forEach((entry) => {
      const category = entry.event_code;
      if (!breakdown[category]) {
        breakdown[category] = {
          name: getCategoryName(category),
          count: 0,
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
    wishlistEntries.forEach((entry) => {
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
          categoryName: getCategoryName(category),
        });
      }
    });

    return { isValid: violations.length === 0, violations };
  };

  // Handle remove from wishlist
  const handleRemoveFromWishlist = async (entryId) => {
    setRemovingIds((prev) => new Set(prev).add(entryId));

    try {
      const response = await api.delete(`/wishlist`, {
        data: { entry_id: entryId },
      });

      if (!response.data.error) {
        toast.success("Removed from wishlist");
        // Update local state
        setWishlistEntries((prev) => prev.filter((entry) => entry.id !== entryId));
      }
    } catch (err) {
      console.error(err);
      const errorMsg =
        err.response?.data?.message || "Failed to remove from wishlist";
      toast.error(errorMsg);
    } finally {
      setRemovingIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(entryId);
        return newSet;
      });
    }
  };

  const handleVoteAllFromWishlist = async () => {
    const validation = validateWishlistVotes();

    if (!validation.isValid) {
      const errorMessages = validation.violations
        .map((v) => `${v.categoryName} (${v.count} entries)`)
        .join(", ");

      toast.error(
        `Maximum 2 votes allowed per category. Please remove extra entries from: ${errorMessages}`
      );
      return;
    }

    setIsVoting(true);

    try {
      const response = await api.post(`/voting/vote-wishlist`);

      if (!response.data.error) {
        toast.success(
          `${response.data.votedCount || "All"} entries voted successfully!`
        );

        const [votedRes, wishlistRes] = await Promise.all([
          api.get(`/voting`),
          api.get(`/wishlist`),
        ]);

        if (!votedRes.data.error) setVotedEntries(votedRes.data.data);
        if (!wishlistRes.data.error) setWishlistEntries(wishlistRes.data.data);

        setMode("voted");
      }
    } catch (err) {
      console.error(err);

      if (err.response?.data?.violations) {
        const violationMsgs = err.response.data.violations
          .map((v) => v.message)
          .join("\n");
        toast.error(violationMsgs);
      } else {
        const errorMsg =
          err.response?.data?.message ||
          "Failed to submit votes. Please try again.";
        toast.error(errorMsg);
      }
    } finally {
      setIsVoting(false);
    }
  };

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

      <Navbar />

      <main className="relative min-h-screen overflow-x-hidden">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 lg:gap-10 justify-center items-center lg:py-16 py-10 px-4 sm:px-6 lg:px-8">
          
          {/* Gallery Title */}
          <h1
            className={`heading-font text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mt-8 lg:mt-12 drop-shadow-lg`}
          >
            My Votes
          </h1>

          {/* Mode Toggle */}
          <div className="relative inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1.5 shadow-xl border border-white/20">
            <button
              onClick={() => setMode("voted")}
              className={`sub-heading-font relative px-8 sm:px-10 lg:px-12 py-3 lg:py-3.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ease-in-out
                ${
                  mode === "voted"
                    ? "bg-white text-[#070044] shadow-lg scale-105"
                    : "text-white hover:text-white/80"
                }`}
            >
              My Votes
              {mode === "voted" && (
                <div className="absolute inset-0 rounded-full bg-white/20 blur-md -z-10"></div>
              )}
            </button>

            <button
              onClick={() => setMode("wishlist")}
              className={`sub-heading-font relative px-8 sm:px-10 lg:px-12 py-3 lg:py-3.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ease-in-out
                ${
                  mode === "wishlist"
                    ? "bg-white text-[#070044] shadow-lg scale-105"
                    : "text-white hover:text-white/80"
                }`}
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

          {/* Vote All Button */}
          {mode === "wishlist" && totalWishlistCount > 0 && (
            <div className="w-full max-w-4xl">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl px-6 sm:px-8 py-6 border-2 border-white/30 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white text-base sm:text-lg body-font font-semibold">
                      Ready to Submit Your Votes?
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm mt-1">
                      This will vote for{" "}
                      <span className="font-bold text-[#FFA53A]">
                        {totalWishlistCount}{" "}
                        {totalWishlistCount === 1 ? "artwork" : "artworks"}
                      </span>{" "}
                      across all categories
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
                          <span className="font-bold text-[#FFA53A]">
                            {cat.count}
                          </span>{" "}
                          × {cat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/50 text-xs mt-3 italic">
                    💡 Clicking "Submit All Votes" will vote for all artworks
                    shown above, not just the current category view
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Category Filters */}
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
                    ${
                      selectedCategory === category.event_code
                        ? "bg-white text-[#070044] shadow-xl border-2 border-white"
                        : "bg-white/5 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

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

          {/* Gallery Grid */}
          {isVotingLive && filteredEntries.length > 0 ? (
            <div className="w-full max-w-7xl mt-6 lg:mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 px-4 sm:px-6 lg:px-8">
                {filteredEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex flex-col items-center mx-auto w-full transform transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* Card Container - Added relative for positioning */}
                    <div className="relative w-full max-w-[400px] group">
                      
                      {/* --- NEW REMOVE BUTTON --- */}
                      {mode === "wishlist" && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveFromWishlist(entry.id);
                          }}
                          disabled={removingIds.has(entry.id)}
                          className="absolute -top-2 -right-2 z-50 
                            bg-red-600 hover:bg-red-700 
                            text-white 
                            w-10 h-10 sm:w-9 sm:h-9 
                            rounded-full flex items-center justify-center 
                            shadow-[0_4px_8px_rgba(0,0,0,0.3)] 
                            border-[3px] border-white
                            transition-all duration-200 
                            active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Remove from wishlist"
                        >
                          {removingIds.has(entry.id) ? (
                            <svg
                              className="animate-spin h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      )}

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

                        {/* Ticket ID */}
                        <h2
                          className={`sub-heading-font absolute top-3 left-1/2 -translate-x-1/2 text-[#A53A1F] font-semibold text-lg lg:text-xl tracking-widest uppercase drop-shadow-md`}
                        >
                          {entry.ticket_id}
                        </h2>

                        {/* Entry Image */}
                        <div
                          className="absolute top-[15%] left-1/2 -translate-x-[52%] w-[56%]"
                          style={{ minWidth: "180px", minHeight: "240px" }}
                        >
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
                ) : areAllWishlistEntriesVoted(selectedCategory) ? (
                  <div>
                    <p className="text-white text-base lg:text-lg body-font leading-relaxed">
                      All the artworks in this category are already voted.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-white text-base lg:text-lg body-font leading-relaxed">
                      You don't have any artworks in your wishlist for this
                      category.
                    </p>
                  </div>
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