"use client";
import { FC, useEffect, useState } from "react";
import MoviesData from "./DataMovie";

interface TopMoviesProps {
  data?: [];
}

type DataType = {
  id?: string | undefined;
  poster_path?: string;
  backdrop_path?: string;
};

const TopMovies: FC<TopMoviesProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataShow, setDataShow] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    countDatas();
  }, [currentIndex]);

  const countDatas = () => {
    let updatedDataShow: DataType[] = [];

    for (let i = currentIndex; i < data!.results!.length; i++) {
      const image = data!.results!.slice(i, i + 6);

      if (image.length < 6) {
        const addImage = data!.results!.slice(0, 6 - image.length);

        updatedDataShow = image.concat(addImage);
      } else {
        updatedDataShow = image;
      }

      break;
    }
    setDataShow(updatedDataShow);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 6) % data!.results!.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 6 + data!.results!.length) % data!.results!.length
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-2/3  flex justify-center items-center px-4 rounded-xl z-30 bg-black_button "
            onClick={prevSlide}
          >
            <i className="fa-solid fa-angle-right rotate-180"></i>
          </button>
        ) : null}
      </div>
      <div className="flex relative z-4 gap-x-4 px-10">
        {dataShow.map((item: DataType, index) => (
          <MoviesData
            key={index}
            poster_path={item?.poster_path}
            backdrop_path={item?.backdrop_path}
            index={index}
            id={item?.id}
          />
        ))}
      </div>
      <div>
        {isOpen ? (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2  h-2/3 flex justify-center items-center bg-black_button px-4 rounded-xl z-30 cursor-pointer"
            onClick={nextSlide}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TopMovies;
