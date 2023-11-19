import { useParams } from "react-router-dom";
import { ListPokemon } from "./ListPokemon";
import { Navbar } from "./Navbar";
import { SearchFrame } from "./SearchFrame";

export const PokeListFrame = () => {
  return (
    <div className="container-fluid mx-auto position-relative p-0 m-0">
      <Navbar />
      <SearchFrame />
      <ListPokemon />
    </div>
  );
};
