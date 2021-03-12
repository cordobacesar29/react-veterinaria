import React from 'react';
import './Fila.css';
import { BotonAction } from '../BotonAction/BotonAction';

export const Fila = ({mascota, index}) => {
    return (
        <tr>
        <th scope="row">{index}</th>
        <td>{mascota.tipo}</td>
        <td>{mascota.nombre}</td>
        <td>{mascota.propietario}</td>
        <td>
            <div className="btn-group" role="group" aria-label="Basic example">
                <BotonAction tipo="editar"/>
                <BotonAction tipo="eliminar"/>
            </div>
        </td>
        </tr>
    )
};