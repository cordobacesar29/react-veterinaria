import React from 'react';
import { Encabezado } from './Encabezado';
import { Fila } from './Fila';
import './Table.css';

export const Table = () => {
    const [mascotas, setMascotas]  = React.useState([
        {
            tipo: "Gato",
            nombre: "Salem",
            propietario: "César"
        },
        {
            tipo: "Perro",
            nombre: "Druppy",
            propietario: "Jeremías"
        }
    ]);
    const columnas = mascotas.length > 0 ? Object.keys(mascotas[0]) : [];
    return (
        <table className="table table-hover">
            <Encabezado columnas={columnas}/>
            <tbody id="lista-mascotas">
                {
                    mascotas.map(
                        (mascota, index) =>
                        <Fila 
                            mascota={mascota} 
                            index={index}
                        />
                    )
                }
            </tbody>
        </table>
    )
}