import { useInfiniteQuery } from "react-query";
import { queryType } from "../../pages/Home";
import ApiClient from "../../services/apiClient";

const apiclient = new ApiClient("/games");
const UseGame = (query?: queryType) => {
  //const { handleGames } = useContext(GameContext);

  const {
    data: games,
    isLoading,
    fetchNextPage,
    isFetching,
    hasNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ["games", query],
    queryFn: ({ pageParam }) => apiclient.getAll(query, pageParam),
    getNextPageParam: (lastpage, pages) => {
      return lastpage.length > 0 ? pages.length + 1 : undefined;
    },
  });
  // useEffect(() => {
  //   apiClient
  //     .get<FetchGameResponse>("/games")
  //     .then((res) => handleGames(res.data.results))
  //     .catch((err) => console.log(err.message));
  // }, []);
  //handleGames(games?.pages||[])

  return { games, isLoading, error, isFetching, hasNextPage, fetchNextPage };
};

export default UseGame;
