import { useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import GameContext, { Game } from "./context/GameContext";
import GameSkelton from "./GameSkelton";
import GameItem from "./GameItem";

interface FetchGameResponse {
  id: number;
  results: Game[];
}
const GameList = () => {
  const { games, handleGames, isLoading } = useContext(GameContext);
  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => handleGames(res.data.results))
      .catch((err) => console.log(err.message));
    // console.log(games[0].background_image);
  }, []);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="col-span-3 grid grid-cols-3 ">
      {isLoading
        ? array.map(() => <GameSkelton />)
        : games.map((game) => <GameItem key={game.id} item={game} />)}
    </div>
  );
};

export default GameList;
