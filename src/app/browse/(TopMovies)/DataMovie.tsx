"use client";
import { titan_one } from "@/app/font";
import PopupHover from "@/components/Commons/HoverCardMovie";
import Link from "next/link";
import React, { FC, useState } from "react";

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

  return (
    <Link
      href={`browse/${id}`}
      key={index}
      className={`w-full grid grid-cols-2 gap-x-2 items-center relative`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`${titan_one.className} text-[180px] text-gray-300 drop-shadow-2xl shadow-orange-700 z-10 translate-x-4 `}
      >
        {index + 1}
      </div>
      <div className="h-44 w-[110%] z-10 -translate-x-5">
        <img
          className="w-full h-full rounded-md"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
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
    </Link>
  );
};

export default MoviesData;
