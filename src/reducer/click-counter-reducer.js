let initialState = [{ id: 0, number: 0 }];

function counter(state = initialState, action) {

    if (action.type == "INCREMENT") {
        let newNumber = state.length;
        let maxId = 0;

        for (let i = 0; i < state.length; i++) {
            if (state[i].id > maxId) {
                maxId = state[i].id;
            }   
        }
     
         return [].concat(state,{id: maxId + 1, number: newNumber});
    }


    else if (action.type == "DECREMENT") {

        state.pop();
     
        return [].concat(state);
    }

   
    return state;
}


export default counter;