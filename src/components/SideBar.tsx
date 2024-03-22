import { useContext } from "react";

import GameContext from "./context/GameContext";
interface Genre {
  id: number;
  name: string;
}
interface queryType {
  onSelect: (PlatformData: number | undefined) => void;
}

const SideBar = ({ onSelect }: queryType) => {
  const { genres } = useContext(GameContext);

  const handleFilter = (filter: Genre) => {
    if (filter.id === 0) return onSelect(undefined);

    onSelect(filter.id);
  };
  return (
    <div className="hidden lg:block h-max cursor-default">
      {genres.map((genre) => (
        <div
          onClick={() => handleFilter(genre)}
          className="flex my-3 hover:font-bold"
          key={genre.id}
        >
          <div className="avatar mx-4">
            <div className="w-10 rounded-xl">
              {genre.image_background !== "" ? (
                <img
                  height="50px"
                  width="50px"
                  src={genre.image_background}
                  alt={genre.name}
                />
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="py-2 ">
            <h3 className="text-base ">{genre.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
