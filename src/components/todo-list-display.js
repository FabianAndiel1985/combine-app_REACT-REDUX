import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types'; 
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../css/to-do-display.css';


class ToDoListDisplay extends Component {
	constructor(props){
		super(props);
	}

    render() {
        return (
        	<div className="container pt-5" >
	            <Table responsive>
				  <thead>
				    <tr>
				      <th>ToDo   
				      	<span order="default" id="todo-name" className="todo-list-display-black-rectangle display-inline-block ml-1" onClick={this.props.sortAlphabetically}> 
				      		 &#9660;
				      	</span>	
				      </th>
				      <th>Priority 
				      	<span order="default" id="priority" className="todo-list-display-black-rectangle display-inline-block ml-1" onClick={this.props.sortPriority}> 
				      		 &#9660;
				      	</span>	
				      </th>
				      <th> Modify </th>
				      <th></th>
				    </tr>
				  </thead>
				  <tbody>
				    {this.props.todos.map((todo)=>
				    	<tr key={todo.id}>
				    		<td>{todo.description}</td>
				    		<td>{todo.priority}</td>
				    		<td> 
				    			<Button id={todo.id} variant="success" className="to-do-list-display-plus-button d-inline-block mr-2" onClick={this.props.plusButton}> &#43;</Button> 
				    			<Button id={todo.id}  variant="danger"  className="to-do-list-display-minus-button d-inline-block" onClick={this.props.minusButton}>-</Button> 
				    		</td>
				    		<td><u><em> <span id={todo.id} className="todo-list-remove" onClick={this.props.remove}> remove </span></em> </u></td>	
				    	</tr>)}
				  </tbody>
				</Table>

				<div id="myModal" className="modal">
	  				<div className="modal-content">
	    				<span className="close">&times;</span>
	    				<p className="text-center">Please fill out ToDo and its priority</p>
	  				</div>
				</div>
			</div>
        )
    }
}


ToDoListDisplay.propTypes =  {
	plusButton: PropTypes.func.isRequired,
	minusButton: PropTypes.func.isRequired,
	todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    priority:PropTypes.number
  })).isRequired
}

export default ToDoListDisplay;