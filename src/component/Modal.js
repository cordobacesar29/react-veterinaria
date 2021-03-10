import React from 'react';

export const Modal = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Agrega una Mascota</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form id="form">
                            <input type="hidden" id="indice"/>
                            <div className="row mb-3">
                                <div className="col">
                                    <select  defaultValue="Tipo" id="tipo" className="form-select" aria-label="Default select example">
                                        <option value="Perro">Perro</option>
                                        <option value="Gato">Gato</option>
                                        <option value="Pájaro">Pájaro</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            </div>
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