// import Link from "next/link";
// import { Fade } from "react-awesome-reveal";

// const eventData = [
//   {
//     title: "PICS-O-REEL",
//     description:
//       "Step into the world of art with Picsoreel's art exhibitions! Showcasing stunning works from talented artists, we celebrate creativity, culture, and innovation.",
//     image: "/img/home/PICSOREEL.png",
//     link: "/picsoreel",
//     reverse: false,
//   },
//   {
//     title: "WORKSHOPS",
//     description:
//       "Discover the joy of creating with our workshops! Perfect for beginners and experienced artists alike, our workshops offer expert guidance, innovative techniques, and a chance to explore diverse artistic styles.",
//     image: "/img/home/WORKSHOPS.png",
//     link: "/workshops",
//     reverse: true,
//   },
//   {
//     title: "MANTHAN",
//     description:
//       "Public speaking is more than just a skill—it’s a pathway to confidence, success, and impact. At Manthan, we celebrate the art of speaking with dynamic rounds designed to challenge and inspire.",
//     image: "/img/home/MANTHAN.png",
//     link: "/manthan",
//     reverse: false,
//   },
//   {
//     title: "EVENTS",
//     description:
//       "Enhance your creativity with our events! Whether you're an enthusiast or a budding creator, join us to connect, learn, and be inspired.",
//     image: "/img/home/EVENTS.png",
//     link: "/events",
//     reverse: true,
//   },
// ];

// const EventSection = ({ title, description, image, link, reverse }) => (
//   <Fade direction={reverse ? "right" : "left"} triggerOnce>
//     <div className="grid grid-cols-1 lg:grid-cols-9 mt-8">
//       {!reverse && (
//         <div className="col-span-3 flex justify-center">
//           <img src={image} className="w-60 py-10 lg:w-full" alt={title} />
//         </div>
//       )}

//       <div className="spacer col-span-1 hidden lg:block"></div>

//       <div className="content col-span-5 flex flex-col justify-center items-start">
//         <h2 className="heading heading-font text-4xl lg:text-7xl text-[#4E3506] text-center lg:text-start w-full">
//           {title}
//         </h2>
//         <p className="description-font mt-10 font-bold text-justify lg:text-start">
//           {description}
//         </p>
//         <div className="flex justify-center lg:justify-start w-full">
//           <Link
//             href={link}
//             className="read-more body-font p-2 text-2xl mt-8 rounded-xl border-4 border-rose-500 text-rose-500 px-10 hover:bg-rose-500 hover:text-white transition-all"
//           >
//             Participate
//           </Link>
//         </div>
//       </div>

//       {reverse && <div className="spacer col-span-1 hidden lg:block"></div>}

//       {reverse && (
//         <div className="col-span-3 flex justify-center order-first">
//           <img src={image} className="w-60 py-10 lg:w-full" alt={title} />
//         </div>
//       )}
//     </div>
//   </Fade>
// );

// const EventsCard = () => {
//   return (
//     <div className="px-8 lg:px-20">
//       {eventData.map((event, index) => (
//         <EventSection key={index} {...event} />
//       ))}
//     </div>
//   );
// };

// export default EventsCard;

//2026 dev



// import Link from "next/link";
// import { Fade } from "react-awesome-reveal";

// // --- 1. Clean Data (No Offsets) ---
// const eventData = [
//   {
//     title: "PICS-O-REEL",
//     description:
//       "Step into the world of art with Picsoreel's art exhibitions! Showcasing stunning works from talented artists, we celebrate creativity, culture, and innovation.",
//     link: "/picsoreel",
//     bannerImage: "/img/events/events-card-26-picso.png",
//     // mobileBannerImage: "/img/events/events-card-26-picso-mobile.png",
//   },
//   {
//     title: "WORKSHOPS",
//     description:
//       "Discover the joy of creating with our workshops! Perfect for beginners and experienced artists alike.",
//     link: "/workshops",
//     bannerImage: "/img/events/events-card-26-workshops.png",
//   },
//   {
//     title: "EVENTS",
//     description:
//       "Enhance your creativity with our events! Join us to connect, learn, and be inspired.",
//     link: "/events",
//     bannerImage: "/img/events/events-card-26-events.png",
//   },
// ];

// // --- 2. Clean Component (Standard Centering) ---
// const BannerEventCard = ({
//   title,
//   description,
//   link,
//   bannerImage,
//   mobileBannerImage,
// }) => (
//   // Main Container
//   <div className="relative w-full min-h-[450px] lg:min-h-[600px] flex items-center justify-center">
//     {/* Background Image Layer */}
//     <picture className="absolute inset-0 -z-10">
//       <source media="(min-width: 1024px)" srcSet={bannerImage} />
//       <img
//         src={mobileBannerImage || bannerImage}
//         alt={`${title} Background`}
//         className="w-full h-full object-contain"
//       />
//     </picture>

//     {/* Content Container */}
//     {/* Simply centered using flexbox utilities */}
//     <div className="z-10 flex flex-col items-center justify-center text-center gap-6 px-6 max-w-4xl">
//       <h2 className="heading heading-font text-3xl md:text-4xl lg:text-5xl text-[#4E3506]">
//         {title}
//       </h2>

//       <p className="description-font font-bold text-sm md:text-base text-[#4E3506] leading-relaxed">
//         {description}
//       </p>

//       <Link
//         href={link}
//         className="px-8 py-2 text-lg md:text-xl rounded-xl border-4 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white bg-white/60 backdrop-blur-sm transition-all"
//       >
//         Participate
//       </Link>
//     </div>
//   </div>
// );

// const EventsCard = () => {
//   return (
//     <div className="flex flex-col items-center w-full py-20 gap-16 overflow-hidden">
//       {eventData.map((event, index) => (
//         <Fade
//           key={index}
//           direction="up"
//           triggerOnce
//           className="w-full flex justify-center max-w-6xl"
//         >
//           <BannerEventCard {...event} />
//         </Fade>
//       ))}
//     </div>
//   );
// };

// export default EventsCard;

// import Link from "next/link";
// import { Fade } from "react-awesome-reveal";

// // --- 1. Data with Mobile Images ---
// // Make sure to uncomment/add your real mobile image paths here
// const eventData = [
//   {
//     title: "PICS-O-REEL",
//     description:
//       "Step into the world of art with Picsoreel's art exhibitions! Showcasing stunning works from talented artists, we celebrate creativity, culture, and innovation.",
//     link: "/picsoreel",
//     bannerImage: "/img/events/events-card-26-picso.png",
//     mobileBannerImage: "/img/events/events-card-26-picso-mobile.png", // <--- Mobile Image
//   },
//   {
//     title: "WORKSHOPS",
//     description:
//       "Discover the joy of creating with our workshops! Perfect for beginners and experienced artists alike.",
//     link: "/workshops",
//     bannerImage: "/img/events/events-card-26-workshops.png",
//     mobileBannerImage: "/img/events/events-card-26-workshops-mobile.png", // <--- Mobile Image
//   },
//   {
//     title: "EVENTS",
//     description:
//       "Enhance your creativity with our events! Join us to connect, learn, and be inspired.",
//     link: "/events",
//     bannerImage: "/img/events/events-card-26-events.png",
//     mobileBannerImage: "/img/events/events-card-26-events-mobile.png", // <--- Mobile Image
//   },
// ];

// // --- 2. Component with Responsive Image Logic ---
// const BannerEventCard = ({
//   title,
//   description,
//   link,
//   bannerImage,
//   mobileBannerImage,
// }) => (
//   // Main Container
//   <div className="relative w-full min-h-[450px] lg:min-h-[600px] flex items-center justify-center">
//     {/* --- Responsive Background Image --- */}
//     <picture className="absolute inset-0 -z-10">
//       {/* 1. If screen is Desktop (lg or bigger), use 'bannerImage' */}
//       <source media="(min-width: 1024px)" srcSet={bannerImage} />

//       {/* 2. Otherwise (Mobile/Tablet), use 'mobileBannerImage' */}
//       <img
//         src={mobileBannerImage || bannerImage}
//         alt={`${title} Background`}
//         className="w-auto h-full object-contain p-10 "
//       />
//     </picture>

//     {/* --- Centered Content --- */}
//     <div className="z-10 flex flex-col items-center justify-center text-center gap-6 px-6 max-w-4xl">
//       <h2 className="heading heading-font text-3xl md:text-4xl lg:text-5xl text-[#4E3506]">
//         {title}
//       </h2>

//       <p className="description-font font-bold text-sm md:text-base text-[#4E3506] leading-relaxed">
//         {description}
//       </p>

//       <Link
//         href={link}
//         className="px-8 py-2 text-lg md:text-xl rounded-xl border-4 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white bg-white/60 backdrop-blur-sm transition-all"
//       >
//         Participate
//       </Link>
//     </div>
//   </div>
// );

// const EventsCard = () => {
//   return (
//     <div className="flex flex-col items-center w-full py-20 gap-16 overflow-hidden">
//       {eventData.map((event, index) => (
//         <Fade
//           key={index}
//           direction="up"
//           triggerOnce
//           className="w-full flex justify-center max-w-6xl"
//         >
//           <BannerEventCard {...event} />
//         </Fade>
//       ))}
//     </div>
//   );
// };

// export default EventsCard;


import Link from "next/link";
import { Fade } from "react-awesome-reveal";

// --- 1. Data ---
const eventData = [
  {
    title: "PICS-O-REEL",
    description:
      "Step into the world of art with Picsoreel's art exhibitions! Showcasing stunning works from talented artists.",
    link: "/picsoreel",
    bannerImage: "/img/events/events-card-26-picso.png",
    mobileBannerImage: "/img/events/events-card-26-picso-mobile.png",
  },
  {
    title: "WORKSHOPS",
    description:
      "Discover the joy of creating with our workshops! Perfect for beginners and experienced artists alike.",
    link: "/workshops",
    bannerImage: "/img/events/events-card-26-workshops.png",
    mobileBannerImage: "/img/events/events-card-26-workshops-mobile.png",
  },
  {
    title: "EVENTS",
    description:
      "Enhance your creativity with our events! Join us to connect, learn, and be inspired.",
    link: "/events",
    bannerImage: "/img/events/events-card-26-events.png",
    mobileBannerImage: "/img/events/events-card-26-events-mobile.png",
  },
];

// --- 2. Fixed Component ---
const BannerEventCard = ({
  title,
  description,
  link,
  bannerImage,
  mobileBannerImage,
}) => (
  // 1. Container: Removed fixed height (min-h).
  // We use 'max-w-5xl' to stop it from getting too huge on big screens.
  <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center p-5">
    {/* --- Background Image --- */}
    {/* 2. Logic Change: The image is now 'relative'. 
        It dictates the height of the parent div. w-full h-auto maintains aspect ratio. */}
    <picture className="w-full h-auto block">
      <source media="(min-width: 1024px)" srcSet={bannerImage} />
      <img
        src={mobileBannerImage || bannerImage}
        alt={`${title} Background`}
        className="w-full h-auto object-contain"
      />
    </picture>

    {/* --- Centered Content Overlay --- */}
    {/* 3. Logic Change: Text is now 'absolute'. 
        It sits ON TOP of the image. 'inset-0' makes it cover the exact area of the image. */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 py-6 md:px-16 md:py-10 z-10">
      {/* Added max-width to text so it doesn't touch the very edges of your card graphic */}
      <div className="flex flex-col items-center gap-3 md:gap-6 max-w-[90%] md:max-w-2xl">
        <h2 className="heading heading-font text-2xl md:text-4xl lg:text-5xl pt-2 text-[#4E3506] leading-tight">
          {title}
        </h2>

        <p className="description-font font-bold text-xs md:text-base text-[#4E3506] leading-snug md:leading-relaxed line-clamp-3 md:line-clamp-none">
          {description}
        </p>

        <Link
          href={link}
          className="mt-0.5 px-6 py-1.5 md:px-8 md:py-2 text-sm md:text-lg lg:text-xl rounded-xl border-2 md:border-4 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white bg-white/80 backdrop-blur-sm transition-all"
        >
          Participate
        </Link>
      </div>
    </div>
  </div>
);

const EventsCard = () => {
  return (
    // Reduced py-20 to py-10 and gap-16 to gap-8 for tighter spacing
    <div className="flex flex-col items-center w-full pt-0 pb-8 gap-4 md:gap-12 overflow-hidden px-4">
      {eventData.map((event, index) => (
        <Fade
          key={index}
          direction="up"
          triggerOnce
          className="w-full flex justify-center"
        >
          <BannerEventCard {...event} />
        </Fade>
      ))}
    </div>
  );
};

export default EventsCard;