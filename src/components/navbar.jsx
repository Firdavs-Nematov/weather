import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <Link to={"/"} className="text-decoration-none">
                <div className="navbar">
                    <h1 style={{ color: "white" }}>Weather App</h1>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary">
                            Tashkent
                        </button>
                        <button type="button" className="btn btn-outline-primary">
                            Moskov
                        </button>
                        <button type="button" className="btn btn-outline-primary">
                            London
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};
