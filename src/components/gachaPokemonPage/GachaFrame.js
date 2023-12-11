import SunRay from "../utilsComponent/SunRay";
import pokeBall from "../../img/pokeball.png";
import "../../scss/gachaframestyle.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import LoadCircle from "../utilsComponent/LoadCircle";
const GachaFrame = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [loadPokemon, setLoadPokemon] = useState(false);
  const handleShow = () => {
    setShow(true);
    setLoadPokemon(false);
  };
  useEffect(() => {}, []);
  return (
    <div className="frame-gacha-pokemon">
      <div className="frame-pokeball position-relative p-5 pt-3 bg-white rounded">
        <p className="m-0 h4 mx-auto text-center">Click to Get Pokemon</p>
        <img
          src={pokeBall}
          className="w-100 img-pokeball position-relative"
          style={{ zIndex: "10" }}
          onClick={handleShow}
        ></img>
      </div>
      <Modal
        className="modal-show-pokemon"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header
          className="bg-transparent border-0"
          closeButton
        ></Modal.Header>
        <Modal.Body className="d-flex justify-content-center flex-column">
          {!loadPokemon && <LoadCircle />}

          <img
            onLoad={() => setLoadPokemon(true)}
            className="w-100 img-pokemon"
            style={{ zIndex: "10" }}
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
            }
          ></img>
          {loadPokemon && (
            <>
              <SunRay />
              <div className="frame-stats d-flex justify-content-between">
                <p className="text-white">HP</p>
                <p className="text-white">ATK</p>
                <p className="text-white">DEF</p>
                <p className="text-white">S.ATK</p>
                <p className="text-white">S.DEF</p>
                <p className="text-white">SPD</p>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GachaFrame;
