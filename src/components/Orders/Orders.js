import React from "react";
import { Table, Button, Col } from 'react-bootstrap';

const Orders = () => {
    return (
        <>
            <Col md={12} className={"d-flex my-5 justify-content-between align-items-center"} style={{ height: "65px" }}>
                <h2 className="our-product">Ordenes</h2>
                <Button variant="success" className="btn my-5">
                    Nueva Orden!
                </Button>
            </Col>
            <div className="col">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cliente</th>
                            <th>Total</th>
                            <th>Estatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>$$$</td>
                            <td>Activa</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>$$$</td>
                            <td>Activa</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>$$$</td>
                            <td>Activa</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Orders;