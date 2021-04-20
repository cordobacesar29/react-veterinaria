import React from 'react';
import { BotonAction } from '../BotonAction/BotonAction';
import './Fila.css';

const evaluarCampo = ( { entidad, columna }) => {
    if(columna === 'veterinaria') {
        return `${entidad[columna].nombre} ${entidad[columna].apellido}`;
    }
    if( columna === 'mascota' ){
        return `${entidad[columna].nombre} (${entidad[columna].tipo})`;
    };
    return entidad[columna];
};

export const Fila = ({
    entidad,
    index,
    columnas = [],
    editarEntidad = () => {},
    eliminarEntidad = () => {},
}) => {
    return (
        <tr>
        <th scope="row">{index}</th>
        {columnas.map((columna, _index)=>(
            <td key={`col-${columna}-${_index}`}>{evaluarCampo({entidad, columna})}</td>
        ))}
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