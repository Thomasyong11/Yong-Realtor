import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "d2e551fa1fmsh8e30f2f57f50278p19b149jsnfae7ccca9644",
    },
  });
  return data;
};
