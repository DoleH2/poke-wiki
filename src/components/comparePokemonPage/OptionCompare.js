import { useNavigate } from "react-router-dom";
import { useGetDetailPokemonQuery } from "../../redux/reducers/apiPokeFetch";
import "../../scss/optionsearchStyle.scss";
import { changeRouter } from "../../utils/handleRouter";
import LoadCircle from "../utilsComponent/LoadCircle";
const OptionCompare = ({ dataPokemon, onClick }) => {
  const navigate = useNavigate();
  const { data, error, status } = useGetDetailPokemonQuery({
    api: dataPokemon.url,
  });

  const handleOnClick = () => {
    onClick(data);
  }
  return (
    <>
      {status === "fulfilled" ? (
        <div
          className="frame-option-search d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={handleOnClick}
        >
          <img
            src={data.sprites.front_default}
            style={{ height: "50px" }}
          ></img>
          <p className="m-0 fw-bold">{dataPokemon.name}</p>
          <p className="m-0 ms-2 fst-italic">#{data.id}</p>
        </div>
      ) : (
        <LoadCircle />
      )}
    </>
  );
};

export default OptionCompare;
