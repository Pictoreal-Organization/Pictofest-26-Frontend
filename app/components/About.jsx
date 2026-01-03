"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="p-0.5 sm:p-5 lg:p-0 mt-10 bg-[url('/img/home/footer-bg.svg')] bg-top bg-cover"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Fade to full opacity
      transition={{ duration: 0.5 }} // Duration for fade-in animation
    >
      <motion.div
        className="text-center text-5xl lg:text-8xl text-amber-900 relative mb-12 heading-font"
        initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and slide up
        animate={{ opacity: 1, y: 0 }} // Fade in and slide to the original position
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.div>

      <motion.div
        className="p-1 bg-size-[100%_100%] lg:p-10 lg:px-40 mx-auto justify-center items-center flex gap-5 flex-col lg:flex-row"
        initial={{ opacity: 0 }} // Start with opacity 0
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 0.5, delay: 0.2 }} // Add delay to animate after title
      >
        {/* Left Section (Logo and Quote) */}
        <motion.div
          className="flex flex-col lg:w-1/2 w-full items-center mx-auto lg:ml-8 gap-5"
          initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and slide in from left
          animate={{ opacity: 1, x: 0 }} // Fade in and slide to the original position
          transition={{ duration: 0.6 }}
        >
          <img
            className="w-32 sm:w-[75%] md:w-[50%] lg:w-2/4 mt-5"
            src="/img/home/picto-logo.png"
            alt="about-us"
            loading="lazy"
          />
          <span className="text-2xl links-font text-amber-900 text-center w-full mx-auto px-2">
            ‘ May Thoughts, Colours, and Words prevail! ’
          </span>
        </motion.div>

        {/* Right Section (Text Description) */}
        <motion.div
          className="text-justify p-5 lg:ml-20 mb-5 body-font text-green-950 font-medium w-11/12 backdrop-filter backdrop-blur-xs bg-opacity-10 border border-orange-100 rounded-xl text-xl"
          initial={{ opacity: 0, x: 100 }} // Start with opacity 0 and slide in from right
          animate={{ opacity: 1, x: 0 }} // Fade in and slide to the original position
          transition={{ duration: 0.6 }}
        >
          {/* Mobile View Text */}
          <p className="md:hidden">
            Pictoreal is a non-technical club at PICT, Pune, that publishes the annual magazine with a unique theme each year. We foster creativity in literature, design, and photography through events like Pics-o-Reel, an art and photography exhibition, and Manthan, a public speaking platform. Our subgroup, Pictosocial, promotes social responsibility through donation drives and community service. We also conduct career counseling for students in remote areas, empowering PICT students to explore their creative potential.
          </p>

          {/* Desktop View Text */}
          <p className="hidden md:block">
            Pictoreal is a non-technical club at PICT that creates and publishes the annual magazine of PICT, Pune with a unique theme each year. We organize various events to foster creativity in literature, design, and photography while helping individuals build practical skills like event management, public speaking, and teamwork. Our key events include Pics-o-Reel, an annual art and photography exhibition-cum-competition, and Manthan, a platform for public speaking through extempore, debates, and group discussions.
            Pictosocial, a subgroup of Pictoreal, promotes social responsibility through tree plantation drives, blood donation and monetary donation drives, and visits to old-age homes or orphanages. We also conduct career counseling sessions for students in remote areas. At Pictoreal, we strive to inspire and empower students at PICT to explore their creative potential.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
