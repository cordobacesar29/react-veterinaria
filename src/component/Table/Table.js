import React from 'react';
import { Encabezado } from './Encabezado';
import { Fila } from './Fila';
import './Table.css';

export const Table = ({ 
    entidades= [],
    editarEntidad = ()=>{},
    eliminarEntidad = ()=>{},
    columnas = [],
 }) => {
    return (
        <table className="table table-hover">
            <Encabezado columnas={columnas}/>
            <tbody id="lista-mascotas">
                {
                    entidades.map(
                        (entidad, index) => (
                            <Fila 
                                key={`fila-${index}`}
                                index={index}
                                entidad={entidad} 
                                columnas={columnas}
                                editarEntidad={editarEntidad}
                                eliminarEntidad={eliminarEntidad}
                            />
                        )
                    )
                }
            </tbody>
        </table>
    )
}