import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from '../utilsComponent/Navbar';
import FrameComparePokemon from "./FrameComparePokemon";


const PageComparePokemon = () => {
    const location = useLocation();
    const dataDefault = location.state;

    return (
        <div
            className="container-fluid mx-auto p-0 m-0"
            style={{ minWidth: "300px" }}
        >
            <Navbar />
            <FrameComparePokemon />
        </div>
    );
};

export default PageComparePokemon;
