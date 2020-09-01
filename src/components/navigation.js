import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../css/navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faStopwatch20 } from '@fortawesome/free-solid-svg-icons';



class Navigation extends Component {
	render() {
		return (
			<Navbar id="navigation" expand="lg">
			  <Navbar.Brand>combine-app</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mx-auto">
			      <Nav.Link href="#click-counter" className="mr-2">Click Counter <FontAwesomeIcon icon={faStopwatch20}/> </Nav.Link>
			      <Nav.Link href="#todo-list">ToDo-List   <FontAwesomeIcon icon={faBookOpen}/></Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
			)
	}
}

export default Navigation;