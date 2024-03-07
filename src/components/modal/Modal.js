import React from 'react';
import "./mod.css"
const Modal = ({ clickedImage, setClickedImage, setView }) => {

    const handleClick = () => {

        setClickedImage(null);
        setView(false);
    }


    return (
        <div className="overlay dismiss">
            <img src={clickedImage} alt="bigger pic" />
            <span className="dismiss" onClick={handleClick}>
                X
            </span>
        </div>
    );
}

export default Modal;
