// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Navbar from "@/app/components/Navbar";
// import localFont from "next/font/local";
// import isNotAuth from "@/app/components/isNotAuth";
// import api from "@/app/api";


// const rye = localFont({
//     src: "../../public/fonts/Rye-Regular.ttf",
// });

// const Votes = () => {
//     const [entries, setEntries] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const [selectedCategory, setSelectedCategory] = useState("sketching");
//     const [searchCode, setSearchCode] = useState("");

//     // Dummy data for entries - will be replaced with backend data later
//     // const dummyEntries = {
//     //     craft: [
//     //         { id: 1, ticket_id: "CR001", img: "/img/gallery/dummy-img1.jpg" },
//     //         { id: 2, ticket_id: "CR002", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 3, ticket_id: "CR003", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 4, ticket_id: "CR004", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 5, ticket_id: "CR005", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 6, ticket_id: "CR006", img: "/img/gallery/dummy-img.jpg" },
//     //     ],
//     //     "digital-art": [
//     //         { id: 1, ticket_id: "DA001", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 2, ticket_id: "DA002", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 3, ticket_id: "DA003", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 4, ticket_id: "DA004", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 5, ticket_id: "DA005", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 6, ticket_id: "DA006", img: "/img/gallery/dummy-img.jpg" },
//     //     ],
//     //     "painting-sketching": [
//     //         { id: 1, ticket_id: "PA001", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 2, ticket_id: "PA002", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 3, ticket_id: "PA003", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 4, ticket_id: "PA004", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 5, ticket_id: "PA005", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 6, ticket_id: "PA006", img: "/img/gallery/dummy-img.jpg" },
//     //     ],
//     //     "virtual-gallery": [
//     //         { id: 1, ticket_id: "VG001", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 2, ticket_id: "VG002", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 3, ticket_id: "VG003", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 4, ticket_id: "VG004", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 5, ticket_id: "VG005", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 6, ticket_id: "VG006", img: "/img/gallery/dummy-img.jpg" },
//     //     ],
//     //     "theme-category": [
//     //         { id: 1, ticket_id: "TC001", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 2, ticket_id: "TC002", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 3, ticket_id: "TC003", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 4, ticket_id: "TC004", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 5, ticket_id: "TC005", img: "/img/gallery/dummy-img.jpg" },
//     //         { id: 6, ticket_id: "TC006", img: "/img/gallery/dummy-img.jpg" },
//     //     ],
//     // };

//     // const categories = [
//     //     { id: "craft", label: "Craft" },
//     //     { id: "digital-art", label: "Digital Art" },
//     //     { id: "painting-sketching", label: "Painting/Sketching" },
//     //     { id: "virtual-gallery", label: "Virtual Gallery" },
//     //     { id: "theme-category", label: "Theme Category" },
//     // ];
//     const categories = [
//         { id: "sketching", label: "Sketching", eventCode: "SK" },
//         { id: "painting", label: "Painting", eventCode: "PA" },
//         { id: "photography", label: "Photography", eventCode: "PH" },
//         { id: "scripts-and-styles", label: "Scripts and Styles", eventCode: "SS" },
//         { id: "themed-category", label: "Themed Category", eventCode: "TC" },
//     ];


//     // const currentEntries = dummyEntries[selectedCategory] || [];

//     useEffect(() => {
//         const fetchEntries = async () => {
//             setLoading(true);

//             const category = categories.find(c => c.id === selectedCategory);
//             if (!category) return;

//             try {
//                 const res = await api.get(`/entry/eventcode/${category.eventCode}?page=1&size=12`);


//                 if (!res.data.error) {
//                     setEntries(res.data.data.entries);
//                 }
//             } catch (err) {
//                 console.error("Entries fetch failed:", err);
//             }

//             setLoading(false);
//         };

//         fetchEntries();
//     }, [selectedCategory]);



//     // Filter entries by search code
//     const filteredEntries = searchCode
//         ? entries.filter((entry) =>
//             entry.ticket_id.toLowerCase().includes(searchCode.toLowerCase())
//         )
//         : entries;


//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);
//     const isVotingLive = true;

//     useEffect(() => {
//         if (!isVotingLive) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "auto";
//         }

//         return () => {
//             document.body.style.overflow = "auto";
//         };
//     }, [isVotingLive]);


//     const [wishlist, setWishlist] = useState([]);
//     const [wishlistOpen, setWishlistOpen] = useState(false);

//     useEffect(() => {
//         const fetchWishlist = async () => {
//             try {
//                 const res = await api.get("/wishlist");

//                 if (!res.data.error) {
//                     setWishlist(res.data.data);
//                 }
//             } catch (err) {
//                 console.error("Wishlist fetch failed:", err);
//             }
//         };

//         fetchWishlist();
//     }, []);



//     const handleVote = async (entry) => {
//         try {
//             const res = await api.post("/wishlist", { entry_id: entry.id });


//             if (!res.data.error && !wishlist.some(w => w.id === entry.id)) {
//                 setWishlist(prev => [...prev, entry]);
//             }
//         } catch (err) {
//             console.error("Vote failed:", err);
//         }
//     };


//     const removeVote = async (entryId) => {
//         try {
//             const res = await api.delete("/wishlist", {
//                 data: { entry_id: entryId }
//             });


//             if (!res.data.error) {
//                 setWishlist(prev => prev.filter(item => item.id !== entryId));
//             }
//         } catch (err) {
//             console.error("Remove vote failed:", err);
//         }
//     };


//     return (
//         <div className="min-h-screen relative">
//             {/* Background */}
//             <div className="absolute top-0 left-0 w-full -z-10 bg-[#070044] min-h-screen">
//                 {/* Mobile Background */}
//                 <div className="block lg:hidden w-full relative h-full">
//                     <Image
//                         src="/img/home/mobile-bg.png"
//                         alt="Mobile Background"
//                         width={0}
//                         height={0}
//                         sizes="100vw"
//                         className="w-full h-full object-cover"
//                         priority
//                     />
//                 </div>
//                 {/* Desktop Background */}
//                 <div className="hidden lg:block w-full relative h-full">
//                     <Image
//                         src="/img/home/desktop-bg.png"
//                         alt="Desktop Background"
//                         width={0}
//                         height={0}
//                         sizes="100vw"
//                         className="w-full h-auto"
//                         priority
//                     />
//                 </div>
//             </div>

//             {/* Navbar */}
//             <Navbar />

//             {/* Main Content */}
//             <main className="pt-32 lg:pt-40 px-4 lg:px-8 pb-8">
//                 <div className="max-w-7xl mx-auto">
//                     {/* Gallery Title */}
//                     <div
//                         className="text-center heading-font text-white 
//             text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px]
//             mb-8 sm:mb-10 md:mb-12
//             drop-shadow-lg uppercase"
//                     >
//                         My Votes
//                     </div>

//                     {/* Category Filters */}
//                     <div className="flex flex-nowrap justify-start lg:justify-center items-center gap-4 lg:gap-6 mb-8 lg:mb-10 overflow-x-auto pb-2">
//                         <style jsx>{`
//               div::-webkit-scrollbar {
//                 display: none;
//               }
//               div {
//                 -ms-overflow-style: none;
//                 scrollbar-width: none;
//               }
//             `}</style>
//                         {categories.map((category) => (
//                             <button
//                                 key={category.id}
//                                 onClick={() => {
//                                     setSelectedCategory(category.id);
//                                     setSearchCode("");
//                                 }}
//                                 className={`${rye.className} 
//                   px-6 lg:px-8 py-4 lg:py-4
//                   rounded-full 
//                   text-sm lg:text-base 
//                   font-semibold 
//                   transition-all duration-300
//                   tracking-widest uppercase
//                   drop-shadow-md
//                   whitespace-nowrap
//                   flex-shrink-0
//                   ${selectedCategory === category.id
//                                         ? "bg-white text-[#070044]"
//                                         : "bg-transparent border-2 border-white text-white hover:bg-white/20"
//                                     }`}
//                             >
//                                 {category.label}
//                             </button>
//                         ))}
//                     </div>
//                     {/* Voting Info Message */}
//                     {!isVotingLive && (
//                         <div className="text-center mt-40 mb-14">
//                             <h2
//                                 className={`${rye.className} 
//         text-[#FFA53A] 
//         text-xl sm:text-2xl md:text-3xl 
//         tracking-widest uppercase 
//         drop-shadow-md`}
//                             >
//                                 Voting phase starts on 23 Feb
//                             </h2>
//                         </div>
//                     )}

//                     {/* Search Bar */}
//                     <div className="max-w-2xl lg:max-w-3xl mx-auto mb-12 lg:mb-16">
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 placeholder="Enter the code"
//                                 value={searchCode}
//                                 onChange={(e) => setSearchCode(e.target.value)}
//                                 className={`${rye.className} 
//     w-full px-6 lg:px-8 py-4 lg:py-5 
//     rounded-full border-2 border-white 
//     bg-white/10 backdrop-blur-sm 
//     text-white 
//     placeholder-white/70 
//     focus:outline-none focus:ring-2 
//     focus:ring-[#FFA53A] focus:border-[#FFA53A]
//     text-base lg:text-lg
//   `}
//                             />

//                             <div className="absolute right-4 top-1/2 -translate-y-1/2">
//                                 <svg
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="text-white"
//                                 >
//                                     <path
//                                         d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
//                                         stroke="currentColor"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Gallery Grid - Updated Layout */}
//                     {isVotingLive && filteredEntries.length > 0 ? (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//                             {filteredEntries.map((entry) => (
//                                 <div
//                                     key={entry.id}
//                                     className="flex flex-col items-center mx-auto w-full"
//                                 >
//                                     {/* Card Container */}
//                                     <div className="relative w-full max-w-[300px]">

//                                         {/* Frame Container */}
//                                         <div className="relative">
//                                             {/* Outer Frame */}
//                                             <Image
//                                                 src="/img/gallery/gallary-frame.png"
//                                                 alt="Gallery Frame"
//                                                 width={450}
//                                                 height={450}
//                                                 className="w-full h-auto translate-x-1"
//                                                 priority={false}
//                                             />

//                                             {/* Ticket ID - Positioned at top */}
//                                             <h2
//                                                 className={`${rye.className} absolute top-3 left-1/2 -translate-x-1/2 text-[#A53A1F] font-semibold text-lg lg:text-xl tracking-widest uppercase`}
//                                             >
//                                                 {entry.ticket_id}
//                                             </h2>

//                                             {/* Entry Image - Centered */}
//                                             <div className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[71%] h-[69%] p-1 flex items-center justify-center">
//                                                 <img
//                                                     src={entry.image_link}
//                                                     alt={`Entry ${entry.ticket_id}`}
//                                                     className="w-full h-full object-contain"
//                                                 />
//                                             </div>


//                                         </div>

//                                         {/* Tag and Vote Button Container */}
//                                         <div className="relative mt-6 ml-4">
//                                             {/* Tag Background */}
//                                             <Image
//                                                 src="/img/gallery/TagNo.png"
//                                                 alt="Tag Number"
//                                                 width={350}
//                                                 height={60}
//                                                 className="w-full h-auto
//                         hover:scale-95 transition-transform"
//                                             />

//                                             {/* Vote Button */}
//                                             <button onClick={() => handleVote(entry)}
//                                                 className={`${rye.className}
//                                                     text-[#A53A1F]
//                                                     absolute inset-0
//                                                     flex items-center justify-center
//                                                     font-semibold
//                                                     text-lg lg:text-xl xl:text-2xl
//                                                     cursor-pointer
//                                                     -translate-y-1
//                                                 `}>
//                                                 Vote
//                                             </button>


//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     ) : (
//                         <div className="text-center py-12">
//                             <p className="text-white text-lg lg:text-xl body-font">
//                                 No entries found for this category.
//                             </p>
//                         </div>
//                     )}
//                 </div>
//                 {wishlist.length > 0 && (
//                     <div className="fixed bottom-0 left-0 w-full z-50">

//                         {/* collapsed bar */}
//                         <div
//                             onClick={() => setWishlistOpen(!wishlistOpen)}
//                             className="bg-[#FFA53A] text-[#070044] px-6 py-4 cursor-pointer flex justify-between items-center shadow-lg"
//                         >
//                             <span className="font-bold">
//                                 {wishlist.length} Votes Selected
//                             </span>

//                             <span>{wishlistOpen ? "Close" : "View Votes"}</span>
//                         </div>

//                         {/* expandable drawer */}
//                         {wishlistOpen && (
//                             <div className="bg-white max-h-[40vh] overflow-y-auto p-4 flex gap-4 flex-wrap">
//                                 {wishlist.map((item) => (
//                                     <div key={item.id} className="w-20 h-20 relative">
//                                         <img
//                                             src={item.image_link || item.img}
//                                             className="w-full h-full object-cover rounded"
//                                         />

//                                         <button
//                                             onClick={() => removeVote(item.id)}
//                                             className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded"
//                                         >
//                                             ✕
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </main>
//         </div>
//     );
// };

// // export default (Votes);
// export default isNotAuth(Votes);


"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import localFont from "next/font/local";
import isNotAuth from "@/app/components/isNotAuth";
import api from "@/app/api";

const rye = localFont({
  src: "../../public/fonts/Rye-Regular.ttf",
});

const Votes = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("sketching");
  const [searchCode, setSearchCode] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const isVotingLive = true;

  const categories = [
    { id: "sketching", label: "Sketching", eventCode: "SK" },
    { id: "painting", label: "Painting", eventCode: "PA" },
    { id: "photography", label: "Photography", eventCode: "PH" },
    { id: "scripts-and-styles", label: "Scripts and Styles", eventCode: "SS" },
    { id: "themed-category", label: "Themed Category", eventCode: "TC" },
  ];

  // Fetch Entries
  useEffect(() => {
    const fetchEntries = async () => {
      setLoading(true);
      const category = categories.find((c) => c.id === selectedCategory);
      if (!category) return;

      try {
        const res = await api.get(
          `/entry/eventcode/${category.eventCode}?page=1&size=12`
        );
        if (!res.data.error) {
          setEntries(res.data.data.entries);
        }
      } catch (err) {
        console.error("Entries fetch failed:", err);
      }
      setLoading(false);
    };

    fetchEntries();
  }, [selectedCategory]);

  // Fetch Wishlist
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await api.get("/wishlist");
        if (!res.data.error) {
          setWishlist(res.data.data);
        }
      } catch (err) {
        console.error("Wishlist fetch failed:", err);
      }
    };
    fetchWishlist();
  }, []);

  // Filter entries
  const filteredEntries = searchCode
    ? entries.filter((entry) =>
        entry.ticket_id.toLowerCase().includes(searchCode.toLowerCase())
      )
    : entries;

  // Handle Scroll Locking
  useEffect(() => {
    // If voting isn't live OR if the wishlist modal is open, prevent background scroll
    if (!isVotingLive || wishlistOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVotingLive, wishlistOpen]);

  const handleVote = async (entry) => {
    try {
      const res = await api.post("/wishlist", { entry_id: entry.id });
      if (!res.data.error && !wishlist.some((w) => w.id === entry.id)) {
        // Ensure we preserve the ticket_id and image_link for the UI
        setWishlist((prev) => [...prev, entry]);
      }
    } catch (err) {
      console.error("Vote failed:", err);
    }
  };

  const removeVote = async (entryId) => {
    try {
      const res = await api.delete("/wishlist", {
        data: { entry_id: entryId },
      });
      if (!res.data.error) {
        setWishlist((prev) => prev.filter((item) => item.id !== entryId));
        // If wishlist becomes empty, close the drawer
        if (wishlist.length - 1 === 0) setWishlistOpen(false);
      }
    } catch (err) {
      console.error("Remove vote failed:", err);
    }
  };

  // --- GROUPING LOGIC FOR WISHLIST ---
  const groupedWishlist = useMemo(() => {
    const groups = {};
    
    wishlist.forEach((item) => {
      // Extract prefix (e.g., "SK" from "SK001")
      // If your ticket_id format is different, adjust this logic
      const prefix = item.ticket_id ? item.ticket_id.substring(0, 2).toUpperCase() : "OT";
      
      // Find matching category label
      const cat = categories.find(c => c.eventCode === prefix);
      const label = cat ? cat.label : "Other";

      if (!groups[label]) {
        groups[label] = [];
      }
      groups[label].push(item);
    });

    return groups;
  }, [wishlist, categories]);

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

      <main className="pt-32 lg:pt-40 px-4 lg:px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div
            className="text-center heading-font text-white 
            text-[48px] sm:text-[56px] md:text-[80px] lg:text-[100px]
            mb-8 sm:mb-10 md:mb-12
            drop-shadow-lg uppercase"
          >
            My Votes
          </div>

          {/* Categories */}
          <div className="flex flex-nowrap justify-start lg:justify-center items-center gap-4 lg:gap-6 mb-8 lg:mb-10 overflow-x-auto pb-2 scrollbar-hide">
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSearchCode("");
                }}
                className={`${rye.className} 
                  px-6 lg:px-8 py-4 lg:py-4
                  rounded-full 
                  text-sm lg:text-base 
                  font-semibold 
                  transition-all duration-300
                  tracking-widest uppercase
                  drop-shadow-md
                  whitespace-nowrap
                  flex-shrink-0
                  ${
                    selectedCategory === category.id
                      ? "bg-white text-[#070044]"
                      : "bg-transparent border-2 border-white text-white hover:bg-white/20"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {!isVotingLive && (
            <div className="text-center mt-40 mb-14">
              <h2
                className={`${rye.className} text-[#FFA53A] text-xl sm:text-2xl md:text-3xl tracking-widest uppercase drop-shadow-md`}
              >
                Voting phase starts on 23 Feb
              </h2>
            </div>
          )}

          {/* Search */}
          <div className="max-w-2xl lg:max-w-3xl mx-auto mb-12 lg:mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter the code"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                className={`${rye.className} 
                  w-full px-6 lg:px-8 py-4 lg:py-5 
                  rounded-full border-2 border-white 
                  bg-white/10 backdrop-blur-sm 
                  text-white 
                  placeholder-white/70 
                  focus:outline-none focus:ring-2 
                  focus:ring-[#FFA53A] focus:border-[#FFA53A]
                  text-base lg:text-lg`}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Grid */}
          {isVotingLive && filteredEntries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="flex flex-col items-center mx-auto w-full"
                >
                  <div className="relative w-full max-w-[300px]">
                    <div className="relative">
                      <Image
                        src="/img/gallery/gallary-frame.png"
                        alt="Gallery Frame"
                        width={450}
                        height={450}
                        className="w-full h-auto translate-x-1"
                        priority={false}
                      />
                      <h2
                        className={`${rye.className} absolute top-3 left-1/2 -translate-x-1/2 text-[#A53A1F] font-semibold text-lg lg:text-xl tracking-widest uppercase`}
                      >
                        {entry.ticket_id}
                      </h2>
                      <div className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[71%] h-[69%] p-1 flex items-center justify-center">
                        <img
                          src={entry.image_link}
                          alt={`Entry ${entry.ticket_id}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="relative mt-6 ml-4">
                      <Image
                        src="/img/gallery/TagNo.png"
                        alt="Tag Number"
                        width={350}
                        height={60}
                        className="w-full h-auto hover:scale-95 transition-transform"
                      />
                      <button
                        onClick={() => handleVote(entry)}
                        className={`${rye.className} text-[#A53A1F] absolute inset-0 flex items-center justify-center font-semibold text-lg lg:text-xl xl:text-2xl cursor-pointer -translate-y-1`}
                      >
                        Vote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white text-lg lg:text-xl body-font">
                No entries found for this category.
              </p>
            </div>
          )}
        </div>

        {/* --- ZOMATO STYLE CART / WISHLIST --- */}
        {wishlist.length > 0 && (
          <>
            {/* Dark Backdrop for Modal */}
            {wishlistOpen && (
              <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
                onClick={() => setWishlistOpen(false)} 
              />
            )}

            {/* Bottom Interaction Area */}
            <div className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-4">
              
              {/* Collapsed Bar (The "Cart" Button) */}
              {!wishlistOpen && (
                <div
                  onClick={() => setWishlistOpen(true)}
                  className="max-w-2xl mx-auto bg-[#FFA53A] rounded-xl shadow-[0_10px_40px_rgba(255,165,58,0.4)] 
                  p-4 flex justify-between items-center cursor-pointer 
                  transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex flex-col">
                    <span className={`${rye.className} text-[#070044] text-xs uppercase tracking-widest`}>
                      Your Selections
                    </span>
                    <span className="font-bold text-[#070044] text-lg">
                      {wishlist.length} Entries Selected
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#070044] px-4 py-2 rounded-lg">
                    <span className="text-white font-semibold text-sm">View Votes</span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      className="text-white transform -rotate-90"
                    >
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              )}

              {/* Expanded Drawer */}
              <div
                className={`fixed left-0 right-0 bottom-0 bg-white rounded-t-3xl shadow-2xl transition-transform duration-500 ease-in-out transform
                ${wishlistOpen ? "translate-y-0" : "translate-y-[110%]"}`}
                style={{ maxHeight: "85vh" }}
              >
                {/* Drawer Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white sticky top-0 z-10 rounded-t-3xl">
                  <div>
                    <h3 className={`${rye.className} text-2xl text-[#070044]`}>
                      Your Votes
                    </h3>
                    <p className="text-gray-500 text-sm">Total {wishlist.length} items</p>
                  </div>
                  <button 
                    onClick={() => setWishlistOpen(false)}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#070044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>

                {/* Drawer Content (Scrollable) */}
                <div className="overflow-y-auto p-6 pb-24" style={{ maxHeight: "calc(85vh - 80px)" }}>
                  
                  {/* Iterate over Categories */}
                  {Object.keys(groupedWishlist).map((categoryLabel) => (
                    <div key={categoryLabel} className="mb-8 last:mb-0">
                      
                      {/* Category Title */}
                      <div className="flex items-center gap-4 mb-4">
                        <h4 className={`${rye.className} text-lg text-[#FFA53A] uppercase tracking-wide`}>
                          {categoryLabel}
                        </h4>
                        <div className="h-[1px] bg-gray-200 flex-1"></div>
                      </div>

                      {/* Items Grid for this Category */}
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                        {groupedWishlist[categoryLabel].map((item) => (
                          <div key={item.id} className="group relative flex flex-col gap-2">
                            {/* Image Container */}
                            <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                              <img
                                src={item.image_link || item.img}
                                className="w-full h-full object-cover"
                                alt={item.ticket_id}
                              />
                              {/* Remove Button Overlay */}
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                  onClick={() => removeVote(item.id)}
                                  className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transform hover:scale-110 transition-all"
                                >
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                              </div>
                            </div>
                            
                            {/* Ticket ID */}
                            <span className="text-xs font-bold text-center text-[#070044] bg-gray-100 rounded py-1">
                              {item.ticket_id}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {/* Empty State Safety Check */}
                  {wishlist.length === 0 && (
                    <div className="text-center text-gray-400 py-10">
                      No votes selected yet.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default isNotAuth(Votes);