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

export const Modal = ({ cambiarModal = () => {} }) => {
    return (
        <>
            <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ModalHeader cambiarModal={cambiarModal}/>
                        <div className="modal-body">
                            <form id="form">
                                <Select options = {tipoMascota} nombreCampo="Tipo Animal"/>
                                <div className="form-row">
                                    <div className="col">
                                        <Input tipo="text" nombreCampo="nombre"/>
                                    </div>
                                    <div className="col">
                                        <Input tipo="text" nombreCampo="propietario"/>
                                    </div>
                                </div>
                                <ModalFooter cambiarModal={cambiarModal}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="modal-backdrop fade show"></div>
        </>      
    )
}