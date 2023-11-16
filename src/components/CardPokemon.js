import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect } from "react";
import { fetchDataItemPokemon } from "../redux/reducers/dataPokemonItemSlice";
import { getDataItemPokemon } from "../redux/selectors/dataPokemonItemSelector";
import LoadCircle from "./LoadCircle";
import { formatNumber } from "../utils/handleNumber";
import { upperFirst } from "../utils/handleString";
import { TagElement } from "./TagElement";
import { changeRouter } from "../utils/handleRouter";
import { useNavigate } from "react-router-dom";

export const CardPokemon = memo(({ dataPokemon }) => {
  const dispatch = useDispatch();
  const dataPokemonItem = useSelector(getDataItemPokemon);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchDataItemPokemon({ api: dataPokemon.url }));
  }, []);

  const handleErrorImg = (e, data) => {
    if (data.sprites.front_default !== null) {
      e.target.src = data.sprites.front_default;
    }
  }

  return (
    <div className="frame-card-pokemon border rounded">
      {dataPokemonItem.status === "loading" ||
        dataPokemonItem.status === "failed" ? (
        <LoadCircle />
      ) : (
        <>
          <div
            className={`content-card-pokemon d-flex flex-column p-2 h-100 ${dataPokemonItem.data[dataPokemon.url]?.types[0].type.name
              }`}
            onClick={() => changeRouter(navigate, '/info', dataPokemonItem.data[dataPokemon.url])}
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
                  alt="Pokemon"
                  className="w-100"
                  onError={(e) => handleErrorImg(e, dataPokemonItem.data[dataPokemon.url])}
                ></img>
              )}
            </div>
            <div className="frame-footer-card d-flex flex-wrap gap-2 mt-auto">
              {dataPokemonItem.data[dataPokemon.url]?.types.map(
                (element, idx) => (
                  <TagElement key={idx} data={element} />
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
});
