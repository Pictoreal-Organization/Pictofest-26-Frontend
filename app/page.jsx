"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import About from "@/app/components/About";
import Events from "@/app/components/Events";
import Footer from "@/app/components/Footer";
import Landing from "@/app/components/Landing";
import PrizePool from "./components/PrizePool";

const Home = () => {
  useEffect(() => {
    const CURRENT_DB_VERSION = "2.0"; // Change this after each migration

    const storedVersion = localStorage.getItem("dbVersion");

    if (storedVersion !== CURRENT_DB_VERSION) {
      localStorage.clear();
      sessionStorage.clear();

      localStorage.setItem("dbVersion", CURRENT_DB_VERSION);
    }
  }, []);

  return (
    <motion.main
      className="bg-[url('/img/home/bg-repeat.svg')] bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-[url('/img/home/background.svg')] bg-right flex flex-col justify-evenly lg:justify-start pt-12 lg:pt-24 items-center md:bg-center bg-cover">
        <Landing />
      </div>
      <div>
       <PrizePool />
      </div>
      <div className="md:px-24 lg:px-40 sm:pt-60">
        <Events />
      </div>
      <div className="pt-20">
        <About />
        <Footer />
      </div>
    </motion.main>
  );
};

export default Home;
