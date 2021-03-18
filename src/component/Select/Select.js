import React from 'react';
import './Select.css';

export const Select = ({options = [], nombreCampo = "vacio" }) => {
    return(
        <select  
            defaultValue="Tipo" 
            id="tipo" 
            className="form-select" 
            aria-label="Default select example"
        >
            
            {options.map(({valor,etiqueta}, index) =>(
                <option  
                    key={`${nombreCampo}-${index}-${valor}-${etiqueta}`} 
                    value={valor}
                >
                    {etiqueta}
                </option>
            ))}
        </select>
    )
}