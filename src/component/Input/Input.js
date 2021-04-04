import React from 'react';
import './Input.css';

export const Input = ({ 
    tipo = 'text', 
    nombreCampo, 
    onInput = () => {},
    placeholder,
    value = '',
}) => {
    return( 
        <input 
            type={tipo} 
            name={nombreCampo}
            className="form-control" 
            placeholder={placeholder}
            aria-label={nombreCampo}
            onInput = {onInput}
            value={value}
        />
    )
}