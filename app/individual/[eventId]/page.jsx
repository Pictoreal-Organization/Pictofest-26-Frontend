"use client";

import { useEffect, useState, useRef } from "react";
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
  event_code: "PH",
  logo_link: "/img/events/texture_art.png",
  venue: "Main Art Hall, Ground Floor",
  event_date: "16 February 2026",
  team_category: "Solo",
  price: 399,
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

  const [needPhotocopy, setNeedPhotocopy] = useState(false);
  const photocopyCheckboxRef = useRef(null);

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
      const payload = {
        event_id: data.id,
        ...(data.event_category === "PH" && {
          photocopy_needed: needPhotocopy,
        }),
      };
      const response = await api.post(`/cart/`, payload);
      toast.success(response.data.message);
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    }
  };

  const handleScrollToCheckbox = () => {
    if (data?.event_code === "PH" && photocopyCheckboxRef.current) {
      photocopyCheckboxRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      // If not a PH event, just add to cart directly
      handleAddToCart();
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
                    {/* 1. Event Name - Mobile */}
                    <div className="w-full flex justify-center">
                      <div className="relative w-full max-w-[320px]">
                        <svg
                          width="100%"
                          height="70"
                          viewBox="0 0 320 70"
                          preserveAspectRatio="none"
                        >
                          {/* Outer banner shape with 6 corners */}
                          <path
                            d="
          M 0 0
          L 320 0
          L 300 35
          L 320 70
          L 0 70
          L 20 35
          Z
        "
                            fill="#08525F"
                          />

                          {/* Inner dashed border */}
                          <path
                            d="
          M 8 8
          L 312 8
          L 292 35
          L 312 62
          L 8 62
          L 28 35
          Z
        "
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeDasharray="6 4"
                          />

                          {/* Text */}
                          <text
                            x="160"
                            y="42"
                            textAnchor="middle"
                            fill="white"
                            fontSize="18"
                            fontWeight="700"
                            letterSpacing="1"
                            className="sub-heading-font uppercase"
                          >
                            {data?.name}
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Add to Cart Button - Mobile */}
              <div className="w-full flex justify-center">
                <button
                  onClick={handleScrollToCheckbox}
                  className="bg-[#08525F] rounded-2xl px-6 py-3 hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-lg w-full max-w-[200px] sub-heading-font text-white"
                >
                  {data.price ? (
                    <FaCartShopping className="text-xl mr-5" />
                  ) : null}
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
                    <div
                      className="text-xl sub-heading-font mb-4 pb-2 relative text-white text-center w-full"
                      style={{ letterSpacing: "3.42px" }}
                    >
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
                        <strong className="body-font">Venue:</strong>{" "}
                        {data?.venue}
                      </li>
                      <li>
                        <strong className="body-font">Event Date:</strong>{" "}
                        {data?.event_date}
                      </li>
                      <li>
                        <strong className="body-font">Contact Name: </strong>{" "}
                        &nbsp;
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
                  <div
                    className="text-xl text-[#572711] sub-heading-font w-full mb-4 pb-2 relative text-center"
                    style={{ letterSpacing: "3.42px" }}
                  >
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
                  <div
                    className="text-xl text-[#572711] sub-heading-font w-full mb-4 pb-2 relative text-center"
                    style={{ letterSpacing: "3.42px" }}
                  >
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

              {/* Photocopy Checkbox - Mobile (Only for Photography Events) */}
              {data?.event_code === "PH" && (
                <motion.div
                  ref={photocopyCheckboxRef}
                  className="w-full flex justify-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/50 rounded-xl px-4 py-3 w-full max-w-[280px] border-2 border-[#08525F]">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needPhotocopy}
                        onChange={(e) => setNeedPhotocopy(e.target.checked)}
                        className="w-5 h-5 rounded border-2 border-[#08525F] text-[#08525F] focus:ring-2 focus:ring-[#08525F] cursor-pointer"
                      />
                      <span className="ml-3 text-[#572711] body-font font-semibold text-sm">
                        Do you want us to print your photographs?
                      </span>
                    </label>
                  </div>
                </motion.div>
              )}

              {/* 6. Two Buttons - Mobile */}
              <div className="flex justify-center gap-4 mt-4">
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
        </div>

        {/* DESKTOP LAYOUT (hidden md:block) */}
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

                  {/* Button and Checkbox Container - Desktop */}
                  <div className="order-1 md:order-2 flex flex-col items-center md:ml-auto md:self-center gap-4">
                    {/* Add to Cart Button */}
                    <button
                      onClick={handleScrollToCheckbox}
                      className="bg-[#08525F] rounded-2xl px-8 py-4 hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-xl min-w-[140px] sub-heading-font text-white"
                    >
                      {data.price ? (
                        <FaCartShopping className="text-xl mr-5" />
                      ) : null}
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
                        <div
                          className="text-xl sm:text-xl md:text-2xl lg:text-3xl sub-heading-font mb-4 pb-2 relative text-white text-center w-full"
                          style={{ letterSpacing: "3.42px" }}
                        >
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
                            <strong className="body-font">Venue:</strong>{" "}
                            {data?.venue}
                          </li>
                          <li>
                            <strong className="body-font">Event Date:</strong>{" "}
                            {data?.event_date}
                          </li>
                          <li>
                            <strong className="body-font">
                              Contact Name:{" "}
                            </strong>{" "}
                            &nbsp;
                            {data?.contact_details?.name}
                          </li>
                          <li>
                            <strong className="body-font">
                              Contact Number:
                            </strong>{" "}
                            &nbsp;
                            {data?.contact_details?.phone}
                          </li>
                          <li>
                            <strong className="body-font">
                              Team Category:
                            </strong>{" "}
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
                      <div
                        className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-[#572711] sub-heading-font w-fit mb-4 pb-2 relative group"
                        style={{ letterSpacing: "3.42px" }}
                      >
                        Rules & How to Play
                      </div>

                      <ul className="body-font font-semibold text-[#572711] text-lg text-left space-y-2">
                        {Object.values(data.rules).map((rule, index) => (
                          <li key={index}>
                            {index + 1}. {rule}
                          </li>
                        ))}
                      </ul>

{/* Photocopy Checkbox - Desktop (Only for Photography Events) */}
{data?.event_code === "PH" && (
  <motion.div
    className="flex justify-center mt-4"
    ref={photocopyCheckboxRef} // ← add this
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="inline-flex bg-white/50 rounded-xl px-6 py-4 border-2 border-[#08525F]">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={needPhotocopy}
          onChange={(e) => setNeedPhotocopy(e.target.checked)}
          className="w-6 h-6 rounded border-2 border-[#08525F] text-[#08525F] focus:ring-2 focus:ring-[#08525F] cursor-pointer"
        />
        <span className="ml-4 text-[#572711] body-font font-semibold text-base">
          Do you want us to print your photographs?
        </span>
      </label>
    </div>
  </motion.div>
)}



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