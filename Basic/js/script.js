
function food() {
	var sandwiches = { "sandwich": "hamburger", "calories": "260" };
	var fries = { "fries_size": "Large French Fries", "calories": "570" };

	return document.write("My favorite sandwich is a " + sandwiches.sandwich + 
		" which has approximately " + sandwiches.calories + " calories, along with it I enjoy eating " + fries.fries_size + 
		" which have about " + fries.calories + " calories.");
}

food();