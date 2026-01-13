// // "use client";

// // import { useEffect, useState } from "react";
// // import Image from "next/image";
// // import api from "@/app/api";
// // import { toast } from "sonner";
// // import { useRouter } from "next/navigation";
// // import isNotAuth from "@/app/components/isNotAuth";

// // const Cart = () => {
// //   const [cart, setCart] = useState([]);
// //   const [amount, setAmount] = useState(0);
// //   const router = useRouter();

// //   const getCart = async () => {
// //     try {
// //       const response = await api.get(`/cart/`);
// //       setCart(response.data.data);
// //     } catch (err) {
// //       console.log(err.response.data.message);
// //     }
// //   };

// //   const getAmount = async () => {
// //     try {
// //       const response = await api.get(`/payment/amount`);
// //       setAmount(response.data.data);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   useEffect(() => {
// //     getCart();
// //     getAmount();
// //   }, []);

// //   const handleDelete = async (eventId, price) => {
// //     try {
// //       const response = await api.delete(`/cart/`, {
// //         data: { event_id: eventId },
// //       });
// //       toast.success(response.data.message);
// //       setCart((prev) => prev.filter((item) => item.id !== eventId));
// //       setAmount((prev) => prev - price);
// //     } catch (err) {
// //       console.log(err);
// //       toast.error(err.response.data.message);
// //     }
// //   };

// //   const handleEmpty = async () => {
// //     try {
// //       const response = await api.delete(`/cart/empty`);
// //       toast.success(response.data.message);
// //       setCart([]);
// //       setAmount(0);
// //     } catch (err) {
// //       console.log(err);
// //       toast.error(err.response.data.message);
// //     }
// //   };

// //   const handleProceed = async () => {
// //     if (amount > 0) {
// //       router.push("/payment");
// //     } else {
// //       toast.error("Cart is Empty!");
// //     }
// //   };

// //   return (
// //     <div className="pt-3 pb-20 min-h-screen p-4 flex justify-center bg-[url('/img/common/general-desktop-bg.png')]">
// //       <div className="bg-[url('/img/common/general-desktop-bg.png')] min-w-[320px] mt-4 sm:mt-16 w-auto md:p-4 sm:w-[800px]">
// //         <div className="flex flex-col bg-[url('/img/cart/cart-bg-26.png')] h-[400px] bg-cover bg-center bg-no-repeat mb-8 md:h-[970px] md:mx-auto md:max-w-full px-4 lg:px-5 my-5 mt-24 md:mt-10">
// //           <div className="md:pt-24 sm:mt-10 pt-12 md:text-5xl text-2xl text-center heading-font">
// //             CART
// //           </div>

// //           <div className="grid grid-cols-6 sm:grid-cols-5 md:mt-0 md:mx-28 px-5 md:py-5 gap-2">
// //             <div className="font-extrabold sm:text-2xl text-lg body-font col-span-3">
// //               Items
// //             </div>
// //             <div className="font-extrabold sm:text-2xl text-lg body-font col-span-2 sm:col-span-1">
// //               Price
// //             </div>

// //             {/* Scrollable container for items */}
// //             <div className="col-span-6 sm:col-span-5 max-h-[150px] md:max-h-[400px] overflow-y-auto pr-2">
// //               {cart &&
// //                 cart.map((item) => (
// //                   <div
// //                     key={item.id}
// //                     className="grid grid-cols-3 sm:grid-cols-3 items-center bg-[#FFDDB0] p-2 rounded-lg md:py-1 md:px-2 md:pb-2 description-font mb-2"
// //                   >
// //                     <div className="text-xs sm:text-base col-span-2 body-font">
// //                       {item.name}
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <div className="font-semibold text-xs sm:text-lg">
// //                         Rs. {item.price}/-
// //                       </div>
// //                       <Image
// //                         onClick={() => handleDelete(item.id, item.price)}
// //                         width={25}
// //                         height={25}
// //                         src="/img/cart/cancel-26.png"
// //                         alt="cancel"
// //                         className="cursor-pointer"
// //                       />
// //                     </div>
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //           <div className="flex flex-col items-center">
// //             <h2 className="font-bold text-base sm:text-2xl text-center body-font my-1 sm:my-7">
// //               Total Amount Rs. {amount}/-
// //             </h2>

// //             <div className="flex pt-2 md:pt-4 pb-8 mx-auto gap-5 description-font">
// //               <button
// //                 onClick={handleEmpty}
// //                 className="bg-[#9C5E25] py-1 sm:px-5 px-2 text-xs sm:text-2xl shadow-lg text-[#FDEEAE] border border-black transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#7d4d20] hover:shadow-xl hover:text-[#FFF5CC]"
// //               >
// //                 Delete All
// //               </button>
// //               <button
// //                 onClick={handleProceed}
// //                 className="bg-[#9C5E25] py-1 sm:px-5 px-2 shadow-lg text-xs sm:text-2xl text-[#FDEEAE] border border-black transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#7d4d20] hover:shadow-xl hover:text-[#FFF5CC]"
// //               >
// //                 Proceed
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default isNotAuth(Cart);

// //2026 code

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import api from "@/app/api";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// // import isNotAuth from "@/app/components/isNotAuth";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [amount, setAmount] = useState(0);
//   const router = useRouter();

//   const getCart = async () => {
//     try {
//       const response = await api.get(`/cart/`);
//       setCart(response.data.data);
//     } catch (err) {
//       console.log(err.response?.data?.message);
//     }
//   };

//   const getAmount = async () => {
//     try {
//       const response = await api.get(`/payment/amount`);
//       setAmount(response.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getCart();
//     getAmount();
//   }, []);

//   const handleDelete = async (eventId, price) => {
//     try {
//       const response = await api.delete(`/cart/`, {
//         data: { event_id: eventId },
//       });
//       toast.success(response.data.message);
//       setCart((prev) => prev.filter((item) => item.id !== eventId));
//       setAmount((prev) => prev - price);
//     } catch (err) {
//       console.log(err);
//       toast.error(err.response?.data?.message || "Error deleting item");
//     }
//   };

//   const handleEmpty = async () => {
//     try {
//       const response = await api.delete(`/cart/empty`);
//       toast.success(response.data.message);
//       setCart([]);
//       setAmount(0);
//     } catch (err) {
//       console.log(err);
//       toast.error(err.response?.data?.message || "Error emptying cart");
//     }
//   };

//   const handleProceed = async () => {
//     if (amount > 0) {
//       router.push("/payment");
//     } else {
//       toast.error("Cart is Empty!");
//     }
//   };

//   return (
//     // Added overflow-hidden to prevent singers from causing scrollbars
//     <div className="relative min-h-screen w-full overflow-hidden bg-[#1a0b40] flex justify-center items-center py-10 md:py-0">
//       {/* --- BACKGROUND IMAGE --- */}

//       {/* 1. DESKTOP BG: Visible only on md and up */}
//       <div className="hidden md:block absolute inset-0 z-0">
//         <Image
//           src="/img/common/general-desktop-bg.png"
//           alt="Desktop Background"
//           fill
//           priority // Loads image faster since it's the LCP (Largest Contentful Paint)
//           className="object-cover" // Ensures image fills screen without distortion (will crop edges)
//           quality={90}
//         />
//       </div>

//       {/* 2. MOBILE BG: Hidden on md and up (FIXED HERE) */}
//       <div className="block md:hidden absolute inset-0 z-0">
//         <Image
//           src="/img/common/general-mobile-bg.png"
//           alt="Mobile Background"
//           fill
//           priority
//           className="object-cover"
//           quality={90}
//         />
//       </div>

//       {/* --- DESKTOP DECORATIONS --- */}
//       <div className="hidden md:block">
//         {/* Bottom Left (Dancer) */}
//         <div className="absolute bottom-0 left-0 z-10 w-90 h-95">
//           <Image
//             src="/img/cart/cart-bottom-left-singer-desktop.png"
//             alt="Dancer"
//             fill
//             className="object-contain object-bottom"
//           />
//         </div>

//         {/* Bottom Right (Guitar Player) */}
//         {/* Adjusted size and position to fix gap issues */}
//         <div className="absolute bottom-0 right-0 z-10 w-80 h-80">
//           <Image
//             src="/img/cart/cart-bottom-right-singer-desktop.png"
//             alt="Guitarist"
//             fill
//             className="object-contain object-bottom"
//           />
//         </div>
//       </div>

//       {/* --- MAIN CONTENT WRAPPER (Flex Column) --- */}
//       {/* This wrapper keeps the Card and Buttons vertically stacked and centered */}
//       <div className="relative z-20 flex flex-col items-center gap-5 w-full translate-y-[5%]">
//         {/* --- CENTRAL CART CARD --- */}
//         <div className="relative w-[80%] min-h-[400px] md:w-[500px] md:min-h-[350px] flex flex-col items-center justify-center p-6">
//           {/* Cart Background Image */}
//           <div className="absolute inset-0 z-0">
//             <Image
//               src="/img/cart/cart-bg-26.png"
//               alt="Cart Card"
//               fill
//               className="object-fill rounded-3xl"
//             />
//           </div>

//           {/* Mobile Decorations (Hidden on Desktop) */}
//           <div className="md:hidden">
//             <div className="absolute -top-6 -right-4 z-30 w-24 h-24">
//               <Image
//                 src="/img/cart/cart-mobile-bird.png"
//                 alt="Decor"
//                 width={100}
//                 height={100}
//               />
//             </div>
//             <div className="absolute -bottom-6 -left-4 z-30 w-24 h-24">
//               <Image
//                 src="/img/cart/cart-mobile-singer.png"
//                 alt="Decor"
//                 width={100}
//                 height={100}
//               />
//             </div>
//           </div>

//           {/* Cart Internal Content */}
//           <div className="relative z-10 w-full h-full flex flex-col px-4 py-8 pb-2">
//             <h1 className="text-4xl md:text-6xl text-[#1f4e3d] text-center font-bold tracking-widest heading-font mb-6 drop-shadow-sm uppercase">
//               Cart
//             </h1>

//             {/* Scrollable Items */}
//             <div className="flex-grow w-full max-h-[250px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
//               {cart && cart.length > 0 ? (
//                 cart.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center justify-between border-b border-[#1f4e3d]/20 pb-2"
//                   >
//                     <div className="flex items-center gap-4">
//                       {/* Icons */}
//                       <div className="w-8 h-8 md:w-10 md:h-10 relative shrink-0">
//                         <Image
//                           src="/img/cart/icon-bells.png"
//                           alt="item"
//                           fill
//                           className="object-contain"
//                         />
//                       </div>
//                       <span className="text-[#1f4e3d] text-lg md:text-xl font-semibold body-font truncate max-w-[120px] md:max-w-[200px]">
//                         {item.name}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <span className="text-[#0e7490] font-bold text-lg md:text-xl">
//                         Rs. {item.price}
//                       </span>
//                       <button
//                         onClick={() => handleDelete(item.id, item.price)}
//                         className="hover:scale-110 transition-transform"
//                       >
//                         <Image
//                           width={24}
//                           height={24}
//                           src="/img/cart/cancel-icon.png"
//                           alt="Remove"
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center text-[#1f4e3d] text-xl mt-10 opacity-70">
//                   Your cart is empty.
//                 </div>
//               )}
//             </div>

//             <div className="w-full border-t-2 border-dotted border-[#1f4e3d]/40 my-6"></div>

//             <div className="text-center mb-4">
//               <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] body-font">
//                 Total : Rs. {amount}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* --- ACTION BUTTONS (Moved Here) --- */}
//         <div className="flex justify-center mt-1 gap-6 md:gap-10">
//           {/* Delete All Button */}
//           <button
//             onClick={handleEmpty}
//             className="relative w-36 h-12 md:w-44 md:h-14 group hover:scale-105 transition-transform"
//           >
//             <Image
//               src="/img/cart/cart-btns-bg.png"
//               alt="bg"
//               fill
//               className="absolute inset-0 object-contain"
//             />
//             <div className="relative z-10 flex items-center justify-center gap-2 h-full pb-1">
//               <Image
//                 src="/img/cart/button-chilly.png"
//                 width={20}
//                 height={20}
//                 alt="icon"
//               />
//               <span className="text-[#5c3a21] font-bold text-lg heading-font">
//                 Delete All
//               </span>
//             </div>
//           </button>

//           {/* Proceed Button */}
//           <button
//             onClick={handleProceed}
//             className="relative w-36 h-12 md:w-44 md:h-14 group hover:scale-105 transition-transform"
//           >
//             <Image
//               src="/img/cart/cart-btns-bg.png"
//               alt="bg"
//               fill
//               className="absolute inset-0 object-contain"
//             />
//             <div className="relative z-10 flex items-center justify-center gap-2 h-full pb-1">
//               <Image
//                 src="/img/cart/button-flower.png"
//                 width={20}
//                 height={20}
//                 alt="icon"
//               />
//               <span className="text-[#5c3a21] font-bold text-lg heading-font">
//                 Proceed
//               </span>
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

//dummy data testing
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import api from "@/app/api";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// // import isNotAuth from "@/app/components/isNotAuth";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [amount, setAmount] = useState(0);
//   const router = useRouter();

//   // --- DUMMY DATA FOR TESTING ---
//   useEffect(() => {
//     // This will run on mount. If you have a real API, this might get overwritten,
//     // but for testing UI without a backend, this populates the cart.
//     const dummyItems = Array.from({ length: 10 }).map((_, i) => ({
//       id: i + 1,
//       name: `Test Item ${i + 1}`,
//       price: (i + 1) * 100,
//     }));

//     // Only set dummy data if cart is empty (so real API calls take precedence if they work)
//     if (cart.length === 0) {
//       setCart(dummyItems);
//       setAmount(dummyItems.reduce((acc, item) => acc + item.price, 0));
//     }
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const getCart = async () => {
//     try {
//       const response = await api.get(`/cart/`);
//       if (response.data.data && response.data.data.length > 0) {
//         setCart(response.data.data);
//       }
//     } catch (err) {
//       console.log(err.response?.data?.message);
//     }
//   };

//   const getAmount = async () => {
//     try {
//       const response = await api.get(`/payment/amount`);
//       if (response.data.data) {
//         setAmount(response.data.data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getCart();
//     getAmount();
//   }, []);

//   const handleDelete = async (eventId, price) => {
//     // Optimistic update for testing UI feel
//     setCart((prev) => prev.filter((item) => item.id !== eventId));
//     setAmount((prev) => prev - price);
//     toast.success("Item removed (Demo)");

//     try {
//       // Real API call
//       // const response = await api.delete(`/cart/`, {
//       //   data: { event_id: eventId },
//       // });
//       // toast.success(response.data.message);
//     } catch (err) {
//       console.log(err);
//       toast.error(err.response?.data?.message || "Error deleting item");
//     }
//   };

//   const handleEmpty = async () => {
//     setCart([]);
//     setAmount(0);
//     toast.success("Cart emptied (Demo)");

//     try {
//       // const response = await api.delete(`/cart/empty`);
//       // toast.success(response.data.message);
//     } catch (err) {
//       console.log(err);
//       toast.error(err.response?.data?.message || "Error emptying cart");
//     }
//   };

//   const handleProceed = async () => {
//     if (amount > 0) {
//       router.push("/payment");
//     } else {
//       toast.error("Cart is Empty!");
//     }
//   };

//   return (
//     // Added overflow-hidden to prevent singers from causing scrollbars
//     <div className="relative min-h-screen w-full overflow-hidden bg-[#1a0b40] flex justify-center items-center py-10 md:py-0">
//       {/* --- BACKGROUND IMAGE --- */}

//       {/* 1. DESKTOP BG: Visible only on md and up */}
//       <div className="hidden md:block absolute inset-0 z-0">
//         <Image
//           src="/img/common/general-desktop-bg.png"
//           alt="Desktop Background"
//           fill
//           priority
//           className="object-cover"
//           quality={90}
//         />
//       </div>

//       {/* 2. MOBILE BG: Hidden on md and up */}
//       <div className="block md:hidden absolute inset-0 z-0">
//         <Image
//           src="/img/common/general-mobile-bg.png"
//           alt="Mobile Background"
//           fill
//           priority
//           className="object-cover"
//           quality={90}
//         />
//       </div>

//       {/* --- DESKTOP DECORATIONS --- */}
//       <div className="hidden md:block">
//         {/* Bottom Left (Dancer) */}
//         <div className="absolute bottom-0 left-0 z-10 w-90 h-95">
//           <Image
//             src="/img/cart/cart-bottom-left-singer-desktop.png"
//             alt="Dancer"
//             fill
//             className="object-contain object-bottom"
//           />
//         </div>

//         {/* Bottom Right (Guitar Player) */}
//         <div className="absolute bottom-0 right-0 z-10 w-80 h-80">
//           <Image
//             src="/img/cart/cart-bottom-right-singer-desktop.png"
//             alt="Guitarist"
//             fill
//             className="object-contain object-bottom"
//           />
//         </div>
//       </div>

//       {/* --- MAIN CONTENT WRAPPER (Flex Column) --- */}
//       {/* This wrapper keeps the Card and Buttons vertically stacked and centered */}
//       <div className="relative z-20 flex flex-col items-center gap-5 w-full translate-y-[5%]">
//         {/* --- CENTRAL CART CARD --- */}
//         <div className="relative w-[80%] max-h-[490px] md:w-[500px] md:min-h-[500px] flex flex-col items-center justify-center p-6">
//           {/* Cart Background Image */}
//           <div className="absolute inset-0 z-0">
//             <Image
//               src="/img/cart/cart-bg-26.png"
//               alt="Cart Card"
//               fill
//               className="object-fill rounded-3xl"
//             />
//           </div>

//           {/* Mobile Decorations (Hidden on Desktop) */}
//           <div className="md:hidden">
//             <div className="absolute -top-6 -right-4 z-30 w-24 h-24">
//               <Image
//                 src="/img/cart/cart-mobile-bird.png"
//                 alt="Decor"
//                 width={100}
//                 height={100}
//               />
//             </div>
//             <div className="absolute -bottom-6 -left-4 z-30 w-24 h-24">
//               <Image
//                 src="/img/cart/cart-mobile-singer.png"
//                 alt="Decor"
//                 width={100}
//                 height={100}
//               />
//             </div>
//           </div>

//           {/* Cart Internal Content */}
//           <div className="relative z-10 w-full h-full flex flex-col mt-2 px-1 md:px-4 py-4 pb-4">
//             <h1 className="text-4xl md:text-6xl text-[#1f4e3d] text-center tracking-widest heading-font mb-6 drop-shadow-sm">
//               CART
//             </h1>

//             {/* Scrollable Items */}
//             <div className="flex-grow w-full max-h-[300px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
//               {cart && cart.length > 0 ? (
//                 cart.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center justify-between border-b border-[#1f4e3d]/20 pb-2"
//                   >
//                     <div className="flex items-center gap-4">
//                       {/* Icons */}
//                       <div className="w-8 h-8 md:w-10 md:h-10 relative shrink-0">
//                         {/* Example Logic: Alternate icons based on ID for visual variety */}
//                         {item.id % 4 === 0 && (
//                           <Image
//                             src="/img/cart/icon-bells.png"
//                             alt="item"
//                             fill
//                             className="object-contain"
//                           />
//                         )}
//                         {item.id % 4 === 1 && (
//                           <Image
//                             src="/img/cart/icon-cactus.png"
//                             alt="item"
//                             fill
//                             className="object-contain"
//                           />
//                         )}
//                         {item.id % 4 === 2 && (
//                           <Image
//                             src="/img/cart/icon-guitar.png"
//                             alt="item"
//                             fill
//                             className="object-contain"
//                           />
//                         )}
//                         {item.id % 4 === 3 && (
//                           <Image
//                             src="/img/cart/icon-cap.png"
//                             alt="item"
//                             fill
//                             className="object-contain"
//                           />
//                         )}
//                       </div>
//                       <span className="body-font text-[#1f4e3d] text-lg md:text-xl font-semibold body-font truncate max-w-[120px] md:max-w-[200px]">
//                         {item.name}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <span className=" body-font text-[#0e7490] font-bold text-lg md:text-xl">
//                         Rs. {item.price}
//                       </span>
//                       <button
//                         onClick={() => handleDelete(item.id, item.price)}
//                         className="hover:scale-110 transition-transform"
//                       >
//                         <Image
//                           width={24}
//                           height={24}
//                           src="/img/cart/cancel-icon.png"
//                           alt="Remove"
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="body-font text-center text-[#1f4e3d] text-xl mt-10 opacity-70">
//                   Your cart is empty.
//                 </div>
//               )}
//             </div>

//             <div className="w-full border-t-2 border-dotted border-[#1f4e3d]/40 my-6"></div>

//             <div className="text-center mb-4">
//               <h2 className="body-font text-2xl md:text-3xl font-extrabold text-[#1a1a1a] body-font">
//                 Total : Rs. {amount}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* --- ACTION BUTTONS --- */}
//         <div className="flex justify-center mt-1 gap-6 md:gap-10">
//           {/* Delete All Button */}
//           <button
//             onClick={handleEmpty}
//             className="relative w-36 h-12 md:w-44 md:h-14 group hover:scale-105 transition-transform"
//           >
//             <Image
//               src="/img/cart/cart-btns-bg.png"
//               alt="bg"
//               fill
//               className="absolute inset-0 object-contain"
//             />
//             <div className="relative z-10 flex items-center justify-center gap-2 h-full pb-1">
//               <Image
//                 src="/img/cart/button-chilly.png"
//                 width={20}
//                 height={20}
//                 alt="icon"
//               />
//               <span className="sub-heading-font text-[#5c3a21] font-bold text-lg heading-font">
//                 Delete All
//               </span>
//             </div>
//           </button>

//           {/* Proceed Button */}
//           <button
//             onClick={handleProceed}
//             className="relative w-36 h-12 md:w-44 md:h-14 group hover:scale-105 transition-transform"
//           >
//             <Image
//               src="/img/cart/cart-btns-bg.png"
//               alt="bg"
//               fill
//               className="absolute inset-0 object-contain"
//             />
//             <div className="relative z-10 flex items-center justify-center gap-2 h-full pb-1">
//               <Image
//                 src="/img/cart/button-flower.png"
//                 width={20}
//                 height={20}
//                 alt="icon"
//               />
//               <span className="sub-heading-font text-[#5c3a21] font-bold text-lg heading-font">
//                 Proceed
//               </span>
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import api from "@/app/api";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// // import isNotAuth from "@/app/components/isNotAuth";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [amount, setAmount] = useState(0);
//   const router = useRouter();

//   // --- DUMMY DATA FOR TESTING ---
//   useEffect(() => {
//     const dummyItems = Array.from({ length: 10 }).map((_, i) => ({
//       id: i + 1,
//       name: `Test Item ${i + 1}`,
//       price: (i + 1) * 100,
//     }));

//     if (cart.length === 0) {
//       setCart(dummyItems);
//       setAmount(dummyItems.reduce((acc, item) => acc + item.price, 0));
//     }
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const getCart = async () => {
//     try {
//       const response = await api.get(`/cart/`);
//       if (response.data.data && response.data.data.length > 0) {
//         setCart(response.data.data);
//       }
//     } catch (err) {
//       console.log(err.response?.data?.message);
//     }
//   };

//   const getAmount = async () => {
//     try {
//       const response = await api.get(`/payment/amount`);
//       if (response.data.data) {
//         setAmount(response.data.data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getCart();
//     getAmount();
//   }, []);

//   const handleDelete = async (eventId, price) => {
//     setCart((prev) => prev.filter((item) => item.id !== eventId));
//     setAmount((prev) => prev - price);
//     toast.success("Item removed (Demo)");
//   };

//   const handleEmpty = async () => {
//     setCart([]);
//     setAmount(0);
//     toast.success("Cart emptied (Demo)");
//   };

//   const handleProceed = async () => {
//     if (amount > 0) {
//       router.push("/payment");
//     } else {
//       toast.error("Cart is Empty!");
//     }
//   };

//   return (
//     // UPDATED CONTAINER:
//     // 1. Mobile/MD kept exactly as before: 'flex justify-center items-center py-10 md:py-0'
//     // 2. LG (Laptop) ONLY: 'lg:items-start lg:pt-40' to push content down from the fixed navbar
//     <div className="relative min-h-screen w-full overflow-hidden bg-[#1a0b40] flex justify-center items-center py-10 md:py-0 lg:items-start lg:pt-30">
//       {/* --- BACKGROUND IMAGE --- */}

//       {/* 1. DESKTOP BG: Visible only on md and up */}
//       <div className="hidden md:block absolute inset-0 z-0">
//         <Image
//           src="/img/common/desktop-bg.png"
//           alt="Desktop Background"
//           fill
//           priority
//           className="object-cover"
//           quality={90}
//         />
//       </div>

//       {/* 2. MOBILE BG: Hidden on md and up */}
//       <div className="block md:hidden absolute inset-0 z-0">
//         <Image
//           src="/img/common/general-mobile-bg.png"
//           alt="Mobile Background"
//           fill
//           priority
//           className="object-cover"
//           quality={90}
//         />
//       </div>

//       {/* --- DESKTOP DECORATIONS --- */}
//       <div className="hidden md:block">
//         {/* Bottom Left (Dancer) */}
//         {/* LG UPDATE: Added lg:w-72 lg:h-[350px] to scale down on laptop screens */}
//         <div className="absolute bottom-0 left-0 z-10 w-90 h-95 lg:w-72 lg:h-[350px] xl:w-[360px] xl:h-[380px]">
//           <Image
//             src="/img/cart/cart-bottom-left-singer-desktop.png"
//             alt="Dancer"
//             fill
//             className="object-contain object-bottom"
//           />
//         </div>

//         {/* Bottom Right (Guitar Player) */}
//         {/* LG UPDATE: Added lg:w-72 lg:h-72 to scale down on laptop screens */}
//         <div className="absolute bottom-0 right-0 z-10 w-80 h-80 lg:w-72 lg:h-72 xl:w-96 xl:h-96">
//           <Image
//             src="/img/cart/cart-bottom-right-singer-desktop.png"
//             alt="Guitarist"
//             fill
//             className="object-contain object-bottom"
//           />
//         </div>
//       </div>

//       {/* --- MAIN CONTENT WRAPPER (Flex Column) --- */}
//       {/* LG UPDATE: Added lg:translate-y-0. 
//           We remove the 5% offset on LG because we are using padding-top (pt-40) on the parent instead.
//           Mobile keeps translate-y-[5%] */}
//       <div className="relative z-20 flex flex-col items-center gap-5 w-full translate-y-[5%] lg:translate-y-0">
//         {/* --- CENTRAL CART CARD --- */}
//         {/* LG UPDATE: Added lg:w-[450px] lg:min-h-[450px] to make card smaller on 1024px */}
//         <div className="relative w-[80%] max-h-[490px] md:w-[500px] md:min-h-[500px] lg:w-[450px] lg:min-h-[450px] xl:w-[500px] xl:min-h-[500px] flex flex-col items-center justify-center p-6">
//           {/* Cart Background Image */}
//           <div className="absolute inset-0 z-0">
//             <Image
//               src="/img/cart/cart-bg-26.png"
//               alt="Cart Card"
//               fill
//               className="object-fill rounded-3xl"
//             />
//           </div>

//           {/* Mobile Decorations (Hidden on Desktop) */}
//           <div className="md:hidden">
//             <div className="absolute -top-6 -right-4 z-30 w-24 h-24">
//               <Image
//                 src="/img/cart/cart-mobile-bird.png"
//                 alt="Decor"
//                 width={100}
//                 height={100}
//               />
//             </div>
//             <div className="absolute -bottom-6 -left-4 z-30 w-24 h-24">
//               <Image
//                 src="/img/cart/cart-mobile-singer.png"
//                 alt="Decor"
//                 width={100}
//                 height={100}
//               />
//             </div>
//           </div>

//           {/* Cart Internal Content */}
//           <div className="relative z-10 w-full h-full flex flex-col mt-2 px-1 md:px-4 py-4 pb-4">
//             <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl text-[#1f4e3d] text-center tracking-widest heading-font mb-6 drop-shadow-sm">
//               CART
//             </h1>

//             {/* Scrollable Items */}
//             <div className="flex-grow w-full max-h-[300px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
//               {cart && cart.length > 0 ? (
//                 cart.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center justify-between border-b border-[#1f4e3d]/20 pb-2"
//                   >
//                     <div className="flex items-center gap-4">
//                       {/* Icons */}
//                       <div className="w-8 h-8 md:w-10 md:h-10 relative shrink-0">
//                         {item.id % 4 === 0 && (
//                           <Image
//                             src="/img/cart/icon-bells.png"
//                             alt="item"
//                             fill
//                             className="object-contain"
//                           />
//                         )}
//                         {item.id % 4 === 1 && (
//                           <Image
//                             src="/img/cart/icon-cactus.png"
//                             alt="item"
//                             fill
//                             className="object-contain"
//                           />
//                         )}
//                         {item.id % 4 === 2 && (
//                           <Image
//                             src="/img/cart/icon-guitar.png"
//                             alt="item"
//                             fill
//                             className="object-contain"
//                           />
//                         )}
//                         {item.id % 4 === 3 && (
//                           <Image
//                             src="/img/cart/icon-cap.png"
//                             alt="item"
//                             fill
//                             className="object-contain"
//                           />
//                         )}
//                       </div>
//                       <span className="body-font text-[#1f4e3d] text-lg md:text-xl lg:text-lg xl:text-xl font-semibold body-font truncate max-w-[120px] md:max-w-[200px]">
//                         {item.name}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <span className=" body-font text-[#0e7490] font-bold text-lg md:text-xl lg:text-lg xl:text-xl">
//                         Rs. {item.price}
//                       </span>
//                       <button
//                         onClick={() => handleDelete(item.id, item.price)}
//                         className="hover:scale-110 transition-transform"
//                       >
//                         <Image
//                           width={24}
//                           height={24}
//                           src="/img/cart/cancel-icon.png"
//                           alt="Remove"
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="body-font text-center text-[#1f4e3d] text-xl mt-10 opacity-70">
//                   Your cart is empty.
//                 </div>
//               )}
//             </div>

//             <div className="w-full border-t-2 border-dotted border-[#1f4e3d]/40 my-6"></div>

//             <div className="text-center mb-4">
//               <h2 className="body-font text-2xl md:text-3xl font-extrabold text-[#1a1a1a] body-font">
//                 Total : Rs. {amount}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* --- ACTION BUTTONS --- */}
//         <div className="flex justify-center mt-1 gap-6 md:gap-10">
//           <button
//             onClick={handleEmpty}
//             className="relative w-36 h-12 md:w-44 md:h-14 lg:w-40 lg:h-12 xl:w-44 xl:h-14 group hover:scale-105 transition-transform"
//           >
//             <Image
//               src="/img/cart/cart-btns-bg.png"
//               alt="bg"
//               fill
//               className="absolute inset-0 object-contain"
//             />
//             <div className="relative z-10 flex items-center justify-center gap-2 h-full pb-1">
//               <Image
//                 src="/img/cart/button-chilly.png"
//                 width={20}
//                 height={20}
//                 alt="icon"
//               />
//               <span className="sub-heading-font text-[#5c3a21] font-bold text-lg heading-font">
//                 Delete All
//               </span>
//             </div>
//           </button>

//           <button
//             onClick={handleProceed}
//             className="relative w-36 h-12 md:w-44 md:h-14 lg:w-40 lg:h-12 xl:w-44 xl:h-14 group hover:scale-105 transition-transform"
//           >
//             <Image
//               src="/img/cart/cart-btns-bg.png"
//               alt="bg"
//               fill
//               className="absolute inset-0 object-contain"
//             />
//             <div className="relative z-10 flex items-center justify-center gap-2 h-full pb-1">
//               <Image
//                 src="/img/cart/button-flower.png"
//                 width={20}
//                 height={20}
//                 alt="icon"
//               />
//               <span className="sub-heading-font text-[#5c3a21] font-bold text-lg heading-font">
//                 Proceed
//               </span>
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/app/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import isNotAuth from "@/app/components/isNotAuth";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState({
    event_amount: 0,
    photocopy_charges: 0,
    total_amount: 0,
  });

  const router = useRouter();

  const getCart = async () => {
    try {
      const response = await api.get(`/cart/`);
      setCart(response.data.data || []);
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  };
  const getAmount = async () => {
    try {
      const response = await api.get(`/payment/amount`);
      setAmount(response.data.data || {
        event_amount: 0,
        photocopy_charges: 0,
        total_amount: 0,
      });
    } catch (err) {
      console.log(err);
    }
  };
  ;

  useEffect(() => {
    getCart();
    getAmount();
  }, []);

  const handleDelete = async (eventId, price) => {
    try {
      const response = await api.delete(`/cart/`, {
        data: { event_id: eventId },
      });

      toast.success(response.data.message || "Item removed");
      setCart((prev) => prev.filter((item) => item.id !== eventId));
      setAmount((prev) => prev - price);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Error deleting item");
    }
  };

  const handleEmpty = async () => {
    try {
      const response = await api.delete(`/cart/empty`);
      toast.success(response.data.message || "Cart emptied");
      setCart([]);
      setAmount(0);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Error emptying cart");
    }
  };
  
  const handleProceed = async () => {
    if (amount.total_amount > 0) {
      router.push("/payment");
    } else {
      toast.error("Cart is Empty!");
    }
  };


  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#1a0b40] flex justify-center items-center py-10 md:py-0 lg:items-start lg:pt-30">
      {/* Background */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/img/common/desktop-bg.png"
          alt="Desktop Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="block md:hidden absolute inset-0 z-0">
        <Image
          src="/img/common/general-mobile-bg.png"
          alt="Mobile Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Decorations */}
      <div className="hidden md:block">
        <div className="absolute bottom-0 left-0 z-10 w-90 h-95 lg:w-72 lg:h-[350px] xl:w-[360px] xl:h-[380px]">
          <Image
            src="/img/cart/cart-bottom-left-singer-desktop.png"
            alt="Dancer"
            fill
            className="object-contain object-bottom"
          />
        </div>

        <div className="absolute bottom-0 right-0 z-10 w-80 h-80 lg:w-72 lg:h-72 xl:w-96 xl:h-96">
          <Image
            src="/img/cart/cart-bottom-right-singer-desktop.png"
            alt="Guitarist"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-5 w-full translate-y-[5%] lg:translate-y-0">
        <div className="relative w-[80%] max-h-[490px] md:w-[500px] md:min-h-[500px] lg:w-[450px] lg:min-h-[450px] xl:w-[500px] xl:min-h-[500px] flex flex-col items-center justify-center p-6">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/cart/cart-bg-26.png"
              alt="Cart Card"
              fill
              className="object-fill rounded-3xl"
            />
          </div>

          <div className="relative z-10 w-full h-full flex flex-col mt-2 px-1 md:px-4 py-4 pb-4">
            <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl text-[#1f4e3d] text-center tracking-widest heading-font mb-6">
              CART
            </h1>

            <div className="flex-grow w-full max-h-[300px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-[#1f4e3d]/20 pb-2"
                  >
                    <span className="body-font text-[#1f4e3d] text-lg font-semibold truncate">
                      {item.name}
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="body-font text-[#0e7490] font-bold text-lg">
                        Rs. {item.price}
                      </span>
                      <button
                        onClick={() => handleDelete(item.id, item.price)}
                        className="hover:scale-110 transition-transform"
                      >
                        <Image
                          width={24}
                          height={24}
                          src="/img/cart/cancel-icon.png"
                          alt="Remove"
                        />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="body-font text-center text-[#1f4e3d] text-xl mt-10 opacity-70">
                  Your cart is empty.
                </div>
              )}
            </div>

            <div className="w-full border-t-2 border-dotted border-[#1f4e3d]/40 my-6"></div>

            <div className="text-center mb-4">
              <h2 className="body-font text-2xl md:text-3xl font-extrabold text-[#1a1a1a]">
                Total : Rs. {amount.total_amount}
              </h2>

            </div>
          </div>
        </div>

        <div className="flex justify-center mt-1 gap-6 md:gap-10">
          <button
            onClick={handleEmpty}
            className="relative w-36 h-12 md:w-44 md:h-14 group hover:scale-105 transition-transform"
          >
            <Image src="/img/cart/cart-btns-bg.png" alt="bg" fill />
            <div className="relative z-10 flex items-center justify-center h-full pb-1">
              <span className="heading-font text-[#5c3a21] font-bold text-lg">
                Delete All
              </span>
            </div>
          </button>

          <button
            onClick={handleProceed}
            className="relative w-36 h-12 md:w-44 md:h-14 group hover:scale-105 transition-transform"
          >
            <Image src="/img/cart/cart-btns-bg.png" alt="bg" fill />
            <div className="relative z-10 flex items-center justify-center h-full pb-1">
              <span className="heading-font text-[#5c3a21] font-bold text-lg">
                Proceed
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default isNotAuth(Cart);
