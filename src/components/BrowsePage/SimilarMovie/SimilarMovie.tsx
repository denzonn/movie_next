"use client";
import React, { FC, useState } from "react";
import SimilarMovieData from "./Data";

interface SimilarMovieProps {
  similarMovie: [];
}

const SimilarMovie: FC<SimilarMovieProps> = ({ similarMovie }) => {
  const [visibleItems, setVisibleItems] = useState(6);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const handleResetMore = () => {
    setVisibleItems(6);
  };

  return (
    <div className="mt-2">
      <div className="grid grid-cols-3 gap-3 relative">
        {similarMovie?.slice(0, visibleItems).map((item, index) => {
          return (
            <SimilarMovieData
              key={index}
              item={item}
            />
          );
        })}
        {visibleItems < similarMovie?.length ? (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center mt-3 w-full">
            <div className="w-full absolute top-0 left-0 -translate-y-full h-14 bg-gradient-to-t from-[#141414] to-[rgba(20, 20, 20, 0)]"></div>
            <div className="w-full absolute top-0 left-0">
              <hr className="border-[#404040] border-2 " />
            </div>
            <button
              className="bg-[#2a2a2a99] text-gray-200 p-3 absolute top-0 -translate-y-1/2 rounded-full border border-gray-200 hover:border-white flex items-center justify-center"
              onClick={handleLoadMore}
            >
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        ) : (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center mt-3 w-full">
            <div className="w-full absolute top-5 left-0">
              <hr className="border-[#404040] border-2 " />
            </div>
            <button
              className="bg-[#2a2a2a99] text-gray-200 p-3 absolute top-5 -translate-y-1/2 rounded-full border border-gray-200 hover:border-white flex items-center justify-center"
              onClick={handleResetMore}
            >
              <i className="fa-solid fa-chevron-down rotate-180"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimilarMovie;
