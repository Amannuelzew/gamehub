import { useContext, useEffect } from "react";
interface Genre {
  id: number;
  name: string;
}

import GameContext, { Game } from "./context/GameContext";

import apiClient from "../services/apiClient";
interface FetchGameResponse {
  id: number;
  results: Game[];
}
const SideBar = () => {
  const {
    genres,
    selectedGenre,
    selectedPlatfrom,
    handleSelectedGenre,
    handleGames,
  } = useContext(GameContext);
  const controller = new AbortController();
  const params =
    selectedPlatfrom > 0
      ? {
          genres: selectedGenre,
          parent_platforms: selectedPlatfrom,
        }
      : {
          genres: selectedGenre,
        };
  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games", {
        params: params,
        signal: controller.signal,
      })
      .then((res) => handleGames(res.data.results))
      .catch((err) => console.log(err.message));

    return () => controller.abort();
  }, [selectedGenre]);
  const handleFilter = (filter: Genre) => {
    handleSelectedGenre(filter.id);
  };
  return (
    <div className="hidden lg:block h-max cursor-default">
      {genres.map((genre) => (
        <div
          onClick={() => handleFilter(genre)}
          className="flex my-3 hover:font-bold"
          key={genre.id}
        >
          <div className="avatar mx-4">
            <div className="w-10 rounded-xl">
              <img
                height="50px"
                width="50px"
                src={genre.image_background}
                alt={genre.name}
              />
            </div>
          </div>

          <div className="py-2 ">
            <h3 className="text-base ">{genre.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
