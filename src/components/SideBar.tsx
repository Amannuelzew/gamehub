import { useContext } from "react";
//import apiClient from "../services/apiClient";

import GameContext from "./context/GameContext";

const SideBar = () => {
  // useEffect(() => {
  //   apiClient
  //     .get("/genres")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.message));
  // }, []);
  const { genres } = useContext(GameContext);
  return (
    <div className="card  bg-base-100 shadow-xl ">
      {genres.map((genre) => (
        <div className="flex my-3 hover:font-bold" key={genre.id}>
          <div className="avatar mx-4">
            <div className="w-10 rounded-xl">
              <img
                height="50px"
                width="50px"
                src={genre.image_background}
                alt={genre.name}
              />
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
