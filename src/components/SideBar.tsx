import { useContext } from "react";
//import apiClient from "../services/apiClient";

import GameContext, { Game } from "./context/GameContext";
import apiClient from "../services/apiClient";
interface FetchFilterGameResponse {
  id: number;
  results: Game[];
}
const SideBar = () => {
  // useEffect(() => {
  //   apiClient
  //     .get("/genres")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.message));
  // }, []);
  const { genres, handleGames } = useContext(GameContext);
  const handleFilter = (filter: string) => {
    apiClient
      .get<FetchFilterGameResponse>("/games", {
        params: { genres: filter },
      })
      .then((res) => handleGames(res.data.results))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="card bg-base-100 shadow-xl h-max cursor-default">
      {genres.map((genre) => (
        <div
          onClick={() => handleFilter(genre.slug)}
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
