import React from 'react';
import './Input.css';

export const Input = (tipo = 'text', nombreCampo) => {
    <input 
        type={tipo} 
        id={nombreCampo}
        name={nombreCampo}
        className="form-control" 
        placeholder={nombreCampo}
        aria-label={nombreCampo}
    />
}