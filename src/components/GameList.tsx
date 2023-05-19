import GameSkelton from "./GameSkelton";
import GameItem from "./GameItem";
import GamePlatform from "./GamePlatform";
import UseGame from "./hooks/UseGame";

const GameList = () => {
  const { games, isLoading } = UseGame();

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="col-span-3  ">
      <GamePlatform />

      <div className="grid gap-4 grid-cols-3">
        {isLoading
          ? array.map((index) => <GameSkelton key={index} />)
          : games.map((game) => <GameItem key={game.id} item={game} />)}
      </div>
    </div>
  );
};

export default GameList;
