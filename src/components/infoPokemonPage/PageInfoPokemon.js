import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import { InfoStatsPokemon } from "./InfoStatsPokemon";
import { InfoDetailsPokemon } from "./InfoDetailsPokemon";

export const PageInfoPokemon = () => {
  const location = useLocation();
  const dataDefault = location.state;

  return (
    <div className="container-fluid mx-auto position-relative p-0 m-0">
      <Navbar />
      <InfoStatsPokemon dataPokemon={dataDefault} />
      <InfoDetailsPokemon dataPokemon={dataDefault} />
    </div>
  );
};
