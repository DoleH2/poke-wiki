import FrameLineStatsPokemon from "./FrameLineStatsPokemon";
import { Suspense, lazy } from "react";
import { formatNumber } from "../../utils/handleNumber";
import { upperFirst } from "../../utils/handleString";
import { TagElement } from '../utilsComponent/TagElement';
import "../../scss/infostatspokemonStyle.scss";
import FrameAbility from "./FrameAbility";
import FrameTypes from "./FrameTypes";
import FrameHeiWei from "./FrameHeiWei";

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
            <FrameTypes listType={dataPokemon.types} />
            <img
              className="img-pokemon mx-auto"
              src={dataPokemon.sprites.front_default}
              alt="Pokemon"
              style={{ maxWidth: "300px", width: "100%" }}
            ></img>
            <FrameAbility dataAbility={dataPokemon.abilities} />
          </div>
        </div>
        <div className="col-12 col-md-6 pt-5">
          <FrameLineStatsPokemon dataStats={dataPokemon.stats} />
          <FrameHeiWei dataPokemon={dataPokemon} />
        </div>
      </div>
    </div>
  );
};
