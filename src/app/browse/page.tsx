import { getData } from "@/services/data";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import CoreMovieComponent from "./(CoreMovies)/CoreMovie";
import TopMovies from "./(TopMovies)/TopMovies";
import TopTv from "./(TopTV)/TopTv";

export const metadata: Metadata = {
  title: "Home - Netflix",
  icons: "/image/logoN.png",
};

type DataType = {
  id?: string;
  poster_path?: string;
  backdrop_path?: string;
};

export default async function BrowsePage() {
  const data = await getData(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );

  const getIdCoreMovie = data?.results[0].id;

  const getMovieLink = await getData(
    `https://api.themoviedb.org/3/movie/${getIdCoreMovie}/videos?language=en-US`
  );

  const getTopTv = await getData(
    `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`
  );

  return (
    <div>
      <CoreMovieComponent>
        {" "}
        <div className="absolute top-[25vh] left-0 px-[4vw] z-40 overflow-hidden">
          <div className="flex flex-row gap-x-3 items-center px-2">
            <div className="h-auto w-auto">
              <Image
                src="/image/logoN.png"
                alt="Netflix"
                width={20}
                height={20}
              />
            </div>
            <div className="text-gray-300 tracking-[0.2rem] font-semibold text-xl">
              Film
            </div>
          </div>
          <div className={`font-semibold text-[80px] text-gray-200`}>
            {data?.results[0].title}
          </div>
          <div className="mt-6 w-[33vw]">{data?.results[0].overview}</div>
          <div className="flex flex-row gap-x-4 w-[25vw] mt-6">
            <div>
              <Link
                target="_blank"
                className="bg-white hover:bg-hover_white rounded-md text-black font-semibold text-lg py-[10px] px-7 text-center flex flex-row gap-x-2 items-center transition"
                href={`https://www.youtube.com/watch?v=${getMovieLink?.results?.[0].key}`}
              >
                <div>
                  <i className="fas fa-play text-black text-xl"></i>
                </div>
                <div>Play</div>
              </Link>
            </div>
            <div>
              <Link
                className="bg-secondary_color hover:bg-hover_secondary_color rounded-md text-white font-semibold text-lg py-[10px] px-7 text-center flex flex-row gap-x-2 items-center transition"
                href={`browse/${getIdCoreMovie}`}
              >
                <div>
                  <i className="fa-solid fa-circle-info 2xl"></i>
                </div>
                <div>More Info</div>
              </Link>
            </div>
          </div>
        </div>
      </CoreMovieComponent>

      <div className="relative z-40">
        <div className={`-translate-y-48 `}>
          <div className="text-xl font-semibold text-white px-16 pt-5">
            Top 10 Movies in Indonesia Today
          </div>
          <TopMovies data={data} />
        </div>
      </div>

      <div className="relative z-40">
        <div className={`-translate-y-48 `}>
          <div className="text-xl font-semibold text-white px-16 pt-5">
          New TV Discovery
          </div>
          <TopTv data={getTopTv?.results} />
        </div>
      </div>
    </div>
  );
}
