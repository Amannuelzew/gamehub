import GameSkelton from "./GameSkelton";
import GameItem from "./GameItem";

import UseGame from "./hooks/UseGame";
import InfiniteScroll from "react-infinite-scroll-component";
import { queryType } from "../pages/Home";

interface q {
  query: queryType;
}
const GameList = (query: q) => {
  console.log(query.query.platform);
  const { games, isLoading, fetchNextPage, hasNextPage } = UseGame(query.query);

  const len =
    games?.pages.reduce((acc, curr) => {
      return acc + curr.length;
    }, 0) || 0;
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  if (isLoading)
    return (
      <div className="col-span-4">
        <div className="block md:justify-center md:grid md:gap-3 md:grid-cols-2 lg:grid lg:gap-4 lg:grid-cols-3">
          {array.map((index) => (
            <GameSkelton key={index} />
          ))}
        </div>
      </div>
    );

  return (
    <>
      <div className="col-span-4">
        <InfiniteScroll
          dataLength={len}
          loader={<></>}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
        >
          <div className="block md:justify-center md:grid md:gap-5 md:grid-cols-2 lg:grid lg:gap-6 lg:grid-cols-3 ">
            {games?.pages.map((page) =>
              page.map((game) => <GameItem key={game.id} item={game} />)
            )}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default GameList;
