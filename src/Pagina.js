import React from "react";
import { Nav } from './component/Nav/Nav';
import { ActionMenu } from './component/ActionMenu/ActionMenu';
import { Table } from './component/Table';
import { Modal } from './component/Modal';

export const Pagina = () => {
    return(
        <>
            <div className="container">
                <Nav/>                
                <ActionMenu/>
                <Table/>
            </div>
            <Modal/>
        </>
    )
}