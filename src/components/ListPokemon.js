import { useEffect } from "react";
import "../scss/listpokemonstyle.scss";
import { CardPokemon } from "./CardPokemon";
import { getRequest } from '../axios/httpRequest';
import { useDispatch, useSelector } from "react-redux";
import { fetchDataPokemon } from "../redux/reducers/dataPokemonSlice";
import { getDataPokemon } from "../redux/selectors/dataPokemonSelector";
import LoadCircle from "./LoadCircle";

export const ListPokemon = () => {
  const dispatch = useDispatch();
  const dataPokemon = useSelector(getDataPokemon);
  console.log(dataPokemon);
  useEffect(() => {
    dispatch(fetchDataPokemon({ limit: 10, offset: 0 }));
  }, [])

  return (
    <div className="container frame-list-pokemon p-0">
      {
        dataPokemon.status === 'loading' ?
          <LoadCircle /> :
          dataPokemon.items.map((pokemon, idx) => (
            <CardPokemon key={idx}
              dataPokemon={pokemon}
            />
          ))
      }
    </div>
  );
};
