import React, { Component } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import Icons from './CartWidget';

const NavBarComp = ({carrito}) =>{
    console.log(carrito);

        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/Home.js">ASTA SHOP</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/pages/Home.js">HOME</Nav.Link>
                                <Nav.Link href="/pages/lentes.js">LENTES</Nav.Link>
                                <Nav.Link href="/pages/medias.js">MEDIAS</Nav.Link>
                                <Nav.Link href="/pages/contactanos.js">CONTACTANOS</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Icons carrito={carrito} />
                    </Container>
                </Navbar>
            </div>
        )
}

export default NavBarComp;