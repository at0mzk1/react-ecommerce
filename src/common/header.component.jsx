import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import './header.css';

const loginIcon = (<Glyphicon glyph="user"/>);
const cartIcon = (<Glyphicon glyph="shopping-cart"/>);

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
                            <a href="/"><img src={require('./logo.jpg')} alt="Alto Mare" className="logo"/></a>
                    <Navbar.Toggle />
                    <Nav className="loginMenu">
                        <NavDropdown eventKey={1} title={cartIcon} id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>Profile</MenuItem>
                            <MenuItem eventKey={1.2}>Account</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav className="loginMenu">
                        <NavDropdown eventKey={1} title={loginIcon} id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>Profile</MenuItem>
                            <MenuItem eventKey={1.2}>Account</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Header>
                <Navbar.Collapse className="navBarMenu">
                    <Nav className="menuItems">
                        <NavItem eventKey={1} href="/home">Inicio</NavItem>
                        <NavItem eventKey={2} href="/man">Man</NavItem>
                        <NavItem eventKey={2} href="/women">Woman</NavItem>
                        <NavItem eventKey={2} href="/children">Kids</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }    
}

export default Navigation;