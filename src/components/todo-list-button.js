import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/to-do-button.css';

class ToDoListButton extends Component {
	render() {
		return (
			<div className="container pt-5" id="todo-list-button-container">
			<h4 className="text-center" id="todo-list-button-heading"> Enter your new To Do </h4>
	
			<Form >
			  <Form.Group controlId="formToDo" className="mx-auto  w-75">
			    <Form.Label>To Do</Form.Label>
			    <Form.Control className="" type="text"/>
			    <Form.Text className="text-muted">
			      Lets get it on ........
			    </Form.Text>
			  </Form.Group>

			  <Form.Group controlId="formPriority" className="mx-auto  w-75">
			    <Form.Label>Priority</Form.Label>
			    <Form.Control className="w-25" type="number"/>
			  </Form.Group>
			  <div className="w-75 mx-auto mt-5">
			  <Button variant="success" onClick={this.props.addToDo} >Add to do</Button>
			  </div>	
			</Form>

			 </div>
			)
	}
}

export default ToDoListButton;