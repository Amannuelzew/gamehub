import { createContext, useState } from "react";

interface theme {
  theme: boolean;
  handleToggle: () => void;
}
const GameContext = createContext<theme>({
  theme: false,
  handleToggle: () => undefined,
});

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(true);

  const handleToggle = () => {
    setTheme(!theme);
  };
  return (
    <GameContext.Provider
      value={{
        theme,
        handleToggle,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
