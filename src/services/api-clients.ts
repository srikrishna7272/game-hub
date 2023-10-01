import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b972e4343867447eb328a0227452b137",
  },
});
