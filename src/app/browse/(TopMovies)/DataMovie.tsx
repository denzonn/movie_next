"use client";
import { titan_one } from "@/app/font";
import DetailTopMovie from "@/components/BrowsePage/ModalCard";
import PopupHover from "@/components/Commons/HoverCardMovie";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

interface MoviesDataProps {
  id?: string;
  index: number;
  poster_path?: string;
  backdrop_path?: string;
}

const MoviesData: FC<MoviesDataProps> = ({
  id,
  index,
  poster_path,
  backdrop_path,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const searchParams = useSearchParams();
  const pathname = searchParams.get('jbtv')

  useEffect(() => {
    const getPathname = () => {
      if (pathname === null) {
        setIsDetail(false);
      }
    };

    getPathname();
  }, [pathname]);

  return (
    <Link
      href={`browse?jbtv=${id}`}
      key={index}
      className={`w-full grid grid-cols-2 gap-x-2 items-center relative`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      scroll={false}
      onClick={() => setIsDetail(true)}
    >
      <div
        className={`${titan_one.className} text-[180px] text-gray-300 drop-shadow-2xl shadow-orange-700 z-10 translate-x-4 `}
      >
        {index + 1}
      </div>
      <div className="h-44 w-[110%] z-10 -translate-x-5">
        {/* <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          className="w-full h-full object-cover rounded-md"
          width={500}
          height={500}
          alt="Movies"
        /> */}
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div>
        {isHover ? (
          <PopupHover
            className={index === 0 ? "left-0" : index === 5 ? "right-0" : ""}
            image={backdrop_path}
            id={id}
          />
        ) : null}
      </div>
      {isDetail ? <DetailTopMovie /> : null}
    </Link>
  );
};

export default MoviesData;
