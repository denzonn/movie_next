import { getData } from "@/services/getData";
import MovieWishlistData from "./(movieData)/dataMovie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netflix",
  icons: "/image/logoN.png",
};

export default async function MyListPage() {
  const data = await getData(
    `https://api.themoviedb.org/3/account/20321334/watchlist/movies?language=en-US&sort_by=created_at.asc`
  );

  return (
    <div className="py-20 px-16">
      <div className="text-xl font-semibold text-white  pt-5">My Wishlist</div>
      <div className="mt-10">
        <div className="grid grid-cols-6 gap-x-2 gap-y-14">
          {data?.results?.map((items, index) => {
            return (
              <MovieWishlistData key={index} data={items} index={index}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}
