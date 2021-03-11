import React from 'react';

export const Fila = ({mascota, index}) => {
    return (
        <tr>
        <th scope="row">{index}</th>
        <td>{mascota.tipo}</td>
        <td>{mascota.nombre}</td>
        <td>{mascota.propietario}</td>
        <td>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-info editar"><i className="fas fa-edit"></i></button>
                <button type="button" className="btn btn-danger eliminar"><i className="far fa-trash-alt"></i></button>
            </div>
        </td>
        </tr>
    )
};