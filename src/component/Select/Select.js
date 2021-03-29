import React from 'react';
import './Select.css';

export const Select = ({
    options = [], 
    nombreCampo = "vacio", 
    onChange= () => {},
    placeholder,
}) => {
    return(
        <select  
            defaultValue="Tipo" 
            id="tipo" 
            className="form-control" 
            aria-label="Default select example"
            onChange={onChange}
            name={nombreCampo}
        >
            <option value=''>Seleccione{placeholder}</option>
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