"use client";
import PopupHover from "@/components/Commons/HoverCardMovie";
import Link from "next/link";
import React, { FC, useState } from "react";

interface MovieWishlistDataProps {
  data?: [];
  index: number;
}

const MovieWishlistData: FC<MovieWishlistDataProps> = ({ data, index }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={`${data?.id}`}
      className="w-full h-full relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
        alt=""
        className="w-full rounded-sm"
      />

      {isHover ? (
        <PopupHover
          className={
            index % 6 === 0 ? "left-0" : index % 5 === 0 ? "right-0" : ""
          }
          image={data?.backdrop_path}
          id={data?.id}
        />
      ) : null}
    </Link>
  );
};

export default MovieWishlistData;
