"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import api from "@/app/api";
import { FaCartShopping } from "react-icons/fa6";

const EventCard = ({ data }) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/individual/${data.id}`);
  };

  const handleAddToCart = async () => {
    try {
      const response = await api.post(`/cart/`, { event_id: data.id });
      toast.success(response.data.message);
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <div className="bg-[url('/img/events/event_card.svg')] bg-cover lg:flex p-12 w-full gap-10 hidden ">
        <div className="bg-[url('/img/events/event_logo_bg.svg')] bg-cover flex justify-center items-center p-16 mt-5 ml-5 w-1/4">
          <Image
            loading="lazy"
            zzz
            className="invert ml-3"
            src={data?.logo_link}
            width={200}
            height={200}
            alt={data?.name}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-2/4 gap-5">
          <h2 className="body-font font-semibold text-2xl text-center text-[#67230F]">
            {data?.name}
          </h2>
          {/* <h3 className="body-font font-bold text-xl"></h3> */}
          <div
            className="border-4 border-[#67230F] rounded-full px-10 py-1 bg-[#FCE8B2] body-font text-[#67230F] cursor-pointer"
            onClick={handleReadMore}
          >
            Read More
          </div>

          <div
            className="bg-[#67230F] border-4 border-[#BE8752] px-8 py-1 rounded-lg cursor-pointer"
            onClick={handleAddToCart}
          >
            <span className="text-white">
              {data?.price ? (
                <FaCartShopping className="text-white" />
              ) : (
                "Register"
              )}
            </span>
          </div>
        </div>
        <div className="w-1/4 flex flex-col justify-center items-center gap-4 pl-10">
          <div className="body-font text-3xl w-full text-center text-[#67230F]">
            Registration Fee <br />
            {data.name === "Texture Art + Neon fluid painting"
              ? `Rs. ${data.price}/- (PAIR)`
              : data.price
              ? `Rs. ${data.price}/-`
              : "Free"}
          </div>
        </div>
      </div>

      <div className="bg-[url('/img/events/event_card_mobile.png')] bg-cover w-full h-[100px] flex lg:hidden">
        <div className="bg-[url('/img/events/event_logo_bg.svg')] bg-contain bg-center bg-no-repeat flex justify-center items-center w-[100px] ml-8 mt-4">
          <Image
            className="invert mb-1"
            src={data?.logo_link}
            width={25}
            height={25}
            alt={data?.name}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-3/4 mt-4 gap-1">
          <h2
            className={`mr-2 body-font text-center ${
              data.name === "Texture Art + Neon fluid painting"
                ? "text-[10px]"
                : "text-xs"
            }`}
          >
            {data.name}
          </h2>
          <div className="w-full flex justify-center items-center flex-col gap-1">
            {/* <h3 className="body-font font-bold text-sm text-center">
            Read <br />
            More
          </h3> */}
            <div className="border-2 border-[#67230F] rounded-full px-4 py-0.5 bg-[#FCE8B2] body-font text-[#67230F] text-xs">
              <button className="text-xs" onClick={handleReadMore}>
                Read More
              </button>
            </div>
            <div className="bg-[#67230F] border-2 border-[#BE8752] px-6 py-0.5 rounded-lg text-[10px]">
              <button className="text-white" onClick={handleAddToCart}>
                {data?.price ? (
                  <FaCartShopping className="text-white" />
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col justify-center items-center mr-3">
          <div className="body-font text-sm w-full text-center text-[#67230F] mt-5 mr-4">
            Price <br />
            {data.name === "Texture Art + Neon fluid painting"
              ? `Rs. ${data.price}/- (DUO)`
              : data.price
              ? `Rs. ${data.price}/-`
              : "Free"}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;

