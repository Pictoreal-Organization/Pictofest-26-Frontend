"use client"

import ProfilePageCard from "../components/ProfilePageCard"
import { useAuth } from "../context/Auth"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Profile = () => {

    const { authState, isUserAuthenticated } = useAuth();

    const router = useRouter()
    useEffect(() => {
        if(!isUserAuthenticated()) router.push("/login") 
    }, [])

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat pt-20"
            style={{ backgroundImage: "url('/img/home/background.svg')" }}
        >

            <div className="p-5 lg:px-60">
                <div className="heading-font text-[#4E3506] text-3xl md:text-6xl md:py-10"> Heyy! {authState?.user?.first_name}                </div>
                <div className="grid grid-cols-12 gap-4 pt-5" >
                    <ProfilePageCard styles="md:col-span-4" route="/cart" icon="cart" title="MY CART" />
                    <ProfilePageCard styles="md:col-span-8" route="/payment/history" icon="payments" title="MY PAYMENTS" />
                    <ProfilePageCard styles="md:col-span-8" route="/order" icon="orders" title="MY ORDERS" />
                    <ProfilePageCard styles="md:col-span-4" route="/submission" icon="submissions" title="MY SUBMISSIONS" />
                    <ProfilePageCard styles="md:col-span-6" route="/wishlist" icon="wishlist" title="MY WISHLIST" />
                    <ProfilePageCard styles="md:col-span-6" route="/votes" icon="votes" title="MY VOTES" />
                    
                </div>
            </div>
        </div>
    )
}

export default Profile
