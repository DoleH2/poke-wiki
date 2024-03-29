import LoadCircle from "../utilsComponent/LoadCircle";
import { formatNumber } from "../../utils/handleNumber";
import { upperFirst } from "../../utils/handleString";
import { TagElement } from "../utilsComponent/TagElement";
import { changeRouter } from "../../utils/handleRouter";
import { useNavigate } from "react-router-dom";
import { useGetDetailPokemonQuery } from "../../redux/reducers/apiPokeFetch";
import { useState } from "react";

const CardPokemon = ({ dataPokemon }) => {
  const [loadImage, setLoadImage] = useState(false);
  const { data, error, status } = useGetDetailPokemonQuery({
    api: dataPokemon.url,
  });
  const navigate = useNavigate();

  const handleLoadImg = () => {
    setLoadImage(true);
  };

  return (
    <div className="frame-card-pokemon border rounded">
      {status === "pending" ? (
        <LoadCircle />
      ) : (
        <>
          <div
            className={`content-card-pokemon d-flex flex-column p-2 h-100 ${data.types[0].type.name}`}
            onClick={() => changeRouter(navigate, "/info", data)}
          >
            <div
              className={`frame-head-card d-flex justify-content-between align-items-center`}
            >
              <div className="frame-card-name-pokemon text-start d-flex align-items-center gap-1">
                <p className="name-pokemon m-0 fs-5 fw-bold">
                  {data.name && upperFirst(data.name)}
                </p>
                <p className="m-0">#{data.id}</p>
              </div>
              <div className="frame-element-pokemon"></div>
            </div>
            <div className="frame-body-card">
              <img
                src={data.sprites.front_default}
                alt="Pokemon"
                className="w-100"
                onLoad={handleLoadImg}
              ></img>
              {!loadImage && <LoadCircle />}
            </div>
            <div
              className={`frame-footer-card flex-wrap gap-2 mt-auto d-flex `}
            >
              {data.types.map((element, idx) => (
                <TagElement key={idx} data={element.type.name} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardPokemon;
