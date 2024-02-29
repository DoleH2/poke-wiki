
import "../../scss/gachaframestyle.scss";
import { useState } from "react";
import GachaPokemon from "./GachaPokemon";
import SummonFrame from './SummonFrame';
import dialga from '../../img/Dialga-Pokemon-Transparent-PNG.png';

import { useDispatch } from "react-redux";
import { openLoginModal } from "../../redux/reducers/toggleSlice";
import LoadCircle from "../utilsComponent/LoadCircle";
import ModalGachaPet from "./ModalGachaPet";
import { useGachax10Mutation, useGachax1Mutation } from "../../redux/reducers/apiMember";
const GachaFrame = () => {
  const dispatch = useDispatch();
  const [gachax1, resultx1] = useGachax1Mutation();
  const [gachax10, resultx10] = useGachax10Mutation();
  const [debounceSummon, setDebounceSummon] = useState(true);
  const [show, setShow] = useState(false);
  const [resultGacha, setResultGacha] = useState([]);
  const handleHide = () => {
    setShow(false);
  }
  const handleSummonx1 = async () => {
    if (!debounceSummon) return;
    setDebounceSummon(false);
    try {
      setShow(true);
      const result = await gachax1().unwrap();
      setResultGacha(result);
    } catch (error) {
      if (error.name === 'UnauthorizedException' || (error.status === 401)) {
        setShow(false);
        dispatch(openLoginModal());
      } else {
        console.log(error);
      }
    }
    setDebounceSummon(true);
  }
  const handleSummonx10 = async () => {
    if (!debounceSummon) return;
    setDebounceSummon(false);
    try {
      setShow(true);
      const result = await gachax10().unwrap();
      setResultGacha(result);
    } catch (error) {
      setShow(false);
      dispatch(openLoginModal());
    }
    setDebounceSummon(true);
  }
  return (
    <div className="frame-gacha-pokemon d-flex flex-column gap-2">
      <SummonFrame
        hueColor={0}
        imgPokemon={dialga}
        title={"Summon Pokemon"}
        content={"Pokémon, short for \"Pocket Monsters,\" is a vibrant universe teeming with diverse creatures possessing unique abilities. Trainers embark on journeys to capture and train these creatures, engaging in battles to become Pokémon Champions. The bond between trainers and their Pokémon is at the heart of this fantastical world"}
        onSummonx1={handleSummonx1}
        onSummonx10={handleSummonx10}
      />
      {/* <Modal
        className="modal-show-pokemon mx-auto"
        show={show}
        backdrop="static"
        onHide={() => { setShow(false); setResultGacha([]) }}
      >
        <Modal.Header
          className="bg-transparent border-0"
          closeButton
        ></Modal.Header>
        <Modal.Body className="d-flex justify-content-center flex-wrap">
          {resultx10.isLoading || resultx1.isLoading ? <LoadCircle /> : <GachaPokemon petGacha={resultGacha} />}

        </Modal.Body>
      </Modal> */}
      <ModalGachaPet
        show={show}
        onHide={handleHide}
        body={resultx10.isLoading || resultx1.isLoading ? <LoadCircle /> : <GachaPokemon petGacha={resultGacha} />}
      />
    </div>
  );
};

export default GachaFrame;
