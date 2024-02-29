import { useState } from 'react';
import '../../scss/summonframestyle.scss';
import { useDispatch } from 'react-redux';
import { useGachax10Mutation, useGachax1Mutation } from '../../redux/reducers/apiUser';
import { openLoginModal } from "../../redux/reducers/toggleSlice";
import Modal from "react-bootstrap/Modal";
import GachaPokemon from './GachaPokemon';
import ModalGachaPet from './ModalGachaPet';

const SummonFrame = ({ hueColor, imgPokemon, title, content, onSummonx1, onSummonx10 }) => {
    const handleSummonx1 = async () => {
        onSummonx1();
    }
    const handleSummonx10 = () => {
        onSummonx10();
    }
    return (
        <div className="container frame-pokeball position-relative mt-4 bg-white rounded " style={{ filter: 'hue-rotate(' + hueColor + 'deg)' }}>
            <div className='row h-100'>
                <div className='col-12 col-md-6'>
                    <div className='frame-character p-3'>
                        <img className='img-character w-75' src={imgPokemon}></img>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='frame-gacha-func d-flex flex-column justify-content-end h-100'>
                        <div className='frame-content-gacha p-3 overflow-auto'>
                            <p className='title'>{title}</p>
                            <p className='content'>{content}</p>
                        </div>
                        <div className='frame-btn-gacha d-flex mb-3 gap-3 flex-wrap justify-content-end'>
                            <button className='btn btn-style border-0 rounded-0 shadow' onClick={handleSummonx1}><span className='text fw-bold'>Summon x1</span></button>
                            <button className='btn btn-style border-0 rounded-0 shadow' onClick={handleSummonx10}><span className='text fw-bold'>Summon x10</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummonFrame;