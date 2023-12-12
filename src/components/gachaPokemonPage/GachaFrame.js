import SunRay from "../utilsComponent/SunRay";
import pokeBall from "../../img/pokeball.png";
import "../../scss/gachaframestyle.scss";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import LoadCircle from "../utilsComponent/LoadCircle";
const GachaFrame = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [loadPokemon, setLoadPokemon] = useState(false);
  //load image va du lieu hoan tat
  const handleShow = () => {
    setShow(true);
    setLoadPokemon(false);
  };
  //click de hien thi pokemon
  const [appear, setAppear] = useState(false);
  const handleAppear = () => {
    setAppear(true);
  }
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
        backdrop="static"
        onHide={handleClose}
      >
        <Modal.Header
          className="bg-transparent border-0"
          closeButton
        ></Modal.Header>
        <Modal.Body className="d-flex justify-content-center flex-column">
          {!loadPokemon && <LoadCircle />}
          <div className={`frame-pokemon-gacha ${appear && 'open'}`} onClick={handleAppear}>
            <img
              onLoad={() => setLoadPokemon(true)}
              className="w-100 img-pokemon"
              style={{ zIndex: "10" }}
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
              }
            ></img>
            {loadPokemon && (
              <>
                <SunRay />
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GachaFrame;
