import { useContext, useRef } from "react";
import GameContext from "./context/GameContext";
import { Link } from "react-router-dom";

interface queryType {
  onSelect: (search: string | null) => void;
}
const NavBar = ({ onSelect }: queryType) => {
  const { theme, handleToggle } = useContext(GameContext);
  const ref = useRef<HTMLInputElement>(null);

  const handleTextChange = () => {
    onSelect(ref.current?.value || null);
  };
  return (
    <div className="flex justify-center md:justify-between lg:flex lg:justify-between mb-4">
      <div className="flex">
        <div className="navbar ">
          <Link
            to="/"
            className="btn btn-ghost font-bold normal-case text-3xl mr-24"
          >
            GameHub
          </Link>
        </div>
        <div className="hidden lg:flex">
          <input
            type="text"
            placeholder="Search Games"
            className="input input-bordered w-[27rem] m-4"
            ref={ref}
          />
          <button className="btn btn-primary m-4" onClick={handleTextChange}>
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
