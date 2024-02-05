import { FC, useState } from "react";

interface SimilarMovieDataProps {
  item?: [];
}

const SimilarMovieData: FC<SimilarMovieDataProps> = ({ item }) => {
  const [isImage, setIsImage] = useState(false);
  const [isPlaylist, setIsPlaylist] = useState(false);

  return (
    <div
      className="bg-[#2f2f2f] rounded-[4px]"
      onMouseEnter={() => setIsImage(true)}
      onMouseLeave={() => setIsImage(false)}
    >
      <div className="w-full relative">
        {isImage && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2a2a2a99] px-4 py-3 border border-white transition ease-in-out rounded-full flex justify-center items-center">
            <i className="fa-solid fa-play text-white text-2xl"></i>
          </div>
        )}
        <img
          src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
          alt=""
          className="w-full h-full rounded-t-[4px]"
        />
      </div>
      <div className="p-3">
        <div className="flex flex-row gap-x-3 justify-between items-center">
          <div>
            <div className="text-green-400 font-semibold">{Math.floor(Math.random() * (87 - 93 + 1)) + 93} % Match</div>
            <div className="w-fit">
              <span className="px-2 text-gray-300 border border-gray-300 w-fit mr-2">
                16+
              </span>
              <span>{Math.floor(Math.random() * (2010 - 2024 + 1)) + 2024}</span>
            </div>
          </div>
          <div
            className="flex items-center justify-center bg-transparent border border-white rounded-full py-2 px-[10px] relative"
            onMouseEnter={() => setIsPlaylist(true)}
            onMouseLeave={() => setIsPlaylist(false)}
          >
            <i className="fa-solid fa-plus text-lg"></i>
            {isPlaylist ? (
              <div className="relative shadow-md">
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-lg bg-gray-100 px-4 py-1 w-44 flex justify-center rounded-md text-black font-semibold">
                  Add to My List
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 border-gray-100 border-t-8 border-l-8 border-r-8 border-r-transparent border-l-transparent"></div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="truncate mt-3 text-gray-300">{item?.overview}</div>
      </div>
    </div>
  );
};

export default SimilarMovieData;
