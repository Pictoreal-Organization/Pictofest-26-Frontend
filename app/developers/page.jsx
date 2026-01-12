import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      name: "Adwaiy Deshpande",
      imgSrc: "/img/developer/adwaiy.png",
      github: "https://github.com/Vampire-js",
      linkedin: "https://www.linkedin.com/in/adwaiy-deshpande-159931222/",
    },
    {
      name: "Aarya Patel",
      imgSrc: "/img/developer/aarya.jpg",
      github: "https://github.com/AARYA855",
      linkedin: "https://www.linkedin.com/in/patelaarya2005/",
    },
    {
      name: "Aditya Tidake",
      imgSrc: "/img/developer/AdityaTidake.jpg",
      github: "https://github.com/AdityaTidake",
      linkedin: "https://www.linkedin.com/in/aditya-tidake-977504292/",
    },
    {
      name: "Aryan Kadu",
      imgSrc: "/img/developer/aryanKadu.jpg",
      github: "https://github.com/AryanKadu",
      linkedin: "https://www.linkedin.com/in/aryan-kadu-648369295/",
    },
    {
      name: "Khanak Kumar",
      imgSrc: "/img/developer/khanak.jpg",
      github: "https://github.com/KhanakKumar",
      linkedin: "https://www.linkedin.com/in/khanak-kumar-133a1226b/",
    },
    {
      name: "Madhura Deshmukh",
      imgSrc: "/img/developer/madhura.jpg",
      github: "https://github.com/madhura0805",
      linkedin: "https://www.linkedin.com/in/madhura-deshmukh-0692a5277/",
    },
    {
      name: "Manas Gawali",
      imgSrc: "/img/developer/ManasGawali.jpg",
      github: "https://github.com/ManasGawali",
      linkedin: "https://www.linkedin.com/in/manas-gawali-ab000128b/",
    },
    {
      name: "Manas Yeola",
      imgSrc: "/img/developer/manasYeola.jpg",
      github: "https://github.com/ManasYeola",
      linkedin: "https://www.linkedin.com/in/manas-yeola-885970291/",
    },
    {
      name: "Riddhi Lahare",
      imgSrc: "/img/developer/riddhi.jpg",
      github: "https://github.com/riddhilahare14",
      linkedin: "https://www.linkedin.com/in/riddhi-lahare-9ab737301/",
    },
    {
      name: "Sakshi Narkhede",
      imgSrc: "/img/developer/sakshi.jpg",
      github: "https://github.com/sakshi-3105",
      linkedin: "https://www.linkedin.com/in/sakshi-narkhede-2618b5291/",
    },
    {
      name: "Sanavi Kulkarni ",
      imgSrc: "/img/developer/sanaviKulkarni.jpg",
      github: "https://github.com/Sanavi05",
      linkedin: "https://www.linkedin.com/in/sanavikulkarni/",
    },
    {
      name: "Trishit Guin",
      imgSrc: "/img/developer/trishit.jpg",
      github: "https://github.com/trishit-guin",
      linkedin: "https://www.linkedin.com/in/trishit-guin/",
    },
    {
      name: "Tushar Talekar",
      imgSrc: "/img/developer/tushar.jpg",
      github: "https://github.com/TusharTalekar",
      linkedin: "https://www.linkedin.com/in/tushar-talekar-a749b4289/",
    },
    {
      name: "Vihan Wani",
      imgSrc: "/img/developer/vihan.jpg",
      github: "https://github.com/VIHAN-07",
      linkedin: "https://www.linkedin.com/in/vihan-wani-b8b334316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Aashlesh Wawge",
      imgSrc: "/img/developer/ashlesh.jpg",
      github: "https://github.com/AashleshWawge",
      linkedin: "https://www.linkedin.com/in/aashlesh-wawge-928a12277/",
    },
    {
      name: "Atharva Dhake",
      imgSrc: "/img/developer/atharvaDhake.jpeg",
      github: "https://github.com/Atharvadhake1",
      linkedin: "https://www.linkedin.com/in/atharva-dhake-155160258?trk=blended-typeahead",
    },
    {
      name: "Aryan Chavan",
      imgSrc: "/img/developer/AryanChavan.jpg",
      github: "https://github.com/aryan181004",
      linkedin: "https://www.linkedin.com/in/aryan-chavan-8522bb264/",
    },
    {
      name: "Kshitij Dhake",
      imgSrc: "/img/developer/kshitijDhake.png",
      github: "https://github.com/Ksdhake28",
      linkedin: "https://www.linkedin.com/in/kshitijdhake/",
    },
    {
      name: "Mansi Apet",
      imgSrc: "/img/developer/mansi2.jpg",
      github: "https://github.com/mansiapet",
      linkedin:
        "https://www.linkedin.com/in/mansi-apet?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ria Narode",
      imgSrc: "/img/developer/ria.jpg",
      github: "https://github.com/rianarode14",
      linkedin: "https://www.linkedin.com/in/ria-narode/",
    },
    {
      name: "Gaurav Waghmare",
      imgSrc: "/img/developer/gaurav.jpg",
      github: "https://github.com/gauravw66",
      linkedin: "https://www.linkedin.com/in/gaurav-waghmare-b9a656258/",
    },
  ];

  return (
    <> 
      {/* ============================================================
          1. DYNAMIC BACKGROUND LAYER
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
          />
        </div>
      </div>

      {/* ============================================================
          2. CONTENT SECTION
         ============================================================ */}
      <div className="relative z-10 pt-[90px] pb-20">
        {/* Title */}
        <div className="text-center heading-font text-[50px] md:text-[70px] mt-[35px] md:mb-[50px] text-white">
          OUR TEAM
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 px-4 md:px-10 min-h-screen">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative flex justify-center description-font"
            >
              <div>
                <div className="relative w-[250px] md:w-[235px] lg:w-[335px] flex flex-col items-center">
                  {/* Profile Image*/}
                  <div className="absolute top-100/215 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden z-0">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/*Frame */}
                  <div className="relative w-full z-10">
                    <img
                      src="/img/developer/frame.svg"
                      alt="frame"
                      className="w-full"
                    />
                  </div>
                
                  <div className="sub-heading-font absolute top-[73.9%] left-[52%] -translate-x-[50%] text-center text-xs md:text-xs lg:text-base whitespace-nowrap text-black z-20">
                    {member.name}
                  </div>

                </div>
                <div className="absolute top-[89%] left-[52%] -translate-x-[50%] flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 z-50">
                  <a
                    href={member.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-50 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <img
                      src="/img/developer/linkedin.svg"
                      alt="LinkedIn"
                      className="w-6 lg:w-8"
                    />
                  </a>
                  <a
                    href={member.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-50 hover:opacity-80 transition-opacity cursor-pointer"

                  >
                    <img
                      src="/img/developer/github.svg"
                      alt="GitHub"
                      className="w-6 lg:w-8"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;