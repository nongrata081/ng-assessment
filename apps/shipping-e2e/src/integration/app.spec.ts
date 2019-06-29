import { getGreeting } from '../support/app.po';

describe('shipping', () => {
	beforeEach(() => cy.visit('/'));

	it('should display welcome message', () => {
		// getGreeting().contains('Welcome to shipping!');
	});
});
