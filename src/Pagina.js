import React, { Component } from "react";
import { Nav } from './component/Nav/Nav';
import { ActionMenu } from './component/ActionMenu/ActionMenu';
import { Table } from './component/Table/Table';
import { Modal } from './component/Modal/Modal';
import { listarEntidades, crearEditarEntidades } from './servicio';

export class Pagina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
            entidades: [],
            objeto: {},
            idObjeto: null,
            method: 'POST',
        };
    };

    cambiarModal = (_e, method = 'POST') => {
        this.setState({ mostrarModal: !this.state.mostrarModal, method });
    };

    listar = async () => {
        const { entidad } = this.props;
        const entidades = await listarEntidades({ entidad });
        this.setState({ entidades });
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

    componentDidMount = () => {
        this.listar();
    };



    //el metodo render siempre debe ir ultimo
    render = () => {
        const {titulo = 'Pagina sin titulo'} = this.props;
        return(
            <>
                <div className="container">
                    <Nav/>                
                    <ActionMenu 
                        cambiarModal={this.cambiarModal} 
                        titulo={titulo}
                    />
                    <Table 
                        entidades={this.state.entidades}
                        editarEntidad={this.editarEntidad}
                    />
                </div>
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