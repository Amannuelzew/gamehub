import { useContext, useEffect } from "react";
import apiClient from "../services/apiClient";

import GameContext from "./context/GameContext";

const SideBar = () => {
  useEffect(() => {
    apiClient
      .get("/genres")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  const { genres } = useContext(GameContext);
  return (
    <div className="card ">
      {genres.map((genre) => (
        <div className="flex m-4" key={genre.id}>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                height="50px"
                width="50px"
                src={genre.image_background}
                alt={genre.name}
              />
            </div>
          </div>

          <h3>{genre.slug}</h3>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
