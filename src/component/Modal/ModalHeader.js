import React from 'react';

export const ModalHeader = () => {
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
            >
            </button>
        </div>
    );
}