"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/app/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import isNotAuth from "@/app/components/isNotAuth";

const EARLY_BIRD_EVENTS = ["LRP", "PCF"];

const Cart = () => {
  const router = useRouter();

  const [earlyCode, setEarlyCode] = useState("");
  const [applied, setApplied] = useState(false);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState({
    event_amount: 0,
    photocopy_charges: 0,
    discount: 0,
    discounted_event_codes: [],
    total_amount: 0,
  });

  /* ---------------- HELPERS ---------------- */

  const resetAmount = () => {
    setAmount({
      event_amount: 0,
      photocopy_charges: 0,
      discount: 0,
      discounted_event_codes: [],
      total_amount: 0,
    });
    setApplied(false);
    setEarlyCode("");
    localStorage.removeItem("early_code");
  };

  const hasEligibleEvent = (cartItems) =>
    cartItems.some((item) =>
      EARLY_BIRD_EVENTS.includes(item.event_code)
    );

  /* ---------------- API CALLS ---------------- */

  const getCart = async () => {
    try {
      const res = await api.get("/cart/");
      setCart(res.data.data || []);
      return res.data.data || [];
    } catch {
      setCart([]);
      return [];
    }
  };

  const getAmount = async (code, cartItems) => {
    try {
      if (code && hasEligibleEvent(cartItems)) {
        const res = await api.post("/payment/apply-earlybird", { code });

        if (res.data.data.discounted_event_codes.length === 0) {
          resetAmount();
          return;
        }

        setAmount(res.data.data);
        setApplied(true);
        localStorage.setItem("early_code", code);
      } else {
        const res = await api.get("/payment/amount");
        setAmount(res.data.data);
        setApplied(false);
        localStorage.removeItem("early_code");
      }
    } catch {
      resetAmount();
    }
  };

  /* ---------------- EFFECT ---------------- */

  useEffect(() => {
    (async () => {
      const cartItems = await getCart();
      const savedCode = localStorage.getItem("early_code");

      if (savedCode && hasEligibleEvent(cartItems)) {
        setEarlyCode(savedCode);
        getAmount(savedCode, cartItems);
      } else {
        resetAmount();
      }
    })();
  }, []);

  /* ---------------- CART ACTIONS ---------------- */

  const refreshCartAndAmount = async () => {
    const updatedCart = await getCart();
    const savedCode = localStorage.getItem("early_code");

    if (savedCode && hasEligibleEvent(updatedCart)) {
      getAmount(savedCode, updatedCart);
    } else {
      resetAmount();
    }
  };

  const handleDelete = async (eventId) => {
    await api.delete("/cart/", { data: { event_id: eventId } });
    toast.success("Item removed");
    refreshCartAndAmount();
  };

  const handleEmpty = async () => {
    await api.delete("/cart/empty");
    toast.success("Cart emptied");
    resetAmount();
    setCart([]);
  };

  const updateQuantity = async (item, action) => {
    await api.patch("/cart/quantity", {
      event_id: item.id,
      photocopy_needed: item.photocopy_needed,
      action,
    });
    refreshCartAndAmount();
  };

  const handleProceed = () => {
    if (amount.total_amount > 0) router.push("/payment");
    else toast.error("Cart is empty");
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1a0b40] py-10">
      <div className="w-[90%] max-w-[500px] max-h-[85vh] bg-[#FFFCE0] rounded-3xl shadow-lg p-6 flex flex-col">

        <h1 className="text-5xl text-center heading-font text-[#1f4e3d] mb-4">
          CART
        </h1>

        {/* CART LIST */}
        <div className="flex-grow overflow-y-auto space-y-4 pr-2">
          {cart.length === 0 && (
            <p className="text-center text-[#1f4e3d] mt-10">
              Your cart is empty.
            </p>
          )}

          {cart.map((item) => {
            const hasPhotocopy = item.photocopy_needed;
            const base = (item.price + (hasPhotocopy ? 10 : 0)) * item.quantity;
            const isDiscounted = amount.discounted_event_codes.includes(item.event_code);
            const final = isDiscounted ? Math.max(base - 50, 0) : base;

            return (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  {item.event_category === "PICSOREEL" && (
                    <p className="text-sm">Entries: {item.quantity}</p>
                  )}
                </div>

                <div className="text-right">
                  {isDiscounted && (
                    <>
                      <p className="text-green-600 text-xs">Early Bird Applied</p>
                      <p className="line-through text-gray-400 text-xs">Rs. {base}</p>
                    </>
                  )}
                  <p className="font-bold">Rs. {final}</p>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 text-sm mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* EARLY BIRD */}
        <div className="mt-4 flex gap-2">
          <input
            value={earlyCode}
            onChange={(e) => setEarlyCode(e.target.value)}
            placeholder="Early Bird Code"
            className="border px-3 py-2 rounded-md flex-grow"
          />
          <button
            onClick={() => getAmount(earlyCode, cart)}
            disabled={!hasEligibleEvent(cart)}
            className="bg-green-600 text-white px-4 rounded-md disabled:opacity-50"
          >
            Apply
          </button>
        </div>

        {applied && (
          <p className="text-green-700 text-sm mt-1">Early Bird applied 🎉</p>
        )}

        {/* TOTAL */}
        <div className="text-center my-4">
          <h2 className="text-2xl font-bold">
            Total : Rs. {amount.total_amount}
          </h2>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-between">
          <button onClick={handleEmpty} className="text-red-600">
            Delete All
          </button>
          <button
            onClick={handleProceed}
            className="bg-green-600 text-white px-6 py-2 rounded-md"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default isNotAuth(Cart);
