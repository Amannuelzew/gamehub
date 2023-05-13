import { useContext } from "react";
import GameContext from "./context/GameContext";

const NavBar = () => {
  const { theme, handleToggle } = useContext(GameContext);
  return (
    <div>
      <input
        title="toggle"
        onClick={handleToggle}
        type="checkbox"
        className="toggle"
        checked={theme ? true : false}
      />
    </div>
  );
};

export default NavBar;
