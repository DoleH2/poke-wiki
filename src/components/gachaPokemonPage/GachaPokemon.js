import { useState } from "react";
import LoadCircle from "../utilsComponent/LoadCircle";
import SunRay from "../utilsComponent/SunRay";
import PokemonPet from "./PokemonPet";

const GachaPokemon = ({ petGacha }) => {
    console.log(petGacha);
    return (
        <div className="frame-pokemon-gacha d-flex flex-wrap gap-1 justify-content-center w-100"
            style={{ width: '75%', maxHeight: "75vh", overflowY: "scroll", overflowX: "hidden" }}>
            {
                petGacha.length > 0 &&
                petGacha.map((pet, idx) => (
                    <PokemonPet key={idx} result={pet} edit={false} />
                ))

            }
        </div>
    )
}

export default GachaPokemon;