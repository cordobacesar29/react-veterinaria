import React from 'react';
import { Encabezado } from './Encabezado';

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
                        (mascota, index) => <tr>
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
                }
            </tbody>
        </table>
    )
}