import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { upperFirst } from "../../utils/handleString";
import { useGetDetailPokemonQuery } from "../../redux/reducers/apiFetch";
import LoadCircle from "../LoadCircle";
const DetailAbility = ({ show, handleClose, ...props }) => {
  const [stateDetail, setStateDetail] = useState("");

  const { data, error, status, isLoading } = useGetDetailPokemonQuery({
    api: show,
  });
  const convertData = () => {
    let ability = {};
    ability.name = upperFirst(data.name);
    ability.descript = data.effect_entries.find(
      (descript) => descript.language.name === "en"
    ).effect;
    setStateDetail(ability);
  };
  useEffect(() => {
    if (status === "fulfilled" && show !== "") {
      convertData();
    }
  }, [data]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show !== "" ? true : false}
      onHide={handleClose}
    >
      {show !== "" && status === "pending" ? (
        <LoadCircle />
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {!data ? <LoadCircle /> : stateDetail.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!data ? <LoadCircle /> : <p>{stateDetail.descript}</p>}
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default DetailAbility;
