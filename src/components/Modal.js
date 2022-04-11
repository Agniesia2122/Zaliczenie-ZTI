import React from 'react';
import PropTypes from 'prop-types';
export const Modal = props => {
    const {toggleModal, visibility} = props;
    return (
        visibility && <div className = "modal-component">
        <div className = "modal-component_body">
        <h1>Informacja</h1><div>To jest strona do przeglądania losowych zdjęć piesków poszczególnych ras.</div><button className="btn"></button>
        <button className ="btn" onClick={toggleModal}>Ok, już rozumiem.</button></div></div>);
};
        PropTypes.propTypes = {visibility: PropTypes.bool, toggleModal: PropTypes.func.isRequired};

export default Modal;