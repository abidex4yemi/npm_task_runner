const Dice = require('../src/models/dice');
const chai = require('chai');
const { expect } = chai;

// Instantiate a new dice object
const dice = new Dice(6);

describe('Roll()', () => {
	it('Should return a number over 0 and less than 7', () => {
		expect(dice.roll()).to.be.a('number');
	});
});