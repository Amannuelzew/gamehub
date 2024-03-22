import axios from "axios";
import { queryType } from "../pages/Home";
import { Game } from "../components/context/GameContext";

interface FetchGameResponse {
  id: number;
  results: Game[];
}
const ax = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_REACT_APP_API_KEY,
  },
});

class ApiClient {
  endpoint;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (query: queryType | undefined, pageParam: number) => {
    return ax
      .get<FetchGameResponse>(this.endpoint, {
        params: {
          parent_platforms: query?.platform,
          genres: query?.genre,
          search: query?.search,
          page: pageParam,
        },
      })
      .then((res) => res.data.results);
  };
}
export default ApiClient;
