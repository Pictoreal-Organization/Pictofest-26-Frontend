"use client"

import ProfilePageCard from "../components/ProfilePageCard"
//import { useAuth } from "../context/Auth"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Profile = () => {

    //const { authState, isUserAuthenticated } = useAuth();

    // const router = useRouter()
    // useEffect(() => {
    //     if(!isUserAuthenticated()) router.push("/login") 
    // }, [])

    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-20 overflow-x-hidden md:pb-52
            bg-[url('/img/common/general-mobile-bg.png')]
            md:bg-[url('/img/common/general-desktop-bg.png')]"
        >
            <div className="p-5 lg:px-60">
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
            </div>

            {/* Desktop skyline only */}
            <div className="absolute bottom-0 left-0 w-full hidden md:block pointer-events-none">
                <Image
                    src="/img/events/city_26.svg"
                    alt="City Skyline"
                    width={1920}
                    height={320}
                    className="w-full object-cover"
                />
            </div>
        </div>
    )
}

export default Profile
