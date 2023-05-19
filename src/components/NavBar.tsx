import { useContext, useRef } from "react";
import GameContext, { Game } from "./context/GameContext";
import apiClient from "../services/apiClient";

interface FetchGameResponse {
  id: number;
  results: Game[];
}
const NavBar = () => {
  const { theme, handleToggle, handleGames } = useContext(GameContext);
  const ref = useRef<HTMLInputElement>(null);
  const controller = new AbortController();
  const handleTextChange = () => {
    apiClient
      .get<FetchGameResponse>("/games", {
        params: { search: ref.current?.value },
        signal: controller.signal,
      })
      .then((res) => handleGames(res.data.results))
      .catch((err) => console.log(err.message));

    return () => controller.abort();
  };
  return (
    <div className=" flex justify-between mb-4">
      <div className="flex">
        <div className="navbar ">
          <a className="btn btn-ghost font-bold normal-case text-3xl mr-24">
            GameHub
          </a>
          <input
            type="text"
            placeholder="Search Games"
            className="input input-bordered w-[27rem] m-4"
            ref={ref}
          />
          <button className="btn btn-primary" onClick={handleTextChange}>
            Search
          </button>
        </div>
      </div>
      <div className="my-4">
        <input
          title="toggle"
          onChange={handleToggle}
          type="checkbox"
          className="toggle"
          checked={theme ? true : false}
        />
        <p className="ml-2">{theme ? "Light" : "Dark"}</p>
      </div>
    </div>
  );
};

export default NavBar;
