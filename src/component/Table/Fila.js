import React from 'react';
import './Fila.css';
import { BotonAction } from '../BotonAction/BotonAction';

export const Fila = ({
    entidad,
    index,
    editarEntidad = () => {},
    eliminarEntidad = () => {},
}) => {
    return (
        <tr>
        <th scope="row">{index}</th>
        <td>{entidad.tipo}</td>
        <td>{entidad.nombre}</td>
        <td>{entidad.propietario}</td>
        <td>
            <div className="btn-group" role="group" aria-label="Basic example">
                <BotonAction 
                    tipo="editar" 
                    onClick={editarEntidad} 
                    index={index}
                />
                <BotonAction 
                    tipo="eliminar" 
                    onClick={(e) => eliminarEntidad(e, index)} 
                    index={index}
                />
            </div>
        </td>
        </tr>
    )
};