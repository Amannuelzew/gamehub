import { GameProvider } from "./components/context/GameContext";

import { RouterProvider } from "react-router-dom";
import { route } from "./route";

function App() {
  return (
    <GameProvider>
      <RouterProvider router={route}></RouterProvider>
    </GameProvider>
  );
}

export default App;
