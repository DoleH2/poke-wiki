import { formatNumber } from "../utils/handleNumber";

export const InfoPokemon = ({ dataPokemon }) => {
    const handleErrorImg = (e, data) => {
        if (data.sprites.front_default !== null) {
            e.target.src = data.sprites.front_default;
        }
    }
    return (
        <div className="container bg-white">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img
                        src={
                            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
                            formatNumber(dataPokemon.id, 3) +
                            ".png"
                        }
                        alt="Pokemon"
                        className="w-100"
                        onError={(e) => handleErrorImg(e, dataPokemon)}
                    ></img>
                </div>
                <div className="col-12 col-md-6">
                    <div className="frame-stats">

                    </div>
                </div>
            </div>
        </div>
    )
} 