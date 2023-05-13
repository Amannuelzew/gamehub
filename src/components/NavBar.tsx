import { useContext } from "react";
import GameContext from "./context/GameContext";

const NavBar = () => {
  const { theme, handleToggle } = useContext(GameContext);
  return (
    <div className=" flex justify-between mb-4">
      <div className="flex bg-yellow-400 ">
        <div className="navbar ">
          <a className="btn btn-ghost normal-case text-xl">GameHub</a>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xl m-4"
        />
      </div>
      <input
        title="toggle"
        onChange={handleToggle}
        type="checkbox"
        className="toggle"
        checked={theme ? true : false}
      />
    </div>
  );
};

export default NavBar;
