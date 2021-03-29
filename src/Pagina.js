import React, { Component } from "react";
import { Nav } from './component/Nav/Nav';
import { ActionMenu } from './component/ActionMenu/ActionMenu';
import { Table } from './component/Table/Table';
import { Modal } from './component/Modal/Modal';
import {listarEntidades, crearEditarEntidades} from './servicio';

export class Pagina extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
            entidades: [],
            objeto: {},
        };
    };

    cambiarModal = () => {
        this.setState({ mostrarModal: !this.state.mostrarModal });
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
    }

    crearEntidad() {

    }

    componentDidMount = () => {
        this.listar();
    }



    //el metodo render siempre debe ir ultimo
    render = () => {
        const {titulo = 'Pagina sin titulo'} = this.props;
        return(
            <>
                <div className="container">
                    <Nav/>                
                    <ActionMenu cambiarModal={this.cambiarModal} titulo={titulo}/>
                    <Table entidades={this.state.entidades}/>
                </div>
                {this.state.mostrarModal && (
                    <Modal 
                        cambiarModal={this.cambiarModal} 
                        manejarInput={this.manejarInput}
                    />
                )}
            </>
        );
    };
}