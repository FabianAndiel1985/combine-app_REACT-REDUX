import todos from './todo-reducer';
import counter from './click-counter-reducer';
import { combineReducers } from 'redux';

let reduce = combineReducers({
		counter:counter,
		todos: todos
		});

export default reduce;
