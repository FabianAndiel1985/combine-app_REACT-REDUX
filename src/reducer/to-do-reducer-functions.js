import ToDo from '../models/todo';

export function sortAlphabetically(state,action) {

if(action.order=="default") {
            
            sortAlphabeticallyAscending(state);

            document.querySelector("#todo-name").setAttribute("order", "ascending");

            return [].concat(state);
        }

        else if(action.order=="ascending") {

            sortAlphabeticallyDescending(state);

            document.querySelector("#todo-name").setAttribute("order", "descending");

            return [].concat(state);
        }

        else if(action.order=="descending") {
              
            sortAlphabeticallyAscending(state);

            document.querySelector("#todo-name").setAttribute("order", "ascending");

            return [].concat(state);
            }

}


export function sortAlphabeticallyAscending(state) {
	state.sort(function(a, b){
    		if(a.description < b.description) { return -1; }
    		if(a.description > b.description) { return 1; }
    		return 0;
			})
}



export function sortAlphabeticallyDescending(state) {
	state.sort(function(a, b){
    		if(a.description < b.description) { return +1; }
    		if(a.description > b.description) { return -1; }
    		return 0;
			})
}

export function sortPriority(state,action) {
    if(action.order=="default") {
            
            sortPriorityAscending(state);

            document.querySelector("#priority").setAttribute("order", "ascending");

            return [].concat(state);
        }

        else if(action.order=="ascending") {

            sortPriorityDescending(state);

            document.querySelector("#priority").setAttribute("order", "descending");

            return [].concat(state);

        }

        else if(action.order=="descending") {

            sortPriorityAscending(state);

            document.querySelector("#priority").setAttribute("order", "ascending");

            return [].concat(state);

        }


}


export function sortPriorityAscending(state) {
            state.sort(function(a, b){
            if(a.priority < b.priority) { return -1; }
            if(a.priority > b.priority) { return 1; }
            return 0;
            })
}

export function sortPriorityDescending(state) {
            state.sort(function(a, b){
            if(a.priority < b.priority) { return +1; }
            if(a.priority > b.priority) { return -1; }
            return 0;
            })
}


export function checkIfToDoExists(action,state) {
    let exists = false;

    state.forEach((todo)=> {
        if(todo.description == action.description) {
           exists = true;
        }
    });

    return exists;
}

export function addNewToDo(action,state){
    let maxId = 0; 
        for (let i=0;i<state.length;i++)  {
            if(state[i].id>maxId) {
                    maxId=state[i].id;
            }
        }
    return [].concat(state,new ToDo(maxId+1,action.description,action.priority));
}


export function askIfUserWantsIncreasePriority(action,state) {
    let userConfirmation = window.confirm("ToDo already exists. Do you want to in crease it`s priority by "+action.priority+ " ?");
            
            if(userConfirmation){
                return increasePriorityFromNewToDo(action,state);
            }
}



export function increasePriorityFromNewToDo(action,state) {
    state.forEach((todo)=> {
                    if(todo.description == action.description) {
                        todo.priority += action.priority;
                    }
                })
    return [].concat(state);
}

