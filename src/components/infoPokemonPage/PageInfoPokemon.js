import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from '../utilsComponent/Navbar';
import { InfoStatsPokemon } from "./InfoStatsPokemon";

export const PageInfoPokemon = () => {
  const location = useLocation();
  const dataDefault = location.state;

  return (
    <div
      className="container-fluid mx-auto position-relative p-0 m-0"
      style={{ minWidth: "300px" }}
    >
      <Navbar />
      <InfoStatsPokemon dataPokemon={dataDefault} />
    </div>
  );
};
