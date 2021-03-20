import React from 'react';
import './ModalHeader.css';

export const ModalHeader = ({ cambiarModal= () => {} }) => {
    return (
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
                Agrega una Mascota
            </h5>
            <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"
                onClick={cambiarModal}
            >
            X
            </button>
        </div>
    );
}