import React from 'react';

export const ActionMenu = () => {
    return (
        <div className="actions-menu">
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Nueva
            </button>
            <div id="actions-menu"></div>
        </div>
    )
}