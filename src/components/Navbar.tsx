"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY === 0;
      setIsScroll(!atTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-16 px-5 ${
        isScroll ? "bg-black" : "bg-transparent"
      } flex flex-row justify-between items-center transition ease-in-out duration-500 z-50`}
    >
      <div className="flex flex-row gap-x-4 items-center">
        <div className="w-40">
          <Image
            src="/image/logo.png"
            alt="Logo Netflix"
            width={600}
            height={600}
          />
        </div>
        <div>
          <ul className="flex flex-row text-[14px] gap-x-5">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/"}>
              <li>TV Shows</li>
            </Link>
            <Link href={"/"}>
              <li>Movies</li>
            </Link>
            <Link href={"/"}>
              <li>New & Popular</li>
            </Link>
            <Link href={"/"}>
              <li>My List</li>
            </Link>
            <Link href={"/"}>
              <li>Browse by Languages</li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex flex-row text-[14px] gap-x-5 items-center mr-5 relative">
          <li>
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </li>
          <li>Kids</li>
          <li>
            <i className="fa-regular fa-bell text-lg"></i>
          </li>
          <li
            className="flex flex-row gap-x-3 items-center relative h-full"
            onMouseEnter={() => setIsProfile(true)}
            onMouseLeave={() => setIsProfile(false)}
          >
            <div>
              <i className="fa-regular fa-user text-lg"></i>
            </div>
            <div>
              <i
                className={`fa-solid fa-caret-down transition ease-in-out ${
                  isProfile ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            {isProfile ? (
              <div
                className="absolute top-10 right-0 bg-black py-2 px-4 z-50"
                onMouseEnter={() => setIsProfile(true)}
                onMouseLeave={() => setIsProfile(false)}
              >
                <ul className="flex flex-col gap-y-3  w-full">
                  <li className="flex flex-row gap-x-3 items-center w-full">
                    <div>
                      <i className="fa-solid fa-pen"></i>
                    </div>
                    <div>Manage Profiles</div>
                  </li>
                  <li className="flex flex-row gap-x-3 items-center">
                    <div>
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <div>Account</div>
                  </li>
                  <li className="flex flex-row gap-x-3 items-center">
                    <div>
                      <i className="fa-regular fa-circle-question"></i>
                    </div>
                    <div>Help Center</div>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
