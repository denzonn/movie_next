"use client";
import React, { FC, useEffect, useState } from "react";
import DataTvMovie from "./DataTvMovie";

interface TopTVProps {
  data?: [];
}

const TopTv: FC<TopTVProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataShow, setDataShow] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    countDatas();
  }, [currentIndex]);

  const countDatas = () => {
    let updatedDataShow: [] = [];

    for (let i = currentIndex; i < data!.length; i++) {
      const image = data!.slice(i, i + 6);

      if (image.length < 6) {
        const addImage = data!.slice(0, 6 - image.length);

        updatedDataShow = image.concat(addImage);
      } else {
        updatedDataShow = image;
      }

      break;
    }
    setDataShow(updatedDataShow);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 6) % data!.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 6 + data!.length) % data!.length
    );
  };
  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div>
        {isOpen ? (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-2/3  flex justify-center items-center px-4 rounded-xl z-50 bg-black_button "
            onClick={prevSlide}
          >
            <i className="fa-solid fa-angle-right rotate-180"></i>
          </button>
        ) : null}
      </div>
      <div className="flex relative z-20 gap-x-4 px-10">
        {dataShow.map((item, index) => (
          <DataTvMovie
            key={index}
            backdrop_path={item?.backdrop_path}
            id={item?.id}
            index={index}
          />
        ))}
      </div>
      <div>
        {isOpen ? (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2  h-2/3 flex justify-center items-center bg-black_button px-4 rounded-xl z-50 cursor-pointer"
            onClick={nextSlide}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TopTv;
