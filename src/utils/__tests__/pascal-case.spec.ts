import pascalCase from '../pascal-case';

describe('function pascalCase', () => {
	it('should upper case first letters', () => {
		const word = 'word';

		const formatted = pascalCase(word);

		expect(formatted).toBeDefined();
		expect(formatted[0]).not.toBe(word[0]);
		expect(formatted[0]).toBe(word[0].toUpperCase());
	});
});
