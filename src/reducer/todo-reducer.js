import ToDo from '../models/todo';
import { sortAlphabeticallyDescending,
		 sortAlphabeticallyAscending,
		 sortAlphabetically,
		 sortPriorityAscending,
		 sortPriorityDescending,
		 sortPriority,
		 checkIfToDoExists,
		 addNewToDo,
		 increasePriorityFromNewToDo,
		 askIfUserWantsIncreasePriority
			} from './to-do-reducer-functions';


let initialState= 
			[new ToDo(0,"Spazieren gehen",3),
			new ToDo(1,"Programmieren",10),
			new ToDo(2,"Trainieren",6)
			]

function todos(state=initialState,action) {
	
	if(action.type=="ADD_TO_DO")
	{
		if(!checkIfToDoExists(action,state)){
			return addNewToDo(action,state);
		}

		else {
			return askIfUserWantsIncreasePriority(action,state);		
		}

	}

	if(action.type=="INCREASE_PRIORITY") {

		for(let i =0;i<state.length;i++) {
			if(state[i].id == action.id) {
				state[i].priority++;
			}
		}

		return [].concat(state);
	}


	else if(action.type=="DECREASE_PRIORITY") {

		for(let i =0;i<state.length;i++) {
			if(state[i].id == action.id) {
				state[i].priority--;
			}
		}

		return [].concat(state);
	}

	else if (action.type == "SORT_PRIORITY") {
		return sortPriority(state,action);
    }


    else if (action.type == "SORT_ALPHABETICALLY") {

    	return sortAlphabetically(state,action);

   	 	}


	else if(action.type=="REMOVE") {
	
		state.splice(action.id,1);

		for(let i=0;i<state.length;i++) {
			state[i].id = i;
		}

		return [].concat(state);
	}

	return state;
}



export default todos;
