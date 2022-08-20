import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="light"> 
  <ReactBootStrap.Navbar.Brand href="#home">Muhammad Athar Mutahari</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/home">
    <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/pricing">
    <ReactBootStrap.Nav.Link href="#pricing">Link</ReactBootStrap.Nav.Link>
    </Link>
      <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>

<ReactBootStrap.Nav>
    
    </ReactBootStrap.Nav> 
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="ABC"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

        </div>
    )
}

export default NavBar;