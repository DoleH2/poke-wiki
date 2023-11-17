import { formatNumber } from "../../utils/handleNumber";
import { upperFirst } from "../../utils/handleString";
import { TagElement } from "../TagElement";
import LineStats from "../utilsComponent/LineStats";
import '../../scss/infostatspokemonStyle.scss';
import { FrameAbility } from "./FrameAbility";
const maxHP = 260;
const maxAtk = 170;
const maxDef = 190;
const maxSAtk = 180;
const maxSDef = 160;
const maxSpd = 200;

export const InfoStatsPokemon = ({ dataPokemon }) => {
  console.log(dataPokemon);
  const handleErrorImg = (e, data) => {
    if (data.sprites.front_default !== null) {
      e.target.src = data.sprites.front_default;
    }
  };
  return (
    <div className="container bg-white mt-2 rounded shadow mx-auto">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="frame-info py-4 px-3 d-flex flex-column justify-content-center gap-2">
            <div className="frame-name-pokemon d-flex w-100 justify-content-center align-items-center gap-3">
              <p className="name-pokemon m-0 fs-2 fw-bold text-center text-white">
                {upperFirst(dataPokemon.name)}
              </p>
              <p className="id-pokemon m-0 text-center fs-5 fw-bold">#{dataPokemon.id}</p>

            </div>
            <div className="element-pokemon d-flex flex-wrap gap-1 justify-content-center">
              {dataPokemon.types.map((element, idx) => (
                <TagElement key={idx} data={element} />
              ))}
            </div>
            <img
              className="img-pokemon mx-auto"
              src={
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
                formatNumber(dataPokemon.id, 3) +
                ".png"
              }
              alt="Pokemon"
              style={{ maxWidth: "300px", width: '100%' }}
              onError={(e) => handleErrorImg(e, dataPokemon)}
            ></img>

            <FrameAbility dataAbility={dataPokemon.abilities} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="frame-stats py-5 px-3 d-flex flex-column gap-4">
            <div className="frame-hp">
              <p className="m-0 fw-bold">
                HP: {dataPokemon.stats[0].base_stat}
              </p>
              <LineStats
                lineColor={"#60D394"}
                trackLineColor={"#DFF6EA"}
                percent={
                  (Number(dataPokemon.stats[0].base_stat) * 100) / Number(maxHP)
                }
              />
            </div>
            <div className="frame-atk">
              <p className="m-0 fw-bold">
                ATK: {dataPokemon.stats[1].base_stat}
              </p>
              <LineStats
                lineColor={"#F14B3D"}
                trackLineColor={"#FCDBD8"}
                percent={
                  (Number(dataPokemon.stats[1].base_stat) * 100) /
                  Number(maxAtk)
                }
              />
            </div>
            <div className="frame-def">
              <p className="m-0 fw-bold">
                DEF: {dataPokemon.stats[2].base_stat}
              </p>
              <LineStats
                lineColor={"#455FD6"}
                trackLineColor={"#C1DEFF"}
                percent={
                  (Number(dataPokemon.stats[2].base_stat) * 100) /
                  Number(maxDef)
                }
              />
            </div>
            <div className="frame-satk">
              <p className="m-0 fw-bold">
                S.ATK: {dataPokemon.stats[3].base_stat}
              </p>
              <LineStats
                lineColor={"#FF844F"}
                trackLineColor={"#FFE3D5"}
                percent={
                  (Number(dataPokemon.stats[3].base_stat) * 100) /
                  Number(maxSAtk)
                }
              />
            </div>
            <div className="frame-sdef">
              <p className="m-0 fw-bold">
                S.DEF: {dataPokemon.stats[4].base_stat}
              </p>
              <LineStats
                lineColor={"#6E44FF"}
                trackLineColor={"#CEC0FF"}
                percent={
                  (Number(dataPokemon.stats[4].base_stat) * 100) /
                  Number(maxSDef)
                }
              />
            </div>
            <div className="frame-spd">
              <p className="m-0 fw-bold">
                SPD: {dataPokemon.stats[5].base_stat}
              </p>
              <LineStats
                lineColor={"#FDD85D"}
                trackLineColor={"#FFF7DF"}
                percent={
                  (Number(dataPokemon.stats[5].base_stat) * 100) /
                  Number(maxSpd)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
