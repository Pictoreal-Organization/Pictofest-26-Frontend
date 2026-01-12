"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { baseURL } from "@/app/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import api from "@/app/api";
import { motion, AnimatePresence } from "framer-motion";
import { FaCartShopping, FaArrowLeft } from "react-icons/fa6";


const DUMMY_EVENT_DATA = {
  id: 1,
  name: "Neon Fluid Painting",
  event_category: "WORKSHOP",
  event_code: "WS",
  logo_link: "/img/events/texture_art.png",
  venue: "Main Art Hall, Ground Floor",
  event_date: "16 February 2026",
  team_category: "Solo",
  price: 299,
  description: `
    Dive into an immersive hands-on workshop exploring texture art combined with neon fluid painting.
    This workshop is part of Fragments of Time, encouraging participants to express moments,
    memories, and emotions through layered textures and vibrant colors.
  `,
  contact_details: {
    name: "Aarav Mehta",
    phone: "+91 98765 43210",
  },
  rules: {
    rule1: "All materials will be provided at the venue.",
    rule2: "Participants must arrive 15 minutes before the start time.",
    rule3: "Artwork created can be taken home after the session.",
    rule4: "No prior experience required.",
  },
};


const Individual = ({ params }) => {
  const { eventId } = params;
  const [data, setData] = useState({});
  const router = useRouter();

  const getData = async (eventId) => {
    try {
      setData(DUMMY_EVENT_DATA);
      //const response = await axios.get(`${baseURL}/events/${eventId}`);
      //setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData(eventId);
  }, [eventId]);

  const handleAddToCart = async () => {
    try {
      const response = await api.post(`/cart/`, { event_id: data.id });
      toast.success(response.data.message);
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    }
  };

  const descriptionContent = data?.description
    ? {
        __html: data.description.replace(
          /Fragments of Time/g,
          '<span class="font-extrabold">Fragments of Time</span>'
        ),
      }
    : null;

  const imageMap = {
    "craft your moon": ["/img/workshops/moon1.jpg", "/img/workshops/moon2.jpg"],
    "play with clay": [
      "/img/workshops/pottery1.jpg",
      "/img/workshops/pottery2.jpg",
    ],
    "neon fluid painting": [
      "/img/workshops/texture1.jpg",
      "/img/workshops/texture2.jpg",
      "/img/workshops/texture3.jpg",
    ],
  };

  const images = imageMap[data?.name?.toLowerCase()?.trim()] || [];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
  {/* ============================================================
      1. DYNAMIC BACKGROUND LAYER (FIXED)
      ============================================================ */}
  <div className="fixed top-0 left-0 w-full h-screen -z-10">
    {/* Mobile Background */}
    <div className="block md:hidden w-full h-full relative">
      <Image
        src="/img/common/general-mobile-bg.png"
        alt="Mobile Background"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Desktop Background */}
    <div className="hidden md:block w-full h-full relative">
      <Image
        src="/img/common/general-desktop-bg.png"
        alt="Desktop Background"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>

  {/* ============================================================
    2. YOUR EVENT CONTENT
    ============================================================ */}
  <div className="relative z-10">
    {/* MOBILE LAYOUT (block md:hidden) */}
    <div className="block md:hidden">
      <motion.div
        className="h-fit w-full text-justify text-[#67230F] flex flex-col px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Mobile Content Container */}
        <motion.div
          className="w-full flex flex-col mt-20 mb-4 gap-6 bg-[#FEE2B2] p-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full flex justify-center mt-6">
            <div className="relative w-full max-w-[320px]">
              {/* Main banner with mask for cutouts */}
              <div className="relative">
                {/* Blue banner background */}
                <div className="bg-[#08525F] flex items-center justify-center py-3 px-12 min-h-[60px] relative">
                  {/* Event Name Text */}
                  <h1 className="text-2xl uppercase sub-heading-font text-center text-white px-2 w-full break-words relative z-10">
                    {data?.name}
                  </h1>
                </div>
                
                {/* Left triangular cutout - CUTS INTO the banner */}
                <div className="absolute left-0 top-0 h-full w-6 z-20 translate-x-[-0.2px]">
                  <svg width="100%" height="100%" viewBox="0 0 24 60" preserveAspectRatio="none">
                    <path d="M0,0 L24,30 L0,60 Z" fill="#FEE2B2"/> {/* Cutout color matches your page background */}
                  </svg>
                </div>
                
                {/* Right triangular cutout - CUTS INTO the banner */}
                <div className="absolute right-0 top-0 h-full w-6 z-20 translate-x-[0.35px]">
                  <svg width="100%" height="100%" viewBox="0 0 24 60" preserveAspectRatio="none">
                    <path d="M24,0 L0,30 L24,60 Z" fill="#FEE2B2"/> {/* Cutout color matches your page background */}
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* 1. Event Name - Mobile 
          <div className="w-full flex justify-center">
            <div className="bg-[#08525F] rounded-2xl px-5 py-3 flex items-center justify-center shadow-lg w-full max-w-[280px] sub-heading-font text-white">
              <h1 className="text-2xl uppercase sub-heading-font text-center">
                {data?.name}
              </h1>
            </div>
          </div>

          {/* 2. Add to Cart Button - Mobile */}
          <div className="w-full flex justify-center">
            <button
              onClick={handleAddToCart}
              className="bg-[#08525F] rounded-2xl px-6 py-3 hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-lg w-full max-w-[200px] sub-heading-font text-white"
            >
              <FaCartShopping className="text-xl mr-5" />
              <span>{data?.price ? "Add to Cart" : "Register"}</span>
            </button>
          </div>

          {/* 3. Event Details with Orange Card - Mobile */}
          <motion.div
            className="w-full flex flex-col relative mt-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Orange Background Card */}
            <div className="absolute inset-0 bg-[#E97400] rounded-lg z-0 shadow-xl"></div>
            
            {/* Content Container */}
            <div className="relative z-10 p-4 flex flex-col items-center">
              <div className="border-2 border-dashed border-white rounded-sm p-4 w-full">
                {/* Event Details Title */}
                <div className="text-xl sub-heading-font mb-4 pb-2 relative text-white text-center w-full" style={{ letterSpacing: '3.42px' }}>
                  Event Details
                </div>

                {/* Line SVG below Event Details */}
                <div className="-mt-6 relative w-full h-5">
                  <Image
                    src="/img/events/line26.svg"
                    alt="Decorative Line"
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>

                {/* Event Details List */}
                <ul className="body-font font-medium text-base list-disc pl-5 group text-left text-white space-y-2 w-full">
                  <li>
                    <strong className="body-font">Venue:</strong> {data?.venue}
                  </li>
                  <li>
                    <strong className="body-font">Event Date:</strong>{" "}
                    {data?.event_date}
                  </li>
                  <li>
                    <strong className="body-font">Contact Name: </strong> &nbsp;
                    {data?.contact_details?.name}
                  </li>
                  <li>
                    <strong className="body-font">Contact Number:</strong>{" "}
                    &nbsp;
                    {data?.contact_details?.phone}
                  </li>
                  <li>
                    <strong className="body-font">Team Category:</strong>{" "}
                    {data?.team_category}
                  </li>
                  <li>
                    <strong className="body-font">Price:</strong>{" "}
                    {data?.price ? "Rs. " + data.price + "/-" : "Free"}
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 4. Description - Mobile */}
          {descriptionContent && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-xl text-[#572711] sub-heading-font w-full mb-4 pb-2 relative text-center" style={{ letterSpacing: '3.42px' }}>
                Description
              </div>
              {/* Line SVG*/}
              <div className="-mt-7 relative w-full h-7 ">
                <Image
                  src="/img/events/brown-border26.svg"
                  alt="Decorative Line"
                  fill
                  className="object-contain"
                  priority={false}
                />
              </div>

              <p
                className="text-base font-normal text-[#572711] text-center body-font font-semibold px-2"
                dangerouslySetInnerHTML={descriptionContent}
              />
            </motion.div>
          )}

          {/* 5. Rules - Mobile */}
          {data?.rules && Object.keys(data.rules).length !== 0 && (
            <motion.div
              className="mt-6 flex flex-col"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xl text-[#572711] sub-heading-font w-full mb-4 pb-2 relative text-center" style={{ letterSpacing: '3.42px' }}>
                Rules & How to Play
              </div>
              {/* Line SVG*/}
              <div className="-mt-7 relative w-full h-7 ">
                <Image
                  src="/img/events/brown-border26.svg"
                  alt="Decorative Line"
                  fill
                  className="object-contain"
                  priority={false}
                />
              </div>
              <ul className="body-font font-semibold text-[#572711] text-base text-left space-y-2">
                {Object.values(data.rules).map((rule, index) => (
                  <li key={index}>
                    {index + 1}. {rule}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {data?.event_code === "WS" && (
            <div className="flex mx-auto my-5 relative w-64 md:w-96 h-64 md:h-96 border-4 rounded-xl border-[#67230F] bg-[#67230F]">
              <AnimatePresence mode="wait">
                {images.length > 0 && (
                  <motion.div
                    key={images[index]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full flex justify-center items-center"
                  >
                    <Image
                      src={images[index]}
                      alt="event image"
                      className="object-contain h-full"
                      width={500}
                      height={500}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

                      <motion.div
              className="mt-6 flex flex-col"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >


              {/* 6. Two Buttons - Mobile */}
              <div className="flex justify-center gap-4 mt-8">
                {/* Back Button */}
                <button
                  //onClick={handleBack}
                  className="bg-[#E97400] rounded-2xl px-6 py-3 hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-lg min-w-[140px]"
                >
                  <FaArrowLeft className="text-2xl text-white" />
                </button>

                {/* Add to Cart Button (Icon only) */}
                <button
                  onClick={handleAddToCart}
                  className="bg-[#08525F] rounded-2xl px-6 py-3 hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-lg min-w-[140px]"
                >
                  <FaCartShopping className="text-2xl text-white" />
                </button>
              </div>
            </motion.div>
          
        </motion.div>
      </motion.div>
    </div>

    {/* DESKTOP LAYOUT (hidden md:block) - Keep your existing desktop layout */}
    <div className="hidden md:block">
      <motion.div
        className="h-fit w-full text-justify text-[#67230F] flex flex-col lg:flex-row lg:h-fit px-4 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full lg:w-full flex flex-col mt-20 lg:mt-32 lg:mx-16 mb-4 lg:mb-16 gap-3 bg-[#FEE2B2] p-4 lg:p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-0 lg:p-8 relative">
            {/* Title and Button */}
            <motion.div
              className="flex flex-col md:flex-row justify-around items-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="order-2 md:order-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
                {/* Slim line*/}
                <div className="flex justify-center mb-1 px-15">
                  <div className="h-[2px] bg-[#08525F] w-full max-w-[calc(100%+40px)] translate-x-[-56px]"></div>
                </div>

                <div className="bg-[#08525F] rounded-2xl px-5 -py-1 flex items-center justify-center shadow-lg min-w-[130px] sub-heading-font text-white">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl uppercase sub-heading-font text-center mt-4 mb-3 py-1">
                    {data?.name}
                  </h1>
                </div>

                {/* Slim line*/}
                <div className="flex justify-center mb-2 mt-1 px-15">
                    <div className="h-[2.1px] bg-[#08525F] w-full max-w-[calc(100%+40px)] translate-x-[56px]"></div>
                </div>
              </div>

              <div className="order-1 md:order-2 justify-center items-center flex md:ml-auto md:self-center">
                <button
                  onClick={handleAddToCart}
                  className="bg-[#08525F] rounded-2xl px-8 py-4 hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-xl min-w-[140px] sub-heading-font text-white"
                >
                  <FaCartShopping className="text-xl" />
                  <span>{data?.price ? "Add to Cart" : "Register"}</span>
                </button>
              </div>
            </motion.div>

            {descriptionContent && (
              <motion.div
                className="mt-6 lg:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p
                  className="text-xl font-normal text-[#08525F] text-center body-font font-semibold px-4 lg:px-8 mt-15"
                  dangerouslySetInnerHTML={descriptionContent}
                />
              </motion.div>
            )}

            {/* Event Details */}
            <motion.div
              className="w-full lg:w-full text-[#67230F] lg:mt-8 flex flex-col lg:flex-row gap-6 lg:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* LEFT SECTION - Event Details */}
              <motion.div
                className="lg:w-1/2 flex flex-col relative"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Orange Background Card */}
                <div className="absolute inset-0 bg-[#E97400] rounded-lg z-0 mx-3 lg:mx-1 shadow-2xl"></div>
                
                {/* Content Container */}
                <div className="relative z-10 p-4 lg:p-4 flex flex-col items-center">
                  <div className="border-3 border-dashed border-white rounded-sm p-4 lg:p-4 w-full -m-1">
                  {/* Centered Event Details Title */}
                    <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl sub-heading-font mb-4 pb-2 relative text-white text-center w-full" style={{ letterSpacing: '3.42px' }}>
                      Event Details
                    </div>

                    {/* Line SVG below Event Details */}
                    <div className="-mt-6 relative w-full h-5">
                      <Image
                        src="/img/events/line26.svg"
                        alt="Decorative Line"
                        fill
                        className="object-contain"
                        priority={false}
                      />
                    </div>

                    {/* Event Details List */}
                    <ul className="body-font font-medium text-lg list-disc pl-6 group text-left text-white space-y-2 w-full">
                      <li>
                        <strong className="body-font">Venue:</strong> {data?.venue}
                      </li>
                      <li>
                        <strong className="body-font">Event Date:</strong>{" "}
                        {data?.event_date}
                      </li>
                      <li>
                        <strong className="body-font">Contact Name: </strong> &nbsp;
                        {data?.contact_details?.name}
                      </li>
                      <li>
                        <strong className="body-font">Contact Number:</strong>{" "}
                        &nbsp;
                        {data?.contact_details?.phone}
                      </li>
                      <li>
                        <strong className="body-font">Team Category:</strong>{" "}
                        {data?.team_category}
                      </li>
                      <li>
                        <strong className="body-font">Price:</strong>{" "}
                        {data?.price ? "Rs. " + data.price + "/-" : "Free"}
                      </li>
                    </ul>
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT SECTION - Rules */}
                {data?.rules && Object.keys(data.rules).length !== 0 && (
                  <motion.div
                    className="lg:w-1/2 flex flex-col"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-[#572711] sub-heading-font w-fit mb-4 pb-2 relative group" style={{ letterSpacing: '3.42px' }}>
                      Rules & How to Play
                    </div>

                    <ul className="body-font font-semibold text-[#572711] text-lg text-left space-y-2">
                      {Object.values(data.rules).map((rule, index) => (
                        <li key={index}>
                          {index + 1}. {rule}
                        </li>
                      ))}
                    </ul>

                    {/* BUTTONS BELOW RULES - Side by side */}
                    <div className="flex justify-center gap-4 mt-8">
                      {/* Back Button */}
                      <button
                        //onClick={handleBack}
                        className="bg-[#E97400] rounded-2xl px-8 py-4 hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-xl min-w-[140px]"
                      >
                        <FaArrowLeft className="text-2xl text-white" />
                      </button>

                      {/* Add to Cart Button (Icon only) */}
                      <button
                        onClick={handleAddToCart}
                        className="bg-[#08525F] rounded-2xl px-8 py-4 hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-xl min-w-[140px]"
                      >
                        <FaCartShopping className="text-2xl text-white" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* ============================================================
        3. CITY SVG(Desktop only)
        ============================================================ */}
    <div className="hidden lg:block w-full relative z-0">
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-64 -mt-5">
        <Image
          src="/img/events/city_26.svg"
          alt="City Skyline"
          fill
          className="object-contain"
          priority={false}
          sizes="100vw"
        />
      </div>
    </div>
  </main>
  );
};

export default Individual;
