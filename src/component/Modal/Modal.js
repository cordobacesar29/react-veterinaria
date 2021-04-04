import React from 'react';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';
import './Modal.css';

const tipoMascota = [
    {valor: "Tipo Animal", etiqueta:"Tipo Animal"},
    {valor: "Perro", etiqueta:"Perro"},
    {valor: "Gato", etiqueta:"Gato"},
    {valor:"Pájaro", etiqueta:"Pájaro"},
    {valor:"Otro", etiqueta:"Otro"}
];

export const Modal = ({ 
    cambiarModal = () => {},  
    manejarInput = () => {},
    crearEntidad = () => {},
    objeto = {},
 }) => {
    return (
        <>
            <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ModalHeader cambiarModal={cambiarModal}/>
                        <div className="modal-body">
                            <form id="form">
                                <Select 
                                    options = {tipoMascota} 
                                    onChange={manejarInput} 
                                    nombreCampo="tipo"
                                    placeholder = 'Tipo Animal'
                                    value = {objeto.tipo}
                                />
                                <div className="form-row">
                                    <div className="col">
                                        <Input 
                                            tipo="text" 
                                            nombreCampo='nombre'
                                            onInput={manejarInput}
                                            placeholder = 'Nombre'
                                            value = {objeto.nombre}
                                        />
                                    </div>
                                    <div className="col">
                                        <Input 
                                            tipo="text" 
                                            nombreCampo= 'propietario'
                                            onInput={manejarInput}
                                            placeholder = 'Propietario'
                                            value = {objeto.propietario}
                                        />
                                    </div>
                                </div>
                                <ModalFooter 
                                    cambiarModal={cambiarModal}
                                    crearEntidad={crearEntidad}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="modal-backdrop fade show"></div>
        </>      
    )
}