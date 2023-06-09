import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import "./Header.css";

const Header = ({ isAuth }) => {
    const [expandSidebar, setExpandSidebar] = useState(false);

    const signOut = async () => {
        await this.props.signOut();
        await this.props.checkAuth();
    }

    const signOutHandler = () => {
        signOut();
    }

    return (
        <>
            {isAuth ?
                <>
                    <Navbar bg="light" expand="lg" sticky="top" style={{ boxShadow: "0 5px 5px -3px rgba(0,0,0,.15)" }}>
                        <Navbar.Brand as={Link} to="/">
                            <div>
                                Luna Bazzar App
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle as={'a'} aria-controls="basic-navbar-nav" >
                            <i className={'fa fa-search'}></i>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Form inline className="d-flex justify-content-center" style={{ width: "100%" }}>
                                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </>
                :
                null
            }
        </>
    );
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuthenticated,
        cookieUser: state.dash.user,
        loggedInUser: state.dash.user
    };
}

export default connect(mapStateToProps, actions)(Header);