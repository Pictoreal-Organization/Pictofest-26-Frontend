"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "@/app/api";
import EventCard from "@/app/components/EventCard";
import { motion } from "framer-motion";

const Workshops = () => {
  const [workshops, setWorkshops] = useState([]);

  const getWorkshops = async () => {
    try {
      const response = await axios.get(`${baseURL}/events/category/WORKSHOP`);
      setWorkshops(response?.data?.data);
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    getWorkshops();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[url('/img/sponsor/background.png')] bg-cover min-h-dvh px-3">
      <div className="max-w-sm lg:max-w-4xl mx-auto flex flex-col lg:gap-1 gap-2 justify-center items-center lg:py-14 py-8">
        <h1 className="text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 heading-font mt-20">
          Workshops
        </h1>
        {workshops && workshops.map((event, index) => (
          <motion.div
            key={event.id} // Ensure event has a unique id
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation for each card
            className="w-full" // Fixed width and height for cards
          >
            <EventCard data={event} />
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Workshops;
