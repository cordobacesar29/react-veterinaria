import React from 'react';
import './Alert.css';

export const Alert = ({ alertSwitch = () => {} }) => {
    return (
        <div className="alert alert-danger alert-dismissible" role="alert">
            <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo!.
            <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={alertSwitch}
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}