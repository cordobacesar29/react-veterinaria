import React from 'react';
import { Encabezado } from './Encabezado';
import { Fila } from './Fila';
import './Table.css';

export const Table = ({ entidades='' }) => {
    const columnas = entidades.length > 0 ? Object.keys(entidades[0]) : [];
    return (
        <table className="table table-hover">
            <Encabezado columnas={columnas}/>
            <tbody id="lista-mascotas">
                {
                    entidades.map(
                        (entidad, index) =>
                        <Fila 
                            entidad={entidad} 
                            index={index}
                        />
                    )
                }
            </tbody>
        </table>
    )
}