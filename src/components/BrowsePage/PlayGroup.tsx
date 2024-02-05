"use client";
import Link from "next/link";
import { FC, useState } from "react";

interface PlayGroupProps {
  getMovieLink: string;
}

const PlayGroup: FC<PlayGroupProps> = ({ getMovieLink }) => {
  const [isPlaylist, setIsPlaylist] = useState(false);
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="mt-4 flex flex-row gap-x-3 items-center relative">
      <Link
        href={`https://www.youtube.com/watch?v=${getMovieLink}`}
        target="_blank"
        className="bg-white text-black px-6 py-2 flex flex-row items-center justify-center rounded-md"
      >
        <span className="mr-2">
          <i className="fa-solid fa-play text-black text-xl"></i>
        </span>{" "}
        <span className="font-semibold">Play</span>
      </Link>
      <div
        className="bg-[#2a2a2a99] p-3 flex flex-row justify-center items-center rounded-full border border-gray-200 hover:border-white relative"
        onMouseEnter={() => setIsPlaylist(true)}
        onMouseLeave={() => setIsPlaylist(false)}
      >
        <i className="fa-solid fa-plus text-white"></i>
        {isPlaylist ? (
          <div className="relative shadow-md">
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-lg bg-gray-100 px-4 py-1 w-44 flex justify-center rounded-md text-black font-semibold">
              Add to My List
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 border-gray-100 border-t-8 border-l-8 border-r-8 border-r-transparent border-l-transparent"></div>
          </div>
        ) : null}
      </div>
      <div
        className="bg-[#2a2a2a99] p-3 flex flex-row justify-center items-center rounded-full border border-gray-200 hover:border-white relative"
        onMouseEnter={() => setIsLike(true)}
        onMouseLeave={() => setIsLike(false)}
      >
        <i className="fa-solid fa-thumbs-up text-white"></i>
        {isLike ? (
          <div className="relative shadow-md">
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-lg bg-gray-100 px-4 py-1 w-32 flex justify-center rounded-md text-black font-semibold">
              I Like This
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 border-gray-100 border-t-8 border-l-8 border-r-8 border-r-transparent border-l-transparent"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PlayGroup;
