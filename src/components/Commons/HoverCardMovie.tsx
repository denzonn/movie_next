"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getData } from "@/services/data";

interface PopupHoverProps {
  image?: string;
  id?: string;
  className?: string;
}

const content = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    originY: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const PopupHover: FC<PopupHoverProps> = ({ image, id, className }) => {
  const [data, setData] = useState([]);
  const [isPlaylist, setIsPlaylist] = useState(false);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`
        );

        setData(res);
      } catch (error) {}
    };

    fetchData();
  }, [id]);

  return (
    <motion.div
      className={`absolute top-1/2 -translate-y-1/2 ${
        className ? className : "left-1/2 -translate-x-1/2"
      } z-50 bg-[#181818] rounded-md w-[130%] shadow-2xl shadow-[#181818]`}
      variants={content}
      exit="hidden"
      animate="visible"
      initial="hidden"
    >
      <Link
        href={`https://www.youtube.com/watch?v=${data?.results?.[0].key}`}
        className="h-48 w-full"
        target="_blank"
      >
        <img
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt=""
          className="h-full w-full object-cover rounded-md"
        />
      </Link>
      <div className="flex flex-row justify-between p-4 rounded-md">
        <div className="flex flex-row gap-x-3">
          <div className="py-3 px-[15px] rounded-full bg-white hover:bg-gray-300 flex items-center justify-center">
            <i className="fa-solid fa-play text-black"></i>
          </div>
          <div
            className="p-3 rounded-full bg-[#2a2a2a99] border border-gray-400 hover:border-white flex items-center justify-center relative"
            onMouseEnter={() => setIsPlaylist(true)}
            onMouseLeave={() => setIsPlaylist(false)}
          >
            <i className="fa-solid fa-plus"></i>
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
            className="p-3 rounded-full bg-[#2a2a2a99] border border-gray-400 hover:border-white flex items-center justify-center relative"
            onMouseEnter={() => setIsLike(true)}
            onMouseLeave={() => setIsLike(false)}
          >
            <i className="fa-solid fa-thumbs-up"></i>
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
        <div className="p-3 rounded-full bg-[#2a2a2a99] border border-gray-400 hover:border-white flex items-center justify-center">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-row gap-x-2 items-center">
          <div className="text-green-400 font-semibold">
            {Math.floor(Math.random() * (87 - 94 + 1) + 94)}% Match
          </div>
          <div className="px-3 border border-gray-100 text-xs">16+</div>
          <div className="text-[#B4B4B4]">
            {Math.floor(Math.random() * (1 - 2 + 1) + 2)}h{" "}
            {Math.floor(Math.random() * (59 - 0 + 1) + 0)}m
          </div>
        </div>
        <div className="w-full flex flex-row items-center gap-x-3 text-sm mt-3">
          {data?.genres?.map((item, index) => {
            if (index < 3) {
              return (
                <>
                  <div key={index} className="flex flex-row items-center">
                    <div>{item?.name} </div>
                  </div>
                  {index === data?.genres?.length - 1 ? null : index < 2 ? (
                    <div className="p-1 h-2 w-2 rounded-full bg-gray-500"></div>
                  ) : index === 2 ? null : null}
                </>
              );
            }
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default PopupHover;
