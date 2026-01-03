"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/Auth";
import Image from "next/image";
import { usePathname } from "next/navigation";
import api from "@/app/api";
import { toast } from "sonner";

// Common NavLink component
const NavLink = ({ href, text, size, onClick }) => {
  return (
    <Link href={href}>
      <p
        className={`body-font font-bold text-xl text-[#4E3506] px-1 ${size}`}
        onClick={onClick}
      >
        {text}
      </p>
    </Link>
  );
};

// Common Modal component
const CommonModal = ({ children, isOpen }) => (
  <div
    className={`text-sm absolute body-font bg-[#FFE7B9] w-3/5 md:2/5 lg:w-1/5 rounded-lg p-3 mr-8 right-0 items-center text-center transition-opacity transform ${
      isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"
    }`}
  >
    <div className="bg-[#FFE7B9] rounded-lg p-2 border-[3px] h-full border-dashed border-spacing-1 border-neutral-800">
      <div className="body-font">{children}</div>
    </div>
  </div>
);

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState(null);
  const { authState, isUserAuthenticated, setUserAuthInfo } = useAuth();
  const pathname = usePathname();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNavLinkClick = (path) => {
    setActiveNavLink(path);
    setIsModalOpen(false);
  };

  const handleLogout = async () => {
    try {
      const response = await api.post("/user/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUserAuthInfo({ token: "", user: {} });
      toast.success(response.data.message);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  const renderHamburgerIcon = () => (isModalOpen ? "✕" : "☰");

  const renderAuthButton = () => {
    const { authState, isUserAuthenticated } = useAuth();

    return isUserAuthenticated() ? (
      <Link href="/">
        <button className="text-white bg-[#FFEDD5] font-bold py-2 px-4 rounded-full mr-4">
          <p className="text-[#4E3506] font-bold uppercase text-lg lg:text-xl tracking-widest body-font">
            {authState?.user?.first_name}
          </p>
        </button>
      </Link>
    ) : (
      <div className="bg-[#FFE7B9] rounded-full p-1 mr-1">
        <Link href="/login">
          <button className="bg-[#fbe6be]  py-1 px-4  border-neutral-500 rounded-full body-font">
            <p className=" links-font text-xl text-[#4E3506]">Login</p>
          </button>
        </Link>
      </div>
    );
  };

  const desktopHamburgerLinks = (
    <div className="flex flex-col body-font uppercase text-neutral-700 justify-center items-center gap-3">
      <NavLink
        href="/profile"
        text="My Profile"
        size="text-lg"
        onClick={() => handleNavLinkClick("/profile")}
      />
      <NavLink
        href="/"
        text="Logout"
        size="text-lg"
        onClick={() => {
          handleLogout();
          handleNavLinkClick("/");
        }}
      />
    </div>
  );

  const mobileNavLinks = (
    <div className="flex flex-col bazar lg:hidden justify-center items-center gap-3">
      <NavLink href="/" text="Home" onClick={() => handleNavLinkClick("/")} />
      <NavLink
        href="/picsoreel"
        text="Pics-o-Reel"
        onClick={() => handleNavLinkClick("/picsoreel")}
      />
      <NavLink
        href="/manthan"
        text="Manthan"
        onClick={() => handleNavLinkClick("/developers")}
      />
      <NavLink
        href="/workshops"
        text="Workshops"
        onClick={() => handleNavLinkClick("/workshops")}
      />
      <NavLink
        href="/events"
        text="Events"
        onClick={() => handleNavLinkClick("/events")}
      />
      {/* <NavLink
        href="/voting"
        text="Voting"
        onClick={() => handleNavLinkClick("/voting")}
      /> */}
            <NavLink
        href="/sponsors"
        text="Sponsors"
        onClick={() => handleNavLinkClick("/sponsors")}
      />
      <NavLink
        href="/developers"
        text="Our Team"
        onClick={() => handleNavLinkClick("/developers")}
      />
      <NavLink
        href="/cart"
        text="Cart"
        onClick={() => handleNavLinkClick("/cart")}
      />
      <NavLink
        href="/wishlist"
        text="My Wishlist"
        onClick={() => handleNavLinkClick("/wishlist")}
      />

      {isUserAuthenticated() && (
        <>
          <NavLink
            href="/profile"
            text="My Profile"
            onClick={() => handleNavLinkClick("/profile")}
          />
          <NavLink
            href="/"
            text="Logout"
            onClick={() => {
              handleLogout();
              handleNavLinkClick("/");
            }}
          />
        </>
      )}
    </div>
  );

  const revealAnimation = `
  @keyframes reveal {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }
          .animate-reveal {
        
            animation: reveal .6s ease-in-out;
          }
  `;

  return (
    <>
      <style>{revealAnimation}</style>
      <div className="fixed w-full z-10 animate-reveal ">
        <div className="hidden lg:flex justify-center items-center p-2">
          {/* <img src="/img/home/navbar/nav_bg.svg" className="w-full" alt="" /> */}
          <div className="links  m-auto flex  lg:w-3/4 px-16 justify-around items-center p-5  bg-[url('/img/home/navbar/nav_bg.svg')] bg-center bg-no-repeat bg-cover">
            <NavLink
              href="/"
              text="HOME"
              size="text-2xl"
              onClick={() => handleNavLinkClick("/")}
            />
            <NavLink
              href="/picsoreel"
              text="PICS-O-REEL"
              size="text-2xl"
              onClick={() => handleNavLinkClick("/picsoreel")}
            />
            <NavLink
              href="/workshops"
              text="WORKSHOPS"
              size="text-2xl"
              onClick={() => handleNavLinkClick("/workshops")}
            />
            <NavLink
              href="/events"
              text="EVENTS"
              size="text-2xl"
              onClick={() => handleNavLinkClick("/events")}
            />
            {/* <NavLink
              href="/voting"
              text="VOTING"
              size="text-2xl"
              onClick={() => handleNavLinkClick("/voting")}
            /> */}
                        <NavLink
              href="/sponsors"
              text="SPONSORS"
              size="text-2xl"
              onClick={() => handleNavLinkClick("/sponsors")}
            />
            {/* <NavLink
              href="/developers"
              text="DEVELOPERS"
              size="text-2xl"
              onClick={() => handleNavLinkClick("/developers")}
            /> */}
            <NavLink
              href="/cart"
              text="CART"
              onClick={() => handleNavLinkClick("/cart")}
            />
            <NavLink
              href="/wishlist"
              text="WISHLIST"
              onClick={() => handleNavLinkClick("/wishlist")}
            />

            <div className="flex items-center">
              {renderAuthButton()}
              {isUserAuthenticated() && (
                <div className="bg-orange-100 hover:scale-105 transition-all rounded-full p-2">
                  <button
                    className="text-2xl text-[#4E3506] font-bold py-1 px-2 rounded-md block transition-transform transform ease-in-out duration-300"
                    onClick={toggleModal}
                  >
                    {renderHamburgerIcon()}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="flex lg:hidden justify-between items-center p-2">
            {/* Logo aligned to the left */}
            <Link href="/">
              <img
                src="/img/home/pictofest_logo.png"
                alt="Logo"
                className="w-28 cursor-pointer"
              />
            </Link>

            {/* Wrapper div for elements aligned to the right */}
            <div className="flex items-center gap-3">
              {renderAuthButton()}
              <div className="bg-orange-100 hover:scale-105 transition-all rounded-full p-2">
                <button
                  className="text-2xl text-[#4E3506] font-bold py-1 px-2 rounded-md block transition-transform transform ease-in-out duration-300"
                  onClick={toggleModal}
                >
                  {renderHamburgerIcon()}
                </button>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <CommonModal isOpen={isModalOpen}>
            <div className="hidden lg:block">
              {isUserAuthenticated() ? desktopHamburgerLinks : <div></div>}
            </div>
            <div className="lg:hidden"> {mobileNavLinks} </div>
          </CommonModal>
        )}
      </div>
    </>
  );
};

export default Navbar;
