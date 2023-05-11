import { Main } from "./main";
import { Navbar } from "./navbar";

export const App = () => {
    return (
        <div className="container-fluid app">
            <Navbar />
            <div className="container">
                <Main key={"/"} />
            </div>
        </div>
    );
};
