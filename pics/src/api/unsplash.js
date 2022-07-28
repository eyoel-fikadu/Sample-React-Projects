import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xha_gqil2efv8AeakLQnLq1ibJBF_Rmm3-vSzTH4fmc",
  },
});
