import React from 'react';
import { ModalHeader } from './ModalHeader';
import { Select } from '../Select/Select';

export const Modal = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ModalHeader/>
                    <div className="modal-body">
                        <form id="form">
                            <Select/>
                            <div className="row">
                                <div className="col">
                                    <input id="input-nombre" type="text" className="form-control" placeholder="Nombre" aria-label="Nombre"/>
                                </div>
                                <div className="col">
                                    <input  id="input-propie" type="text" className="form-control" placeholder="Propietario" aria-label="Propietario"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary" id="guardar" data-bs-dismiss="modal">Guardar Cambios</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>        
    )
}