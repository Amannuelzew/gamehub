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
      <div className="flex justify-center content-center mx-auto md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-4 lg:gap-4">
        <SideBar />
        <GameList />
      </div>
    </div>
  );
};

export default Home;
