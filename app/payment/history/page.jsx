"use client";

import { useEffect, useState } from "react";
import api from "@/app/api";
import isNotAuth from "@/app/components/isNotAuth";

const Card = ({ payment }) => {
  return (
    <div className="flex flex-col justify-center items-center body-font h-auto w-full">
      <div className="bg-[url('/img/cart/payment_history_mobile.png')] md:bg-[url('/img/cart/paymenthistory.png')] w-full  lg:w-[660px] h-[200px] bg-cover rounded-lg p-10">

        <div className="mt-2 md:mt-0">
        <div className="flex items-center space-x-2 justify-start mb-2">
          <p className="font-bold">Approval Status: </p>
          <p>{payment.status}</p>
        </div>
        <div className="flex items-center space-x-2 justify-start mb-2">
          <p className="font-bold">Amount: </p>
          <p>Rs. {payment.amount}</p>
        </div>
        <div className="flex items-center space-x-2 justify-start mb-2">
          <p className="font-bold">UTR ID: </p>
          <p>{payment.transaction_id}</p>
        </div>
        <div className="flex space-x-2 justify-start items-start">
          <p className="font-bold">Events: </p>
          <p>{payment.event_names.join(", ")}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

const PaymentHistory = () => {
  // const [payments, setPayments] = useState();

  // const getPayments = async () => {
  //   try {
  //     const response = await api.get("/payment/order");
  //     setPayments(response.data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getPayments();
  // }, []);

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
    <main className="bg-[url('/img/sponsor/background.png')] bg-cover py-8 lg:py-14 min-h-screen">
      <div className="text-justify text-neutral-800 flex flex-col max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-5xl heading-font text-center text-[#5A2509] mt-20 mb-6">
          Payment History
        </h1>
        <div className="flex flex-col w-full gap-8 px-2 md:px-4">
          {!payments && (
            <h2 className="text-2xl md:text-4xl description-font uppercase mb-2 text-center mt-48 text-[#f6edd8]">
              You haven't made any payments yet.
            </h2>
          )}
          {payments &&
            payments.map((payment, index) => (
              <Card key={index} payment={payment} />
            ))}
        </div>
      </div>
    </main>
  );
};

// export default isNotAuth(PaymentHistory);
export default PaymentHistory;
