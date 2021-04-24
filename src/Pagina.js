import React, { Component } from "react";
import { ActionMenu } from './component/ActionMenu/ActionMenu';
import { Table } from './component/Table/Table';
import { Modal } from './component/Modal/Modal';
import { listarEntidades,
    crearEditarEntidades,
    eliminarEntidades
} from './servicio';

export class Pagina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
            entidades: [],
            objeto: {},
            idObjeto: null,
            method: 'POST',
            columnas: [],
        };
    };

    cambiarModal = (_e, method = 'POST') => {
        this.setState({ mostrarModal: !this.state.mostrarModal, method });
    };

    listar = async () => {
        const { entidad } = this.props;
        const entidades = await listarEntidades({ entidad });
        let columnas = [];
        if(Array.isArray(entidades) && entidades.length > 0) {
            columnas = Object.keys(entidades[0]) || [];
        }
        this.setState({ entidades, columnas });
    };

    manejarInput = (e) => {
        const {target: {name, value}} = e;
        let {objeto} = this.state;
        objeto = { ...objeto, [name]: value};
        this.setState({ objeto });
    };

    crearEntidad = async () => {
        const {entidad} = this.props;
        const {objeto, method, idObjeto} = this.state;
        await crearEditarEntidades({ entidad, objeto, method, idObjeto });
        this.cambiarModal();
        this.listar();
    };

    editarEntidad = (_e, index) => {
        const objeto = {...this.state.entidades[index] };
        this.setState({ objeto, idObjeto: index }, ()=>{
            this.cambiarModal(null, 'PUT');
        });        
    };
    
    eliminarEntidad =  async (e, index) => {
        const { entidad } = this.props;
        const respuesta = await eliminarEntidades({ entidad, idObjeto: index });
        console.log( {respuesta} );
        this.listar();
    }

    componentDidMount = () => {
        console.log(this.props);
        this.listar();
    };



    //el metodo render siempre debe ir ultimo
    render = () => {
        const {titulo = 'Pagina sin titulo'} = this.props;
        return(
            <>
                <ActionMenu 
                    cambiarModal={this.cambiarModal} 
                    titulo={titulo}
                />
                <Table 
                    entidades={this.state.entidades}
                    editarEntidad={this.editarEntidad}
                    eliminarEntidad={this.eliminarEntidad}
                    columnas={this.state.columnas}
                />
                {this.state.mostrarModal && (
                    <Modal 
                        cambiarModal={this.cambiarModal} 
                        manejarInput={this.manejarInput}
                        crearEntidad={this.crearEntidad}
                        objeto={this.state.objeto}
                        idObjeto={this.state.idObjeto}
                    />
                )}
            </>
        );
    };
}