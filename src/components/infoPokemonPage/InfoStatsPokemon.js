import FrameLineStatsPokemon from "./FrameLineStatsPokemon";
import { Suspense, lazy } from "react";
import { formatNumber } from "../../utils/handleNumber";
import { upperFirst } from "../../utils/handleString";
import { TagElement } from '../utilsComponent/TagElement';
import "../../scss/infostatspokemonStyle.scss";
import FrameAbility from "./FrameAbility";

export const InfoStatsPokemon = ({ dataPokemon }) => {
  console.log(dataPokemon);

  return (
    <div className="container bg-white mt-2 rounded shadow mx-auto">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="frame-info py-4 px-3 d-flex flex-column justify-content-center gap-2">
            <div className="frame-name-pokemon d-flex w-100 justify-content-center align-items-center gap-3">
              <p className="name-pokemon m-0 fs-2 fw-bold text-center text-white">
                {upperFirst(dataPokemon.name)}
              </p>
              <p className="id-pokemon m-0 text-center fs-5 fw-bold">
                #{dataPokemon.id}
              </p>
            </div>
            <div className="element-pokemon d-flex flex-wrap gap-1 justify-content-center">
              {dataPokemon.types.map((element, idx) => (
                <TagElement key={idx} data={element} />
              ))}
            </div>
            <img
              className="img-pokemon mx-auto"
              src={dataPokemon.sprites.front_default}
              alt="Pokemon"
              style={{ maxWidth: "300px", width: "100%" }}
            ></img>
            <FrameAbility dataAbility={dataPokemon.abilities} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <FrameLineStatsPokemon dataStats={dataPokemon.stats} />
          <div className="d-flex flex-wrap px-2 gap-5 justify-content-center">
            <p className="m-0 fw-bold" style={{ minWidth: "100px" }}>
              Height: {dataPokemon.height * 10} cm
            </p>
            <p className="m-0 fw-bold" style={{ minWidth: "100px" }}>
              Weight: {dataPokemon.weight / 10} kg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
