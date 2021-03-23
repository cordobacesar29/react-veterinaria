import React from 'react';
import './ActionMenu.css';
import { Alert } from '../Alert/Alert';

export const ActionMenu = ({cambiarModal = () => {}, titulo }) => {
    return (
        <div className="actions-menu">
            <h1>{titulo}</h1>
            <div className="actions-menu-content">
                <div>
                    <button 
                        type="button" 
                        className="btn btn-dark" 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                        onClick = {cambiarModal}
                    >
                        Nueva
                    </button>
                </div>
                { /*<Alert />*/ }
            </div>            
        </div>
    )
}