import "../scss/listpokemonstyle.scss";
import { CardPokemon } from "./CardPokemon";
export const ListPokemon = () => {
  return (
    <div className="container frame-list-pokemon p-0">
      <CardPokemon />
      <CardPokemon />
      <CardPokemon />
      <CardPokemon />
      <CardPokemon />
      <CardPokemon />
      <CardPokemon />
      <CardPokemon />
    </div>
  );
};
