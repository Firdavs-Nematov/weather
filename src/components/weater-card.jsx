export const WeatherCard = ({ data }) => {
    return (
        <>
            {data.main && (
                <div>
                    <div className="card bg-info" style={{ width: "40%", margin: "0 auto", opacity: "0.8", background: "grey" }}>
                        <img
                            src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                            alt="logo"
                            style={{ width: "150px", margin: "0 auto" }}
                        />
                        <div className="card-body">
                            <h3 className="text-center">
                                Harorat <b>{data.main.temp}</b>
                                <sup>o</sup>C
                            </h3>
                            <p className="card-text">
                                Country: <b>{data.name}</b>
                            </p>
                            <p>
                                Uzunlik: <b>{data.coord.lat}</b>, Kenglik: <b>{data.coord.lon}</b>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
