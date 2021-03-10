import React, { useState } from 'react';
import './ActionMenu.css';
import { Alert } from '../Alert/Alert';

export const ActionMenu = () => {
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const alertSwitch = () =>setMostrarAlerta(!mostrarAlerta);
    return (
        <div className="actions-menu">
            <div className="actions-menu-content">
                <div>
                    <h1 className="page-title">Mascotas</h1>
                    <button 
                        type="button" 
                        className="btn btn-dark" 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                        onClick = {alertSwitch}
                    >
                        Nueva
                    </button>
                </div>
                { mostrarAlerta && <Alert alertSwitch={alertSwitch}/> }
            </div>            
        </div>
    )
}