"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/app/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import isNotAuth from "@/app/components/isNotAuth";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const router = useRouter();

  const getCart = async () => {
    try {
      const response = await api.get(`/cart/`);
      setCart(response.data.data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const getAmount = async () => {
    try {
      const response = await api.get(`/payment/amount`);
      setAmount(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCart();
    getAmount();
  }, []);

  const handleDelete = async (eventId, price) => {
    try {
      const response = await api.delete(`/cart/`, {
        data: { event_id: eventId },
      });
      toast.success(response.data.message);
      setCart((prev) => prev.filter((item) => item.id !== eventId));
      setAmount((prev) => prev - price);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  const handleEmpty = async () => {
    try {
      const response = await api.delete(`/cart/empty`);
      toast.success(response.data.message);
      setCart([]);
      setAmount(0);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  const handleProceed = async () => {
    if (amount > 0) {
      router.push("/payment");
    } else {
      toast.error("Cart is Empty!");
    }
  };

  return (
    <div className="pt-3 pb-20 min-h-screen p-4 flex justify-center bg-[url('/img/cart/bg-repeat.svg')]">
      <div className="bg-[url('/img/cart/bg-repeat.svg')] min-w-[320px] mt-4 sm:mt-16 w-auto md:p-4 sm:w-[800px]">
        <div className="flex flex-col bg-[url('/img/cart/cartbg.png')] h-[400px] bg-cover bg-center bg-no-repeat mb-8 md:h-[970px] md:mx-auto md:max-w-full px-4 lg:px-5 my-5 mt-24 md:mt-10">
          <div className="md:pt-24 sm:mt-10 pt-12 md:text-5xl text-2xl text-center heading-font">
            CART
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-5 md:mt-0 md:mx-28 px-5 md:py-5 gap-2">
            <div className="font-extrabold sm:text-2xl text-lg body-font col-span-3">
              Items
            </div>
            <div className="font-extrabold sm:text-2xl text-lg body-font col-span-2 sm:col-span-1">
              Price
            </div>

            {/* Scrollable container for items */}
            <div className="col-span-6 sm:col-span-5 max-h-[150px] md:max-h-[400px] overflow-y-auto pr-2">
              {cart &&
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-3 sm:grid-cols-3 items-center bg-[#FFDDB0] p-2 rounded-lg md:py-1 md:px-2 md:pb-2 description-font mb-2"
                  >
                    <div className="text-xs sm:text-base col-span-2 body-font">
                      {item.name}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-xs sm:text-lg">
                        Rs. {item.price}/-
                      </div>
                      <Image
                        onClick={() => handleDelete(item.id, item.price)}
                        width={25}
                        height={25}
                        src="/img/cart/cancel.svg"
                        alt="cancel"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-base sm:text-2xl text-center body-font my-1 sm:my-7">
              Total Amount Rs. {amount}/-
            </h2>

            <div className="flex pt-2 md:pt-4 pb-8 mx-auto gap-5 description-font">
              <button
                onClick={handleEmpty}
                className="bg-[#9C5E25] py-1 sm:px-5 px-2 text-xs sm:text-2xl shadow-lg text-[#FDEEAE] border border-black transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#7d4d20] hover:shadow-xl hover:text-[#FFF5CC]"
              >
                Delete All
              </button>
              <button
                onClick={handleProceed}
                className="bg-[#9C5E25] py-1 sm:px-5 px-2 shadow-lg text-xs sm:text-2xl text-[#FDEEAE] border border-black transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#7d4d20] hover:shadow-xl hover:text-[#FFF5CC]"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default isNotAuth(Cart);
