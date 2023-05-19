import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: Process.env.REACT_APP_API_KEY,
  },
});
