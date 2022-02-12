import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import React from 'react'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="#home">Security Company</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#about">About us</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <NavDropdown title="Blog" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><Icon.Facebook></Icon.Facebook>Facebook</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Icon.Twitter></Icon.Twitter>Twitter
                        </Nav.Link>
                        <Nav.Link href="#deets"><Icon.Instagram></Icon.Instagram>Instagram</Nav.Link>
                        <Nav.Link href="#contact" className='text-white fw-bold'>Login</Nav.Link>
                        <Nav.Link href="#contact" className='text-danger fw-bold'>Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

