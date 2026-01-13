"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/app/api";
import isNotAuth from "@/app/components/isNotAuth";
import { motion } from "framer-motion"; 

const Card = ({ payment }) => {
  return (
    <div className="flex justify-center w-full">
      {/* OUTER CARD */}
      <div
        className="
          relative text-[#4E1F0A]
          w-full lg:w-[660px] min-h-[200px]
          bg-[radial-gradient(circle_at_center,#e1c79c_0%,#fac874_100%)]
          shadow-md px-4 md:px-8 pt-1 md:pt-3 pb-6
        "
      >
        <div className="absolute top-1 right-0.5 bottom-1 left-0.5 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <rect
              x="1"
              y="3"
              width="98"
              height="94"
              rx="1"
              ry="6"
              fill="none"
              stroke="#a77623"
              strokeWidth="2.7"
              strokeDasharray="6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        {/* CONTENT */}
        <div className="relative z-10 p-4 body-font">
          {/* STATUS RIBBON */}
          <div className="mb-3">
            <svg width="180" height="42" viewBox="0 0 180 42">
              <path
                d="M 0 0 H 180 L 167 21 L 180 42 H 0 Z"
                fill={
                  payment.status === "APPROVED"
                    ? "#2C770B"
                    : payment.status === "PENDING"
                    ? "#ED7906"
                    : "#902808"
                }
              />
              <path
                d="M 3 3 H 177 L 164 21 L 177 39 H 3 Z"
                fill={
                  payment.status === "APPROVED"
                    ? "#23510E"
                    : payment.status === "PENDING"
                    ? "#D16800"
                    : "#702007"
                }
              />
              <path
                d="M 2 2 H 178 L 165 21 L 178 40 H 2 Z"
                fill="none"
                stroke={
                  payment.status === "APPROVED"
                    ? "#5C9E3E"
                    : payment.status === "PENDING"
                    ? "#FFAE05"
                    : "#C7610D"
                }
                strokeWidth="1.2"
                strokeDasharray="5 4"
              />
              <text
                x="75"
                y="27"
                textAnchor="middle"
                fill="#FEE8C3"
                fontWeight="700"
                letterSpacing="1.5"
                className="sub-heading-font text-md md:text-xl"
              >
                {payment.status}
              </text>
            </svg>
          </div>

          <div className="flex items-center space-x-2 mb-2">
            <p className="font-bold">Amount:</p>
            <p className="font-semibold">Rs. {payment.amount}</p>
          </div>

          <div className="flex items-center space-x-2 mb-2">
            <p className="font-bold">UTR ID:</p>
            <p className="font-semibold">{payment.transaction_id}</p>
          </div>

          <div className="flex space-x-2">
            <p className="font-bold">Events:</p>
            <p className="font-semibold">{payment.event_names.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentHistory = () => {
  const [payments, setPayments] = useState([
    {
      status: "APPROVED",
      amount: 300,
      transaction_id: "UTR123456789",
      event_names: ["Street Photography", "Nature Photography"],
    },
    {
      status: "PENDING",
      amount: 150,
      transaction_id: "UTR987654321",
      event_names: ["Cinematic Photography Workshop"],
    },
    {
      status: "REJECTED",
      amount: 200,
      transaction_id: "UTR555666777",
      event_names: ["Photo Walk Mumbai"],
    },
  ]);

  return (
    <div className="relative min-h-screen w-full">
      {/* --- FIXED BACKGROUND IMAGES --- */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {/* Desktop BG */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/img/common/desktop-bg.png"
            alt="Desktop Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Mobile BG */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/img/common/general-mobile-bg.png"
            alt="Mobile Background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* --- PAGE CONTENT --- */}
      <main className="relative z-10 py-8 lg:py-14 min-h-screen">
        <div className="flex flex-col max-w-4xl mx-auto pb-20">
          <h1 className="text-4xl lg:text-6xl heading-font text-center text-white mt-20 mb-10">
            Payment History
          </h1>

          <div className="flex flex-col w-full gap-8 px-4">
            {!payments || payments.length === 0 ? (
              <h2 className="text-2xl md:text-4xl uppercase text-center mt-48 text-[#f6edd8]">
                You haven't made any payments yet.
              </h2>
            ) : (
              payments.map((payment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card payment={payment} />
                </motion.div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentHistory;