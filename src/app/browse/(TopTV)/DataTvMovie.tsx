"use client";
import HoverCardTvMovie from "@/components/Commons/HoverCardTvMovie";
import Link from "next/link";
import React, { FC, useState } from "react";

interface DataTvMovieProps {
  backdrop_path?: string;
  id?: string;
  index?: number;
}

const DataTvMovie: FC<DataTvMovieProps> = ({ backdrop_path, id, index }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={`browse/${id}`}
      className={`w-full items-center relative`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="z-10">
        <img
          className="w-full h-full rounded-md"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        />
      </div>
      <div>
      {isHover ? (
        <HoverCardTvMovie
          className={index === 0 ? "left-0" : index === 5 ? "right-0" : ""}
          image={backdrop_path}
          id={id}
        />
      ) : null}
      </div>
    </Link>
  );
};

export default DataTvMovie;
