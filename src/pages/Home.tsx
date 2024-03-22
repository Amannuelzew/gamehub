import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import GameList from "../components/GameList";
import GameContext from "../components/context/GameContext";
import { useContext, useState } from "react";
import GamePlatform from "../components/GamePlatform";

export interface queryType {
  platform: number | undefined;
  genre: number | undefined;
  search: string | null;
}

const Home = () => {
  const { theme } = useContext(GameContext);
  const [query, setQuery] = useState<queryType>({} as queryType);

  return (
    <div data-theme={theme ? "dark" : "light"} className="p-10">
      <NavBar
        onSelect={(search: string | null) => setQuery({ ...query, search })}
      />
      <div className="flex justify-center md:block md:ml-[19rem]">
        <GamePlatform
          onSelect={(platform: number | undefined) =>
            setQuery({ ...query, platform })
          }
        />
      </div>
      <div className="flex">
        <SideBar
          onSelect={(genre: number | undefined) =>
            setQuery({ ...query, genre })
          }
        />
        <div className="flex justify-center m-3 content-center mx-auto md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-4 lg:gap-1">
          <GameList query={query} />
        </div>
      </div>
    </div>
  );
};

export default Home;
