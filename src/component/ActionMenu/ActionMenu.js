import React from 'react';
import './ActionMenu.css';
import { Alert } from '../Alert/Alert';

export const ActionMenu = () => {
    return (
        <div className="actions-menu">
            <h1 className="page-title">Mascotas</h1>
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Nueva
            </button>
            <div id="actions-menu"></div>
            <Alert/>
        </div>
    )
}