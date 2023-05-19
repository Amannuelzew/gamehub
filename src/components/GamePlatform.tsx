import { useContext, useEffect } from "react";
import PlatformData from "../data/PlatformsData";

import GameContext, { Game } from "./context/GameContext";
import apiClient from "../services/apiClient";

interface FetchGameResponse {
  id: number;
  results: Game[];
}
const GamePlatform = () => {
  const { handleSelectedPlatfrom } = useContext(GameContext);
  const { selectedGenre, selectedPlatfrom, handleGames } =
    useContext(GameContext);
  const params =
    selectedGenre > 0
      ? {
          genres: selectedGenre,
          parent_platforms: selectedPlatfrom,
        }
      : {
          parent_platforms: selectedPlatfrom,
        };
  const controller = new AbortController();
  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games", {
        params: params,
        signal: controller.signal,
      })
      .then((res) => handleGames(res.data.results))
      .catch((err) => console.log(err.message));

    return () => controller.abort();
  }, [selectedPlatfrom]);
  const handlePlatformChange = (name: string) => {
    handleSelectedPlatfrom(PlatformData.find((p) => p.name === name)?.id || -1);
  };

  return (
    <div className="dropdown m-4">
      <select
        title="platform"
        className="bg-base-200 p-2"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handlePlatformChange(e.target.value)
        }
      >
        {PlatformData.map((platform) => (
          <option key={platform.id} value={platform.name}>
            {platform.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GamePlatform;
