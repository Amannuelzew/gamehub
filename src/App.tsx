import { GameProvider } from "./components/context/GameContext";
import Home from "./pages/Home";

function App() {
  return (
    <GameProvider>
      <Home />
    </GameProvider>
  );
}

export default App;
