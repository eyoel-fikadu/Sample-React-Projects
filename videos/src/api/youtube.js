import axios from "axios";

const KEY = "AIzaSyDKjWHI7x7EBNFXv9z6iM3u7AHcdKfGcog";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    max: 5,
    key: KEY,
  },
});
