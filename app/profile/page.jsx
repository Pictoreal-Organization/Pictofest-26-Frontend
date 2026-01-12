"use client";

import ProfilePageCard from "../components/ProfilePageCard"
//import { useAuth } from "../context/Auth"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const Profile = () => {

    //const { authState, isUserAuthenticated } = useAuth();

    // const router = useRouter()
    // useEffect(() => {
    //     if(!isUserAuthenticated()) router.push("/login") 
    // }, [])

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div 
                className="fixed top-0 left-0 w-full h-full -z-20 bg-cover bg-center bg-no-repeat
                bg-[url('/img/common/general-mobile-bg.png')]
                md:bg-[url('/img/common/desktop-bg.png')]"
            />
            <motion.div 
                className="hidden md:block fixed bottom-0 left-0 w-full z-0 pointer-events-none"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.8, 
                    delay: 0, 
                    ease: [0.22, 1, 0.36, 1] 
                }}
            >
                <div className="relative w-full h-72">
                    <Image
                        src="/img/events/city_26.svg"
                        alt="City Skyline"
                        fill
                        className="object-contain object-bottom "
                        priority
                    />
                </div>
            </motion.div>

            <motion.div 
                className="relative z-10 p-5 lg:px-60 pt-20 pb-20"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }} 
            >
                <div className="heading-font text-white text-2xl sm:text-3xl md:text-6xl md:py-10 text-left md:text-center ">
                    Hola! Hemangi
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 max-w-6xl mx-auto">
                    {/* Cart */}
                    <ProfilePageCard
                        route="/cart"
                        image="/img/profile/cart.svg"
                        title="MY CART"
                        styles="order-1 md:order-1"
                    />

                    {/* Payment */}
                    <ProfilePageCard
                        route="/payment/history"
                        image="/img/profile/payment.svg"
                        title="MY PAYMENTS"
                        styles="order-2 md:order-2"
                    />

                    {/* Orders */}
                    <ProfilePageCard
                        route="/order"
                        image="/img/profile/orders.svg"
                        title="MY ORDERS"
                        styles="order-3 md:order-4"
                    />

                    {/* Submissions */}
                    <ProfilePageCard
                        route="/submission"
                        image="/img/profile/submission.svg"
                        title="MY SUBMISSIONS"
                        styles="order-4 md:order-3"
                    />

                    {/* Votes */}
                    <div className="md:col-span-2 flex justify-center order-5">
                        <ProfilePageCard
                            route="/votes"
                            image="/img/profile/votes.svg"
                            title="MY VOTES"
                            styles="w-full md:w-[48%]"
                        />
                    </div>
                </div>
            </motion.div>
        </main>
    )
}

export default Profile