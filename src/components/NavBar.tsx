import { useContext } from "react";
import GameContext from "./context/GameContext";

const NavBar = () => {
  const { theme, handleToggle } = useContext(GameContext);
  return (
    <div className="bg-red-500 flex justify-between">
      <div className="navbar ">
        <a className="btn btn-ghost normal-case text-xl">GameHub</a>
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
