import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "cf3e012b81221018a47a193c0f148730";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_Key,
        },
    });

    return data;
};
