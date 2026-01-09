"use client";

import api from "@/app/api";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
// import isNotAuth from "@/app/components/isNotAuth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const Payment = () => {
  const [amount, setAmount] = useState(450);
  const [transactionId, setTransactionId] = useState("");
  const router = useRouter();

  // const getAmount = async () => {
  //   try {
  //     const response = await api.get(`/payment/amount`);
  //     setAmount(response.data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getAmount();
  // }, []);

  // const handleSubmit = async () => {
  //   try {
  //     const response = await api.post(`/payment/`, {
  //       transaction_id: transactionId,
  //     });
  //     toast.success(response.data.message);
  //     router.push("/order");
  //   } catch (err) {
  //     console.log(err.response.data.message);
  //     toast.error(err.response.data.message);
  //   }
  // };

  const handleSubmit = () => {
  if (transactionId.length !== 12) {
    toast.error("Please enter a valid 12-digit UTR ID");
    return;
  }

  toast.success("Mock payment submitted successfully");
  router.push("/order");
};


  const handleTransactionIdChange = (event) => {
    setTransactionId(event.target.value);
  };

  return (
    
    <div className="bg-[url('/img/cart/bg.png')] flex flex-col justify-center">
      <div className="bg-[url('/img/cart/Rectangle.svg')] h-[400px] md:h-[600px] lg:h-[730px] mt-28 pr-8 bg-no-repeat bg-center bg-contain mx-auto w-full sm:w-3/5 pb-24 lg:p-4 lg:w-2/5 my-12">
        <div className="h-fit flex flex-col items-center justify-center lg:m-5 md:ml-4 lg:mr-12 mx-auto  rounded-xl">
          <div className="h-fit flex flex-col items-center justify-center lg:m-2 mx-auto lg:mt-0 mt-10 sm:w-3/5 md:w-auto rounded-xl px-10 lg:px-20 md:mt-20">
            <h1 className="lg:text-5xl text-[#235E53] heading-font uppercase lg:mt-5 mb-2 sm:mb-4 md:mb-2 lg:my-4">
              {" "}
              Make Payment
            </h1>
            <div className="w-[160px] md:w-[180px] lg:w-[190px]">
            <div className="border-2 lg:border-4 rounded-xl ml-2 sm:ml-0 border-[#4e3506] p-2">
              <QRCode
                size={150}
                value={`upi://pay?pa=sctrspuneintofcomput.62810390@hdfcbank&pn=PICTOREAL&am=${amount}&tn=PICTOFEST&cu=INR`}
                viewBox={`0 0 150 150`}
                className="ml-1 max-w-[95%] w-full sm:w-[95%] h-auto"
              />
            </div>
            </div>
            <h1 className="text-sm md:text-sm lg:text-xl ml-3 sm:ml-0 font-bold body-font mt-2 lg:my-3 ">
              Total Cart Amount: Rs. {amount}/-
            </h1>
            <h1 className="text-sm md:text-sm lg:text-xl ml-3 sm:ml-0 font-bold sm:mt-2 sm:mb-2 body-font">
              Enter 12 digit UTR ID:
            </h1>
            <input
              type="text"
              className="rounded-md md:p-2 ml-3 sm:ml-0 w-9/12 md:w-7/12 lg:w-4/5 sm:mt-2 md:mt-0 lg:mt-2 sm:mb-4 bg-[#FFEDD5]"
              value={transactionId}
              onChange={handleTransactionIdChange}
              maxLength={12}
            />

            <button
              className="bg-[#4E3506] ring-2 ring-[#7a6141] mx-auto body-font shadow-lg text-[#FFEDD5] rounded-md my-2 px-6 md:py-2 hover:scale-105 transition-transform ease-in-out"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* <ul className="text-base lg:text-2xl font-bold mt-2 mb-4 body-font">
            <li>
              <strong className="mb-2">Note:</strong>
              <ul className=" list-disc pl-5">
                <li>Scan the QR using any UPI App.</li>
                <li>
                  Enter correct 12 digit UTR ID, once submitted it cannot be
                  reverted.
                </li>
              </ul>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default (Payment);