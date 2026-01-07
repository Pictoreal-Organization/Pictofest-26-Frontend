"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="
        relative
        w-full
        min-h-[110vh]
        bg-no-repeat
        bg-contain
        bg-top
        bg-cover
        bg-[url('/img/home/aboutphone.svg')]
        md:bg-[url('/img/home/Aboutus.svg')]
        px-4 sm:px-6
        pt-24 sm:pt-28 md:pt-32 lg:pt-40
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* CONTENT WRAPPER (INSIDE SVG BOX) */}
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          className="text-center lg:text-right text-2xl sm:text-3xl lg:text-5xl text-green-900 heading-font mb-14"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        {/* INNER CONTENT */}
        <motion.div
          className="
            flex flex-col lg:flex-row
            items-center justify-between
            gap-12 lg:gap-20
            px-4 sm:px-10 
            pb-20 lg:mt-30
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* LEFT */}
          <motion.div
            className="flex flex-col items-center text-center lg:w-2/5 "
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/img/home/picto-logo.png"
              alt="Pictoreal Logo"
              className="w-40 sm:w-44 lg:w-56"
              loading="lazy"
            />

            <p className="text-2xl sm:text-3xl text-amber-900 sub-heading-font font-medium">
              ‘ May Thoughts, Colours, and Words prevail! ’
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="lg:w-1/2 text-amber-900 body-font font-semibold"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="block md:hidden text-base sm:text-lg leading-relaxed text-center">
              Pictoreal is a non-technical club at PICT, Pune, that publishes the annual magazine with a unique theme each year. We foster creativity in literature, design, and photography through events like Pics-o-Reel, an art and photography exhibition, and Manthan, a public speaking platform. Our subgroup, Pictosocial, promotes social responsibility through donation drives and community service. We also conduct career counseling for students in remote areas, empowering PICT students to explore their creative potential.
            </p>

            <p className="hidden md:block text-lg lg:text-xl leading-relaxed text-justify">
              Pictoreal is a non-technical club at PICT that creates and publishes the annual magazine of PICT, Pune with a unique theme each year. We organize various events to foster creativity in literature, design, and photography while helping individuals build practical skills like event management, public speaking, and teamwork. Our key events include Pics-o-Reel, an annual art and photography exhibition-cum-competition, and Manthan, a platform for public speaking through extempore, debates, and group discussions. Pictosocial, a subgroup of Pictoreal, promotes social responsibility through tree plantation drives, blood donation and monetary donation drives, and visits to old-age homes or orphanages. We also conduct career counseling sessions for students in remote areas. At Pictoreal, we strive to inspire and empower students at PICT to explore their creative potential.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
