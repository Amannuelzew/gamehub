import { createContext, useState } from "react";
import Genres from "../../data/GenresData";

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: {
    id: number;
    slug: string;
    name: string;
    added: number;
  }[];
}
interface theme {
  theme: boolean;
  genres: Genre[];
  handleToggle: () => void;
}
const GameContext = createContext<theme>({
  theme: false,
  genres: [],
  handleToggle: () => undefined,
});

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(true);
  const [genres, setGenres] = useState<Genre[]>(Genres);
  const handleToggle = () => {
    setTheme(!theme);
  };
  // const handleGenres = (genre: Genre) => {
  //   setGenres([...[genre]]);
  // };
  return (
    <GameContext.Provider
      value={{
        theme,
        genres,
        handleToggle,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
