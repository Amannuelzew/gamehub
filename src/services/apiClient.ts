import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "31d34bfb108f45878172e8435eb77f9c",
  },
});
