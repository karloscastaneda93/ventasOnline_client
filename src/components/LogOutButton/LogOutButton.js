import React, { Fragment, useState } from "react";
import { Modal, Button, Nav } from 'react-bootstrap';

const LogOutButton = ({ signOutCB }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSignOut = () => { signOutCB(); handleClose() };
    return (
        <Fragment>
            <Nav.Link href="#" onClick={handleShow}><i className="fas fa-sign-out-alt mr-1"></i>Cerrar Sesión</Nav.Link>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cerrar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>seguro que quieres salir?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleSignOut}>
                        Salir!
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default LogOutButton;