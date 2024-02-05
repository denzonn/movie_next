import { anton } from "@/app/font";
import PlayGroup from "@/components/BrowsePage/PlayGroup";
import SimilarMovie from "@/components/BrowsePage/SimilarMovie/SimilarMovie";
import { getData } from "@/services/data";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("@/components/Commons/Modal"));

export default async function DetailTopMovie(props: any) {
  const { params } = props;

  const data = await getData(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`
  );

  const getMovieLink = await getData(
    `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`
  );

  const similarMovie = await getData(
    `https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1`
  );

  return (
    <Modal>
      <div className="rounded-t-md relative">
        <div className={`absolute bottom-20 left-0 px-10 z-20`}>
          <div className={`${anton.className} text-6xl`}>{data?.title}</div>
          <PlayGroup
            getMovieLink={getMovieLink?.results?.[0].key}
          />
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt=""
          className="rounded-t-md"
        />
      </div>
      <div className="h-32 w-full bg-gradient-to-t from-[#141414] to-[rgba(20, 20, 20, 0)] -translate-y-full"></div>
      <div className="py-4 px-14 text-[15px] -translate-y-28">
        <div className="grid grid-cols-3 gap-x-5">
          <div className=" col-span-2">
            <div className="text-gray-400">
              <span className="mr-2 text-green-500 font-semibold">
                {Math.floor(Math.random() * (93 - 85 + 1)) + 85} % Match
              </span>
              <span className="mr-2">2012</span>
              <span className="mr-2">
                {Math.floor(Math.random() * (2 - 1 + 1)) + 1}h{" "}
                {Math.floor(Math.random() * (60 - 0 + 1)) + 0}m
              </span>
              <span className="text-xs px-2 border border-white rounded-sm">
                HD
              </span>
            </div>
            <div className="mt-2">{data?.overview}</div>
          </div>
          <div className="col-span-1">
            <div>
              <span className="text-[#777777]">Genres : </span>{" "}
              <span>
                {data?.genres?.map(
                  (item, index) =>
                    `${item?.name}${
                      index !== data.genres.length - 1 ? ", " : "."
                    } `
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xl font-semibold">More Like This</div>
        <div>
          <SimilarMovie similarMovie={similarMovie?.results}/>
        </div>
        <div className="mt-8 ">
          <div className="text-xl font-semibold">About {data?.title}</div>
          <div className="text-sm mt-3">
            <span className="text-[#777777]">Production by :</span>{" "}
            {data?.production_companies?.map((item, index) => {
              return (
                <span key={index}>
                  {item?.name}
                  {index !== data?.production_companies?.length - 1
                    ? ", "
                    : "."}
                </span>
              );
            })}
          </div>
          <div className="text-sm mt-2">
            <span className="text-[#777777]">Genres :</span>{" "}
            {data?.genres?.map((item, index) => {
              return (
                <span key={index}>
                  {item?.name}
                  {index !== data?.genres?.length - 1 ? ", " : "."}
                </span>
              );
            })}
          </div>
          <div className="text-sm mt-2">
            <span className="text-[#777777]">Tagline : </span>
            {data?.tagline}
          </div>
        </div>
      </div>
    </Modal>
  );
}
