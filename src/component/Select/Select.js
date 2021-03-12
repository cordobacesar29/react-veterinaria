import React from 'react';

export const Select = () => {
    return(
        <div className="row mb-3">
            <div className="col">
                <select  
                    defaultValue="Tipo" 
                    id="tipo" 
                    className="form-select" 
                    aria-label="Default select example"
                >
                    <option></option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Pájaro">Pájaro</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
        </div>
    )
}