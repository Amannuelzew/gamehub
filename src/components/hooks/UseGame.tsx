import { useContext, useEffect } from "react";
import GameContext, { Game } from "../context/GameContext";
import apiClient from "../../services/apiClient";

interface FetchGameResponse {
  id: number;
  results: Game[];
}

const UseGame = () => {
  const { games, handleGames, isLoading } = useContext(GameContext);
  // useEffect(() => {
  //   apiClient
  //     .get<FetchGameResponse>("/games")
  //     .then((res) => handleGames(res.data.results))
  //     .catch((err) => console.log(err.message));
  // }, []);

  return { games, isLoading };
};

export default UseGame;
