import { useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import GameContext, { Game } from "./context/GameContext";
import GameItem from "./GameItem";
import imageOptimize from "../services/imageOptmize";

interface FetchGameResponse {
  id: number;
  results: Game[];
}
const GameList = () => {
  const { games, handleGames } = useContext(GameContext);
  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => handleGames(res.data.results))
      .catch((err) => console.log(err.message));
    console.log(games[19].background_image);
  }, []);
  return (
    <div className="col-span-3 grid grid-cols-3">
      {/* {games.map((game) => (
        <GameItem key={game.id} item={game} />
      ))} */}
    </div>
  );
};

export default GameList;
