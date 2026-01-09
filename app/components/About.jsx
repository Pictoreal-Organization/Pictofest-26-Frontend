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
        px-4 sm:px-6
        pt-12 sm:pt-16
        justify-center
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HEADING INSIDE BOX */}
        <motion.h2
          className="
            block md:hidden
            text-center
            text-xl sm:text-2xl lg:text-3xl
            text-green-900
            heading-font
            mb-6 sm:mb-8
            mt-5
          "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          About Us
        </motion.h2>
      {/* SVG BACKGROUND WRAPPER */}
      <div
        className="
           relative
    max-w-7xl
    mx-auto
    w-full
    bg-[url('/img/home/boxphn.svg')]
    md:bg-[url('/img/home/box.svg')]
    bg-no-repeat
    bg-cover
    md:bg-contain
    px-6 sm:px-10 md:px-14
    py-8 sm:py-14 md:py-20
    md:mt-25
    md:mb-10
    flex items-center
    justify-center
    
        "
      >
        
        {/* CONTENT */}
        <motion.div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            gap-10 lg:gap-16
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* LEFT SIDE */}
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
              className="hidden md:block mb-4"
              loading="lazy"
            />

            <img
              src="/img/home/picto-logo.png"
              alt="Pictoreal Logo"
              className="w-28 sm:w-32 md:w-44 lg:w-52"
              loading="lazy"
            />

            <p className="mt-6 text-lg sm:text-2xl text-amber-900 sub-heading-font font-medium">
              ‘ May Thoughts, Colours,
              <br className="hidden md:block" />
              and Words prevail! ’
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          
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
            <motion.h2
          className="
            hidden md:block
            text-center
            text-xl sm:text-2xl lg:text-3xl
            text-green-900
            heading-font
            font-semibold
          "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          About Us
        </motion.h2>
            {/* MOBILE TEXT */}
            <p className="block md:hidden text-sm sm:text-base leading-relaxed">
              Pictoreal is a non-technical club at PICT, Pune, that publishes the
              annual magazine with a unique theme each year. We foster creativity
              in literature, design, and photography through events like
              Pics-o-Reel and Manthan. Pictosocial promotes social responsibility
              through donation drives and community service, empowering students
              to explore their creative potential.
            </p>

            {/* DESKTOP TEXT */}
            <p className="hidden md:block text-base lg:text-lg leading-relaxed">
              Pictoreal is a non-technical club at PICT that creates and publishes
              the annual magazine of PICT, Pune with a unique theme each year. We
              organize various events to foster creativity in literature, design,
              and photography while helping individuals build practical skills
              like event management, public speaking, and teamwork. Our key
              events include Pics-o-Reel, an annual art and photography
              exhibition-cum-competition, and Manthan, a platform for public
              speaking through extempore, debates, and group discussions.
              Pictosocial, a subgroup of Pictoreal, promotes social responsibility
              through tree plantation drives, blood donation and monetary
              donation drives, and visits to old-age homes or orphanages. We also
              conduct career counseling sessions for students in remote areas. At
              Pictoreal, we strive to inspire and empower students at PICT to
              explore their creative potential.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
