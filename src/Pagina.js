import React, { Component } from "react";
import { Nav } from './component/Nav/Nav';
import { ActionMenu } from './component/ActionMenu/ActionMenu';
import { Table } from './component/Table/Table';
import { Modal } from './component/Modal/Modal';

export class Pagina extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
        };
    }

    cambiarModal = () => {
        this.setState({ mostrarModal: !this.state.mostrarModal });
    }
    render(){
        const {titulo = 'Pagina sin titulo'} = this.props;
        return(
            <>
                <div className="container">
                    <Nav/>                
                    <ActionMenu cambiarModal={this.cambiarModal} titulo={titulo}/>
                    <Table/>
                </div>
                {this.state.mostrarModal && <Modal cambiarModal={this.cambiarModal}/>}
            </>
        );
    }
}