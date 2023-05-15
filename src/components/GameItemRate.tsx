import { Game } from "./context/GameContext";

interface game {
  item: Game;
}
const GameItemRate = ({ item }: game) => {
  return (
    <>
      {item.metacritic < 101 && item.metacritic > 85 ? (
        <div className="badge badge-accent badge-outline">
          {item.metacritic}
        </div>
      ) : item.metacritic < 85 && item.metacritic > 70 ? (
        <div className="badge badge-outline">{item.metacritic}</div>
      ) : item.metacritic < 70 && item.metacritic > 60 ? (
        <div className="badge badge-primary badge-outline">
          {item.metacritic}
        </div>
      ) : (
        <div className="badge badge-secondary badge-outline">
          {item.metacritic}
        </div>
      )}
    </>
  );
};

export default GameItemRate;
