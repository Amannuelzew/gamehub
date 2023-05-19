import imageOptimize from "../services/imageOptmize";
import Uppercase from "../services/Uppercase";
import { Game } from "./context/GameContext";
import GameItemRate from "./GameItemRate";
import Icon from "./Icon";

interface game {
  item: Game;
}
const GameItem = ({ item }: game) => {
  return (
    <div className="card max-h-96 w-64 bg-base-100 shadow-xl mb-4">
      <figure className="max-h-64">
        <img
          src={imageOptimize(item.background_image)}
          alt={item.background_image}
        />
      </figure>
      <div className="card-body">
        <div className="card-actions ">
          {item.platforms.map((platform) => (
            <div className="" key={platform.platform.id}>
              <Icon as={platform.platform.slug} />
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <h2 className="card-title text-xl font-semibold">
            {Uppercase(item.slug)}
          </h2>
        </div>

        <div className="card-actions justify-end absolute bottom-0 right-0 m-2">
          <GameItemRate item={item} />
          <div className="badge badge-outline">{item.released.slice(0, 4)}</div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
