export function increment() {
	return {type:"INCREMENT"};
}

export function decrement() {
	return {type:"DECREMENT"};
}

export function addToDo() {
	let description = document.querySelector("#formToDo").value.trim(); 
	let priority =document.querySelector("#formPriority").value.trim();
	
	if(description != "" && priority != "" ) {
		priority = parseInt(priority);
		return {type:"ADD_TO_DO",description:description,priority:priority};
	}

	else {
		let modal = document.getElementById("myModal");
		
		let closingX = document.getElementsByClassName("close")[0];

		modal.style.display = "block";

		closingX.onclick = function() {
		  modal.style.display = "none";
		}

	}


}

export function increasePriority(event) {
	let id=event.target.id;
	return {type:"INCREASE_PRIORITY",id:id};
}

export function decreasePriority(event) {
	let id=event.target.id;
	return {type:"DECREASE_PRIORITY",id:id};
}

export function sortPriority(event) {
	let orderSystem = event.target.getAttribute("order");
	return {type:"SORT_PRIORITY", order:orderSystem};
}

export function sortAlphabetically(event) {
	let orderSystem = event.target.getAttribute("order");
	return {type:"SORT_ALPHABETICALLY",order:orderSystem};
}

export function removeToDo(event){
	let id=event.target.id;
	return {type:"REMOVE",id:id};
}