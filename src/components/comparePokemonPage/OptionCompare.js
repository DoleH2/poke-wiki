import { useNavigate } from "react-router-dom";
import { useGetDetailPokemonQuery } from "../../redux/reducers/apiFetch";
import '../../scss/optionsearchStyle.scss'
import { changeRouter } from "../../utils/handleRouter";
import LoadCircle from "../utilsComponent/LoadCircle";
const OptionCompare = ({ dataPokemon }) => {
    const navigate = useNavigate();
    const { data, error, status } = useGetDetailPokemonQuery({ api: dataPokemon.url });
    return (
        <>
            {status === "fulfilled" ? (
                <div className="frame-option-search d-flex align-items-center" style={{ cursor: 'pointer' }}>
                    <img src={data.sprites.front_default} style={{ height: '50px' }}></img>
                    <p className="m-0 fw-bold">{dataPokemon.name}</p>
                    <p className="m-0 ms-2 fst-italic">#{data.id}</p>
                </div>
            ) : (<LoadCircle />)
            }
        </>
    )
}

export default OptionSearch;