"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { baseURL } from "@/app/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import api from "@/app/api";
import { motion, AnimatePresence } from "framer-motion";

const Individual = ({ params }) => {
  const { eventId } = params;
  const [data, setData] = useState({});
  const router = useRouter();

  const getData = async (eventId) => {
    try {
      const response = await axios.get(`${baseURL}/events/${eventId}`);
      setData(response.data.data);
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
    "texture art + neon fluid painting": [
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
    <motion.div
      className="bg-[url('/img/sponsor/background.png')] lg:bg-[url('/img/sponsor/background.png')] bg-cover bg-center h-fit w-full bg-no-repeat text-justify text-[#67230F] flex flex-col lg:flex-row lg:h-fit px-4 lg:px-16"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Fade to full opacity
      transition={{ duration: 0.5 }} // Duration for fade-in animation
    >
      <motion.div
        className="w-full lg:w-full flex flex-col mt-20 lg:mt-32 lg:mx-16 mb-4 lg:mb-16 gap-3 bg-[#FFE3BE] rounded-lg border-4 border-[#67230F] p-4 lg:p-8"
        initial={{ y: 50, opacity: 0 }} // Start with opacity 0 and a slight downward shift
        animate={{ y: 0, opacity: 1 }} // Animate to full opacity and original position
        transition={{ duration: 0.6 }}
      >
        <div className="p-0 lg:p-8 relative">
          {/* Title and Button */}
          <motion.div
            className="flex flex-col md:flex-row justify-around mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl heading-font text-center mt-6 mb-3 px-2">
              {data?.name}
            </h1>
            <div className="justify-center items-center flex">
              <button
                onClick={handleAddToCart}
                className="px-6 py-3 bg-[#C59D6D] border-2 border-[#67230F] text-[#67230F] rounded-full hover:bg-[#67230F] hover:text-[#C59D6D] transition-all duration-300 body-font text-xl"
              >
                {data?.price ? "Add to Cart" : "Register"}
              </button>
            </div>
          </motion.div>

          {/* Horizontal Line */}
          <hr className="border-2 border-[#67230F]" />

          {/* Event Details */}
          <motion.div
            className="w-full lg:w-full text-[#67230F] lg:mt-8 flex flex-col group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Left Section */}
              <motion.div
                className="md:w-1/2"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-center description-font font-bold text-2xl lg:text-3xl mb-4 mt-2">
                  {data?.event_category !== "PICSOREEL"
                    ? data?.event_category
                    : "PICS-O-REEL"}
                </h2>
                <div className="relative bg-[url('/img/events/event_logo_bg.svg')] bg-no-repeat bg-center bg-contain lg:h-64 md:h-48 h-40 flex justify-center items-center">
                  <Image
                    className="hover:scale-105 transition-transform ease-in-out invert lg:w-32 md:w-24 w-24"
                    src={data?.logo_link}
                    alt="Logo"
                    loading="lazy"
                    width={250}
                    height={250}
                    quality={100}
                  />
                </div>
              </motion.div>

              {/* Right Section */}
              <motion.div
                className="md:w-1/2 flex flex-col lg:mb-4 pt-4 lg:pt-0 gap-2"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-3xl description-font w-fit mt-2 uppercase font-bold mb-2 pb-2 relative">
                  Event Details
                  <div className="w-2/5 h-1 bg-[#67230F] absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full"></div>
                </div>
                <ul className="description-font text-xl list-disc pl-6 group text-left">
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
              </motion.div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="text-3xl description-font w-fit mt-4 lg:mt-2 uppercase font-bold mb-2 pb-2 relative group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Description
            <div className="w-2/5 h-1 bg-[#67230F] absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full"></div>
          </motion.div>
          {descriptionContent && (
            <p
              className="text-xl font-normal text-[#67230F] text-justify description-font"
              dangerouslySetInnerHTML={descriptionContent}
            />
          )}

          {/* Rules Section */}
          {data?.rules && Object.keys(data.rules).length !== 0 && (
            <>
              <motion.div
                className="text-3xl description-font w-fit mt-4 lg:mt-2 uppercase font-bold mb-2 pb-2 relative group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Rules
                <div className="w-2/5 h-1 bg-[#67230F] absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
              <ul className="description-font font-semibold text-xl text-left">
                {Object.values(data.rules).map((rule, index) => (
                  <li key={index}>
                    {index + 1}. {rule}
                  </li>
                ))}
              </ul>
            </>
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Individual;
