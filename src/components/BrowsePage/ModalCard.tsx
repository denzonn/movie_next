"use client";
import { getData } from "@/services/getData";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PlayGroup from "./PlayGroup";
import { anton } from "@/app/font";
import SimilarMovie from "./SimilarMovie/SimilarMovie";

const Modal = dynamic(() => import("@/components/Commons/Modal"));

const getDatas = async ({ url, callback }: { url: string; callback: any }) => {
  try {
    const res = await getData(url);

    callback(res);
  } catch (error) {}
};

export default function DetailTopMovie(props: any) {
  const [data, setData] = useState();
  const [dataMovieLink, setDataMovieLink] = useState();
  const [dataSimilarMovie, setDataSimilarMovie] = useState();
  const searchParams = useSearchParams();
  const jbtv = searchParams.get("jbtv");

  useEffect(() => {
    getDatas({
      url: `https://api.themoviedb.org/3/movie/${jbtv}?language=en-US`,
      callback: setData,
    });
    getDatas({
      url: `https://api.themoviedb.org/3/movie/${jbtv}/videos?language=en-US`,
      callback: setDataMovieLink,
    });
    getDatas({
      url: `https://api.themoviedb.org/3/movie/${jbtv}/similar?language=en-US&page=1`,
      callback: setDataSimilarMovie,
    });
  }, [jbtv]);

  return (
    <Modal>
      <div className="rounded-t-md relative">
        <div className={`absolute bottom-20 left-0 px-10 z-20`}>
          <div className={`${anton.className} text-6xl`}>{data?.title}</div>
          <PlayGroup getMovieLink={dataMovieLink?.results?.[0].key} />
        </div>
        {/* <Image
          src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
          alt=""
          className="rounded-t-md"
          width={1000}
          height={1000}
        /> */}
        <img
          src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
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
          <SimilarMovie similarMovie={dataSimilarMovie?.results} />
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
