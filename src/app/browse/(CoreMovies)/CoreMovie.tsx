import { getData } from "@/services/data";

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
        <div className="absolute top-0 left-0 z-10 bg-black opacity-35 w-full h-[110vh]"></div>
        <img
          src={`https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`}
          alt=""
          className="w-full h-[110vh] object-cover"
        />
        {children}
        <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-[#141414] to-[rgba(20, 20, 20, 0)]"></div>
      </div>
    </div>
  );
}
