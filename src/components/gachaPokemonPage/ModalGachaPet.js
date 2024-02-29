import { useState } from 'react';
import '../../scss/modalgachapet.scss';
const ModalGachaPet = ({ show, body, onHide }) => {
    const handleHide = () => {
        onHide();
    }
    return (
        <div className={`modal-gacha ` + (show && 'show')}>
            <div className='modal-content'>
                <div className='modal-gacha-header py-2'>
                    <button className='btn btn-dark btn-gacha-close' onClick={handleHide}>
                        <i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className='modal-gacha-body py-2'>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default ModalGachaPet;