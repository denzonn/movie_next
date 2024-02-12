import { getData } from "@/services/getData";
import Image from "next/image";

export default async function CoreMovieComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );

  return (
    <div>
      <div className="w-full h-[110vh] relative">
        {/* <div className="absolute top-0 left-0 z-10 bg-black opacity-35 w-full h-[110vh]"></div> */}
        <div className="w-full">
          <Image
            src={`https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`}
            width={1500}
            height={1500}
            alt="Image"
            className="object-cover w-full h-[110vh]"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
