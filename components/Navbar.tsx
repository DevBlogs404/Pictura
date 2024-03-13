"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.webp";
import { ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef(null);

  function showCategories() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.outerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[10vh]  p-[18px] flex items-center justify-between  sticky top-0 ${
        isScrolled ? "bg-black" : "bg-[#2c2826]"
      }`}
    >
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={60} width={60} />
          </Link>
          <h1 className="text-2xl font-bold text-[#716b67]">Pictura</h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="py-1 px-2 rounded-md font-bold text-white  hover:bg-[#716b67] cursor-pointer ">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="py-1 px-2 rounded-md font-bold text-white  hover:bg-[#716b67] cursor-pointer ">
          <Link href={"/Explore"}>Explore</Link>
        </div>
        <div
          className="py-1 px-2 rounded-md font-bold text-white  hover:underline relative  "
          onMouseEnter={showCategories}
          onMouseLeave={showCategories}
        >
          <div className="flex items-center justify-center cursor-pointer ">
            Generate Images{" "}
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          <div
            className={`${
              isOpen ? " opacity-100 visible" : " opacity-0  invisible"
            } absolute right-0 top-full z-50 bg-black text-white  rounded transition-opacity duration-300`}
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              <li>
                <Link href={"/GenerateImage/random"} className="cursor-pointer">
                  Random
                </Link>
              </li>
              <li>
                <Link href={"/GenerateImage/logo"} className="cursor-pointer">
                  Logo
                </Link>
              </li>
              <li>
                <Link href={"/GenerateImage/anime"} className="cursor-pointer">
                  Anime
                </Link>
              </li>
              <li>
                <Link
                  href={"/GenerateImage/painting"}
                  className="cursor-pointer"
                >
                  Painting
                </Link>
              </li>
            </ul>
          </div>
          {/* TODO ===  categories --->   paintings, anime, random generations  */}
        </div>

        {/* <div className="py-1 px-2 rounded-md font-bold text-white  hover:bg-[#716b67] ">
          <Link href={"/"}>Anime</Link>
        </div> */}
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="py-1 px-2 rounded-md font-bold text-white  hover:bg-[#716b67] cursor-pointer ">
          <Link href={"/"}>About</Link>
        </div>
        <button className="border-none outline-none px-2 py-1 bg-[#716b67] hover:bg-[#554f4b] text-white font-bold rounded-md">
          Log In
        </button>
        <button className="hover:underline font-bold px-2 py-1 text-white  ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
