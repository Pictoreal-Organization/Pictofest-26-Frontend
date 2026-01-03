"use client";

import { useEffect, useState } from "react";
import isNotAuth from "@/app/components/isNotAuth";
import api from "@/app/api";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Order = () => {
  // const [events, setEvents] = useState([]);
  // const [picsoreel, setPicsoreel] = useState([]);
  // const [workshops, setWorkshops] = useState([]);
  // const [waLinks, setWhatsAppLinks] = useState([]);

  // const filterData = (data, category) => {
  //   return data.filter(
  //     (item) =>
  //       item.event_category &&
  //       item.event_category.toUpperCase() === category.toUpperCase()
  //   );
  // };

  // const getData = async () => {
  //   try {
  //     const response = await api.get("/userEvent/");
  //     const data = response.data.data;

  //     const wa_link_response = await api.get("/events");
  //     const wa_links = wa_link_response.data.data.map((event) => ({
  //       id: event.id,
  //       wa_link: event.wa_link,
  //     }));

  //     console.log("API Response - wa_links:", wa_links);
  //     console.log("API Response - user events:", data);

  //     const filteredWorkshops = filterData(data, "WORKSHOP");
  //     const filteredPicsoreel = filterData(data, "PICSOREEL");
  //     const filteredEvents = filterData(data, "EVENTS");

  //     console.log("Filtered Workshops:", filteredWorkshops);
  //     console.log("Filtered Picsoreel:", filteredPicsoreel);
  //     console.log("Filtered Events:", filteredEvents);

  //     setWorkshops(filteredWorkshops);
  //     setPicsoreel(filteredPicsoreel);
  //     setEvents(filteredEvents);
  //     setWhatsAppLinks(wa_links);
  //   } catch (err) {
  //     console.error("Error fetching data:", err);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const shouldDisplaySection = (data) => {
    return data && Array.isArray(data) && data.length > 0;
  };

  const getWhatsAppLink = (eventId) => {
    const link = waLinks.find((link) => link.id === eventId);
    return link ? link.wa_link : null;
  };
  
  const [picsoreel, setPicsoreel] = useState([
  {
    id: 1,
    name: "Street Photography",
    event_category: "PICSOREEL",
  },
  {
    id: 2,
    name: "Nature Photography",
    event_category: "PICSOREEL",
  },
]);

const [workshops, setWorkshops] = useState([
  {
    id: 3,
    name: "Cinematic Photography Workshop",
    event_category: "WORKSHOP",
  },
]);

const [events, setEvents] = useState([
  {
    id: 4,
    name: "Photo Walk Mumbai",
    event_category: "EVENTS",
  },
  {
    id: 5,
    name: "Portrait Challenge",
    event_category: "EVENTS",
  },
]);

const [waLinks, setWhatsAppLinks] = useState([
  {
    id: 1,
    wa_link: "https://wa.me/919999999999",
  },
  {
    id: 3,
    wa_link: "https://wa.me/918888888888",
  },
  {
    id: 4,
    wa_link: "https://wa.me/917777777777",
  },
]);


  return (
    <div className="bg-[url('/img/sponsor/background.png')] bg-cover bg-center text-[#644817] lg:py-14 py-8 min-h-screen">
      <div className="flex flex-col mt-10">
        <h1 className="heading-font text-5xl text-center mt-8 text-[#644817]">
          My Orders
        </h1>
        {!shouldDisplaySection(picsoreel) &&
          !shouldDisplaySection(workshops) &&
          !shouldDisplaySection(events) && (
            <h2 className="text-2xl md:text-4xl description-font uppercase mb-2 text-center mt-48">
              You haven't registered for any events yet.
            </h2>
          )}
      </div>
      <div className="flex flex-col lg:flex-row items-center px-4 justify-evenly w-full">
        <div className="mt-12 relative w-full max-w-3xl bg-cover bg-center p-5 md:p-8 rounded-lg shadow-lg flex flex-col items-center bg-[#FECF8D] border-[#644817] border-4 mb-5">
          {shouldDisplaySection(picsoreel) && (
            <div className="flex flex-col group text-center">
              <div className="w-auto mx-auto lg:mx-0 my-4">
                <h2 className="text-4xl description-font uppercase mb-2">
                  Pics-O-Reel
                </h2>
                <hr className="border-2 border-[#644817] w-2/5 group-hover:w-full rounded-full transition-all ease-in-out" />
              </div>
              <ol className="text-2xl body-font px-3 my-4 w-full">
                {picsoreel.map((event) => (
                  <li
                    key={event.id}
                    className="flex justify-between items-center w-full mb-2 gap-4"
                  >
                    {/* Left-aligned event name */}
                    <Link
                      href={`/individual/${event.id}`}
                      className="text-left"
                    >
                      {event.name}
                    </Link>

                    {/* Right-aligned WhatsApp button */}
                    {getWhatsAppLink(event.id) && (
                      <a
                        href={getWhatsAppLink(event.id)}
                        target="_blank"
                        className="border-2 border-[#644817] inline-flex items-center text-xl px-2 py-1 rounded-lg hover:bg-[#644817] hover:text-[#FDEEAE] transition-all ease-in-out duration-300"
                      >
                        JOIN <FaWhatsapp className="ml-1" />
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {shouldDisplaySection(workshops) && (
            <div className="flex flex-col group text-center mt-8">
              <div className="w-auto mx-auto lg:mx-0 my-4">
                <h2 className="text-4xl description-font uppercase mb-2">
                  Workshops
                </h2>
                <hr className="border-2 border-[#644817] w-2/5 group-hover:w-full rounded-full transition-all ease-in-out" />
              </div>
              <ol className="text-2xl body-font px-3 my-4 w-full">
                {workshops.map((event) => (
                  <li
                    key={event.id}
                    className="flex justify-between items-center w-full mb-2 gap-4"
                  >
                    {/* Left-aligned event name */}
                    <Link
                      href={`/individual/${event.id}`}
                      className="text-left"
                    >
                      {event.name}
                    </Link>

                    {/* Right-aligned WhatsApp button */}
                    {getWhatsAppLink(event.id) && (
                      <a
                        href={getWhatsAppLink(event.id)}
                        target="_blank"
                        className="border-2 border-[#644817] inline-flex items-center text-xl px-2 py-1 rounded-lg hover:bg-[#644817] hover:text-[#FDEEAE] transition-all ease-in-out duration-300"
                      >
                        JOIN <FaWhatsapp className="ml-1" />
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {shouldDisplaySection(events) && (
            <div className="flex flex-col group text-center mt-8">
              <div className="w-auto mx-auto lg:mx-0 my-4">
                <h2 className="text-4xl description-font uppercase mb-2">
                  Events
                </h2>
                <hr className="border-2 border-[#644817] w-2/5 group-hover:w-full rounded-full transition-all ease-in-out" />
              </div>
              <ol className="text-2xl body-font px-3 my-4 w-full">
                {events.map((event) => (
                  <li
                    key={event.id}
                    className="flex justify-between items-center w-full mb-2 gap-4"
                  >
                    {/* Left-aligned event name */}
                    <Link
                      href={`/individual/${event.id}`}
                      className="text-left"
                    >
                      {event.name}
                    </Link>

                    {/* Right-aligned WhatsApp button */}
                    {getWhatsAppLink(event.id) && (
                      <a
                        href={getWhatsAppLink(event.id)}
                        target="_blank"
                        className="border-2 border-[#644817] inline-flex items-center text-xl px-2 py-1 rounded-lg hover:bg-[#644817] hover:text-[#FDEEAE] transition-all ease-in-out duration-300"
                      >
                        JOIN <FaWhatsapp className="ml-1" />
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
        <div className="flex flex-col items-center space-x-4">
          <p className="text-[#644817] font-bold body-font text-xl">
            Submit Your Entries here :
          </p>
          <Link href="/submission">
            <button className="bg-[#fecf8d] mt-4 py-1 sm:px-5 px-2 text-xs sm:text-2xl shadow-lg text-[#FDEEAE] border border-black transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#fecf8d] hover:shadow-xl hover:text-[#FFF5CC]">
              <p className="text-neutral-800 font-bold body-font text-xl">
                My Submissions
              </p>
            </button>
          </Link>
        </div>
        <div className="flex flex-col py-4 justify-center items-center space-x-0 md:space-x-4">
          <p className="text-[#644817] font-bold body-font text-xl">
            Check Payment History here :
          </p>
          <Link href="/payment/history">
            <button className="bg-[#fecf8d] mt-4 py-1 sm:px-5 px-2 text-xs sm:text-2xl shadow-lg text-[#FDEEAE] border border-black transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#fecf8d] hover:shadow-xl hover:text-[#FFF5CC]">
              <p className="text-neutral-800 font-bold body-font text-xl">
                My Payments
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// export default isNotAuth(Order);
export default Order;
