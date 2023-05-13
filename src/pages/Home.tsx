import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import GameList from "../components/GameList";
import GameContext from "../components/context/GameContext";
import { useContext } from "react";

const Home = () => {
  const { theme } = useContext(GameContext);
  return (
    <div data-theme={theme ? "dark" : "light"} className="p-10">
      <NavBar />
      <div className="flex">
        <SideBar />
        <GameList />
      </div>
    </div>
  );
};

export default Home;
