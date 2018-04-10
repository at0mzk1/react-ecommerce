import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './header.css';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = { isOpenInstances: false,
            isOpenItems: false
        }
    }

    handleOpen = (e) => {
        this.setState({ [e] : true })
    }

    handleClose = (e) => {
        this.setState({ [e] : false })
    }

    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="navbar-brand" href="/"><img src={require('./logo.jpg')} alt="Alto Mare"/></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">Inicio</NavItem>
                        <NavItem eventKey={2} href="/hombres">Hombres</NavItem>
                        <NavItem eventKey={2} href="/mujeres">Mujeres</NavItem>
                        <NavItem eventKey={2} href="/ninos">Niños</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} title="Login" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>Profile</MenuItem>
                            <MenuItem eventKey={1.2}>Account</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }    
}

export default Navigation;