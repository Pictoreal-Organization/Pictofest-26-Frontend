"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="
        relative
        w-full
        min-h-[120vh]
        px-4 sm:px-6
        pt-14 sm:pt-20
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ================= MOBILE HEADING ================= */}
      <motion.h2
        className="
          block md:hidden
          text-center
          text-4xl
          text-green-900
          heading-font
          mt-[5vh]         
          -mb-[10vh] 
        "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        About Us
      </motion.h2>

      {/* ================= MOBILE FRAME ================= */}
      <div
        className="
          block md:hidden
          relative
          w-full
          max-w-lg
          mx-auto
          mt-[10vh]
          bg-[url('/img/home/boxphn.svg')]
          bg-no-repeat
          bg-contain
          bg-center
          px-6
          pt-14
          pb-20
          min-h-[85vh]
        "
      >
        <AboutContent />
      </div>

      {/* ================= DESKTOP FRAME ================= */}
      <div
        className="
          hidden md:block
          relative
          w-full
          max-w-[1400px]
          mx-auto
          bg-[url('/img/home/box.svg')]
          bg-no-repeat
          bg-contain
          bg-center
          px-[5vw]
          pt-[10vh]
          mt-[8vh]
          min-h-[85vh]
        "
      >
        <AboutContent desktop />
      </div>
    </motion.section>
  );
};

/* ================= SHARED CONTENT ================= */
const AboutContent = ({ desktop = false }) => {
  return (
    <motion.div
      className="
        flex
        flex-col
        lg:flex-row
        items-center
        gap-8 lg:gap-20
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {/* LEFT */}
      <motion.div
        className="
          flex
          flex-col
          items-center
          text-center
          lg:w-2/5
        "
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/img/home/about_us_hat.svg"
          alt="Hat"
          className="hidden md:block -mb-[2vh]"
          loading="lazy"
        />

        <img
          src="/img/home/picto-logo.png"
          alt="Pictoreal Logo"
          className="w-28 sm:w-32 md:w-44 lg:w-[38vh] mt-[5vh]"
          loading="lazy"
        />

        <p className="mt-6 text-lg sm:text-xl text-amber-900 sub-heading-font font-medium">
          ‘ May Thoughts, Colours,
          <br className="hidden md:block" />
          and Words prevail! ’
        </p>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="
          lg:w-1/2
          text-amber-900
          body-font
          font-semibold
          text-center
          lg:text-justify
        "
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* DESKTOP HEADING aligned with paragraph */}
        {desktop && (
          <motion.h2
        className="
          hidden md:block
          text-center
          text-5xl 
          text-green-900
          heading-font
          mb-6         
        "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        About Us
      </motion.h2>
        )}

        {/* MOBILE TEXT */}
        <p className="block md:hidden text-xl sm:text-base leading-relaxed">
          Pictoreal is a non-technical club at PICT, Pune, that publishes the
          annual magazine with a unique theme each year. We foster creativity
          in literature, design, and photography through events like
          Pics-o-Reel and Manthan. Pictosocial promotes social responsibility
          through donation drives and community service.
        </p>

        {/* DESKTOP TEXT */}
        <p className="hidden md:block text-base lg:text-xl leading-relaxed">
          Pictoreal is a non-technical club at PICT that creates and publishes
          the annual magazine of PICT, Pune with a unique theme each year. We
          organize various events to foster creativity in literature, design,
          and photography while helping individuals build practical skills like
          event management, public speaking, and teamwork. Our key events
          include Pics-o-Reel and Manthan. Pictosocial promotes social
          responsibility through social initiatives. At Pictoreal, we strive
          to inspire and empower students at PICT to explore their creative
          potential.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
