import React from 'react';
import './ModalFooter.css';

export const ModalFooter = ( { 
    cambiarModal = () => {}, 
    crearEntidad = () => {},
} ) => {
    return(
        <div className="modal-footer">
            <button 
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal"
                onClick={cambiarModal}
            >
                Cerrar
            </button>
            <button 
                type="button" 
                className="btn btn-primary" 
                id="guardar" 
                data-bs-dismiss="modal"
                onClick={crearEntidad}
            >
                Crear
            </button>
        </div>
    )
}