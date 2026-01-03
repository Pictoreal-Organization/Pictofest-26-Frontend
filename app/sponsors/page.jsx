"use client";

import { useEffect } from "react";

const Sponsors = () => {
  const sponsor = [
    {
      title: "TITLE SPONSOR",
      name: "Time International",
      imgSrc: "/img/sponsor/TIME logo.webp",
      webSrc: "https://www.time4education.com/",
    },
    {
      title: "GAME PARTNER",
      name: "KING OF GAME",
      imgSrc: "/img/sponsor/kog pune.png",
      webSrc: "https://www.kingofgame.in/index.html",
    },
    // {
    //   title: "OVERSEAS EDUCATION PARTNER",
    //   name: "EDWISE",
    //   imgSrc: "/img/sponsor/edwise logo.jpeg",
    //   webSrc: "https://www.edwiseinternational.com/",
    // },
    {
      title: "SNACK PARTNER",
      name: "GURUKRUPA BUDHANI BROS",
      imgSrc: "/img/sponsor/BUDHANI.png",
      webSrc: "https://gurukrupabudhanibrothers.com/",
    },
    {
      title: "FOOD PARTNER",
      name: "PIZZA BURST",
      imgSrc: "/img/sponsor/Pizza burst.png",
      webSrc: "https://www.instagram.com/pizza_burst_pune",
    },
    {
      title: "YOUTH PARTNER",
      name: "CAMPUS TIMES",
      imgSrc: "/img/sponsor/CAMPUSTIMES.jpg",
      webSrc: "https://www.campustimespune.com/",
    },
    {
      title: "YOUTH MEDIA PARTNER",
      name: "YOUTH INC",
      imgSrc: "/img/sponsor/youth inc.png",
      // webSrc: "/",
    },
    {
      title: "PIZZA PARTNER",
      name: "PIZZA WINDOW",
      imgSrc: "/img/sponsor/pizza window.png",
      webSrc: "https://www.instagram.com/thepizzawindoww",
    },
    {
      title: "BLOG PARTNER",
      name: "EDTIMES",
      imgSrc: "/img/sponsor/edtimes logo.png",
      // webSrc: "/",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[url('/img/sponsor/background.png')] bg-cover bg-size-[100%_100%] bg-center py-8 lg:py-14 flex flex-col items-center min-h-screen">
        {/* Title */}
        <div className="text-center heading-font text-[50px] md:text-[70px] mb-[60px] md:mb-[80px] mt-20">
          OUR SPONSORS
        </div>

        {/* Sponsors Section */}
        <div className="flex flex-col gap-10 md:mb-20 mb-20 md:gap-0 items-center">
          {/* Title Sponsor */}
          <div className="relative md:mb-24 mb-10">
            <div className="body-font text-center text-[25px] lg:text-[35px] absolute w-[250px] lg:w-[350px] -translate-y-[30%] left-[50%] -translate-x-[50%]">
              {sponsor[0].title}
            </div>
            <div className="relative">
              <img
                src="/img/sponsor/Frame.svg"
                className="lg:w-[500px] sm:w-[400px] w-[330px]"
              />
              <img
                src={sponsor[0].imgSrc}
                alt={sponsor[0].name}
                className="absolute top-[43%] left-[48%] -translate-x-[50%] -translate-y-[50%] w-[180px] lg:w-[230px] cursor-pointer"
                onClick={() =>
                  sponsor[0].webSrc && window.open(sponsor[0].webSrc, "_blank")
                }
              />
              {/* Adjusted text alignment for TIME INTERNATIONAL */}
              <div className="absolute w-[120px] sm:w-[150px] lg:w-[200px] top-[63%] left-[48%] -translate-x-[50%] flex justify-center description-font text-[20px] lg:text-4xl text-center font-semibold">
                {sponsor[0].name}
              </div>
            </div>
          </div>

          {/* Other Sponsors */}
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-20 md:gap-y-28 gap-y-20 px-4">
            {sponsor.slice(1).map((data) => (
              <div key={data.name} className="relative">
                <div className="body-font text-center text-[25px] lg:text-[35px] absolute w-[250px] lg:w-[350px] -translate-y-[40%] left-[50%] -translate-x-[50%]">
                  {data.title}
                </div>
                <div className="relative">
                  <img
                    src="/img/sponsor/Frame.svg"
                    className="lg:w-[400px] sm:w-[300px] w-[280px]"
                  />
                  <img
                    src={data.imgSrc}
                    alt={data.name}
                    className={`absolute top-[43%] left-[48%] -translate-x-[50%] -translate-y-[50%] cursor-pointer ${
                      data.name === "CAMPUS TIMES"
                        ? "w-[100px] lg:w-[130px]" // Smaller size for CAMPUS TIMES
                        : data.name === "PIZZA WINDOW"
                        ? "w-[90px] lg:w-[110px] top-[45%]" // Smaller size and shifted down for PIZZA WINDOW
                        : "w-[130px] lg:w-[180px]" // Default size for others
                    }`}
                    onClick={() =>
                      data.webSrc && window.open(data.webSrc, "_blank")
                    }
                  />
                  {/* Adjusted text alignment and boldness for sponsor names */}
                  <div
                    className={`absolute w-[150px] lg:w-[200px] left-[48%] -translate-x-[50%] flex justify-center description-font text-[16px] lg:text-[22px] text-center font-semibold ${
                      data.name === "PIZZA WINDOW"
                        ? "top-[72%]" // Shift text down for PIZZA WINDOW
                        : data.name === "GURUKRUPA BUDHANI BROS"
                        ? "top-[62%]" // Move text slightly higher for GURUKRUPA BUDHANI BROS
                        : data.name === "EDTIMES"
                        ? "top-[71%]"
                        : "top-[68%]" // Default position for others
                    }`}
                  >
                    {data.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
