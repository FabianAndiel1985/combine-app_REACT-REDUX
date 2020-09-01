import React, { Component } from 'react';
import ToDoListDisplay from './todo-list-display';
import ToDoListButton from './todo-list-button';
import { connect } from 'react-redux';
import { 	addToDo,
			increasePriority, 
			decreasePriority,
			removeToDo,
			sortAlphabetically,
			sortPriority
		} from '../actions/index';

import '../css/to-do-list.css';


class ToDoList extends Component {
	render() {
		return (
			<div id="todo-list-container">
				<ToDoListDisplay todos={this.props.todos}
				plusButton={this.props.increasePriority}
				minusButton={this.props.decreasePriority}
				sortAlphabetically = {this.props.sortAlphabetically}	
				sortPriority = {this.props.sortPriority}	
				sortAlphabetically = {this.props.sortAlphabetically}	

				remove={this.props.removeToDo}


				/>
				<ToDoListButton addToDo={this.props.addToDo}
				/>
			</div>
			)
	}
}

let mapStateToProps = (state)=>{return {
  todos: state.todos
}}

let mapDispatchToProps = {
	addToDo: addToDo,
	increasePriority:increasePriority,
	decreasePriority:decreasePriority,
	sortAlphabetically:sortAlphabetically,
	sortPriority:sortPriority,
	removeToDo:removeToDo
}

let ToDoListContainer = connect(mapStateToProps,mapDispatchToProps)(ToDoList);

export default ToDoListContainer;

