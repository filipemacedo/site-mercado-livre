import getErrorMessage from './error-message';

describe('function getErrorMessage', () => {
	it('should return a message when code is 404', () => {
		const value = getErrorMessage(404);

		expect(value).toBeDefined();
		expect(typeof value).toBe('string');
	});
});
