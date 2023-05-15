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
export interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: object;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: object;
  metacritic: number;
  platforms: [
    {
      platform: {
        id: 0;
        slug: "string";
        name: "string";
      };
      released_at: "string";
    }
  ];
}
interface theme {
  theme: boolean;
  isLoading: boolean;
  genres: Genre[];
  games: Game[];
  handleToggle: () => void;
  handleGames: (game: Game[]) => void;
}
const GameContext = createContext<theme>({
  theme: false,
  isLoading: true,
  genres: [],
  games: [],
  handleToggle: () => undefined,
  handleGames: (game: Game[]) => undefined,
});

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState<Genre[]>(Genres);
  const [games, setGames] = useState<Game[]>([]);
  const handleToggle = () => {
    setTheme(!theme);
  };
  // const handleGenres = (genre: Genre) => {
  //   setGenres([...[genre]]);
  // };
  const handleGames = (game: Game[]) => {
    setGames(game);
    setIsLoading(false);
  };
  return (
    <GameContext.Provider
      value={{
        theme,
        isLoading,
        genres,
        games,
        handleGames,
        handleToggle,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
