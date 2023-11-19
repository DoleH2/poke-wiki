import { Navbar } from "../Navbar";
import { SearchFrame } from "../SearchFrame";
import { ListSearchPokemon } from "./ListSearchPokemon";

export const PokeSearchPage = () => {
  return (
    <div className="container-fluid mx-auto position-relative p-0 m-0">
      <Navbar />
      <SearchFrame />
      <ListSearchPokemon />
    </div>
  );
};
