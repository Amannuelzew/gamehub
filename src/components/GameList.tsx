import GameSkelton from "./GameSkelton";
import GameItem from "./GameItem";
import GamePlatform from "./GamePlatform";
import UseGame from "./hooks/UseGame";

const GameList = () => {
  const { games, isLoading } = UseGame();

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="col-span-3">
      <GamePlatform />

      <div className="block md:justify-center md:grid md:gap-3 md:grid-cols-2 lg:grid lg:gap-4 lg:grid-cols-3">
        {/* {isLoading ? (
          array.map((index) => <GameSkelton key={index} />)
        ) : games.length !== 0 ? (
          games.map((game) => <GameItem key={game.id} item={game} />)
        ) : (
          <p className="text-center text-xl"> Sorry, No games found.</p>
        )} */}
        {array.map((index) => (
          <GameSkelton key={index} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
