import { useState } from "react";
import { WeatherCard } from "./weater-card";
import { fetchWeather } from "../service/service.api";

export const Main = () => {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});
    const search = async (e) => {
        if (e.key === "Enter") {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery();
            console.log(data);
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search"
                name="city"
                className="form-control my-5 p-3 font-bold"
                // style={{ backgroundColor: "transparent" }}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyUp={search}
            />

            <WeatherCard data={weather} />
        </>
    );
};
