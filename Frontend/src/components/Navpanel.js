import React from "react";
import "../css/navbar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/uai.jpeg';
import { FaChalkboardTeacher } from "react-icons/fa"
import { AiOutlineHome } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";

function Navpanel() {
    
    return (
        <Nav class="py-0">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Nav className="m-auto">
            <Navbar.Brand href="/"><img className="logo_de_marca" src={logo} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/"><a className="linkText"  href="/">Home <AiOutlineHome/></a></Nav.Link>
                <Nav.Link href="/Inscripcion"><a className="linkText" href="/Inscripcion">Inscripción <FaRegListAlt/></a></Nav.Link>
                <Nav.Link href="/ProfeGuia"><a className="linkText" href="/ProfeGuia">Profesor Guía <FaChalkboardTeacher/></a></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Nav>
    </Navbar>
    </Nav>
    );
}

export {Navpanel};