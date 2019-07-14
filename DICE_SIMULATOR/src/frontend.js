function displayNumber(number) {
	const placeholder = document.getElementById('placeholder');
	placeholder.innerHTML = number;
}

// Instantiate a new dice object
const dice = new Dice(6);

// get roll dice button
const button = document.getElementById('button');

// bind click event to roll dice button
button.addEventListener('click', function() {
	const result = dice.roll();
	displayNumber(result);
});