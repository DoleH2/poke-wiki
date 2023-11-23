import Button from "react-bootstrap/esm/Button";
import { upperFirst } from "../../utils/handleString";
import FrameAbility from "../infoPokemonPage/FrameAbility";
import FrameHeiWei from "../infoPokemonPage/FrameHeiWei";
import FrameLineStatsPokemon from "../infoPokemonPage/FrameLineStatsPokemon";
import FrameTypes from "../infoPokemonPage/FrameTypes";

const InfoPokemonCompare = ({ dataPokemon, onClickEdit }) => {
    return (
        <div className="frame-info-pokemon-compare rounded bg-light bg-gradient d-flex flex-column gap-1 pb-2"
            style={{ maxWidth: '400px', minWidth: '250px' }}>
            <div className={`name-pokemon-compare rounded-top d-flex w-100 justify-content-center align-items-center gap-2 p-1 ${dataPokemon.types[0].type.name}`} style={{ position: 'sticky', top: '55px', zIndex: '1' }}>
                <p className="fw-bold fs-5 m-0 text-white">{upperFirst(dataPokemon.name)}</p>
                <p className="m-0">#{dataPokemon.id}</p>
                <Button variant="" className="ms-auto" onClick={onClickEdit}>
                    <i className="fa-solid fa-pen"></i>
                </Button>
            </div>
            <img className="d-block mx-auto" src={dataPokemon.sprites.front_default}
                style={{ width: '200px' }}></img>
            <FrameTypes listType={dataPokemon.types} />
            <FrameLineStatsPokemon dataStats={dataPokemon.stats} style={{ borderTop: '1px solid grey' }} />
            <FrameHeiWei dataPokemon={dataPokemon} />
            <FrameAbility dataAbility={dataPokemon.abilities} />
        </div>
    )
}

export default InfoPokemonCompare;