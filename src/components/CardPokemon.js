import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect } from "react";
import { fetchDataItemPokemon } from "../redux/reducers/dataPokemonItemSlice";
import { getDataItemPokemon } from "../redux/selectors/dataPokemonItemSelector";
import LoadCircle from "./LoadCircle";
import { formatNumber } from "../utils/handleNumber";
import { upperFirst } from "../utils/handleString";
import { TagElement } from "./TagElement";

export const CardPokemon = memo(({ dataPokemon }) => {
  const dispatch = useDispatch();
  const dataPokemonItem = useSelector(getDataItemPokemon);

  useEffect(() => {
    dispatch(fetchDataItemPokemon({ api: dataPokemon.url }));
  }, []);
  console.log(dataPokemonItem);
  return (
    <div className="frame-card-pokemon border rounded">
      {/* {dataPokemonItem.status === "loading" ||
      dataPokemonItem.status === "failed" ? (
        <LoadCircle />
      ) : ( */}
      <>
        {console.log(dataPokemonItem.data[dataPokemon.url]?.types[0])}
        <div
          className={`content-card-pokemon p-2 h-100 ${
            dataPokemonItem.data[dataPokemon.url]?.types[0].type.name
          }`}
        >
          <div className="frame-head-card d-flex justify-content-between align-items-center">
            <div className="frame-name-pokemon text-start">
              <p className="m-0">
                #{dataPokemonItem.data[dataPokemon.url]?.id}
              </p>
              <p className="name-pokemon m-0 fs-5 fw-bold">
                {dataPokemonItem.data[dataPokemon.url]?.name &&
                  upperFirst(dataPokemonItem.data[dataPokemon.url].name)}
              </p>
            </div>
            <div className="frame-element-pokemon"></div>
          </div>
          <div className="frame-body-card">
            {dataPokemonItem.data[dataPokemon.url]?.id && (
              <img
                src={
                  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
                  formatNumber(dataPokemonItem.data[dataPokemon.url]?.id, 3) +
                  ".png"
                }
                className="w-100"
              ></img>
            )}
          </div>
          <div className="frame-footer-card d-flex flex-wrap gap-2">
            {dataPokemonItem.data[dataPokemon.url]?.types.map(
              (element, idx) => (
                <TagElement key={idx} data={element} />
              )
            )}
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
});
