import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar"
import { InfoPokemon } from "./InfoPokemon";

export const PageInfoPokemon = () => {
    const location = useLocation();
    const dataDefault = location.state;

    return (
        <div className="container-fluid mx-auto position-relative p-0 m-0">
            <Navbar />
            <InfoPokemon dataPokemon={dataDefault} />
        </div>
    )
}