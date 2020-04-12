import { delay } from 'redux-saga/effects';

describe('function delay', () => {
	it('should return value when timeout is completed', async () => {
		const input = 0;

		const value = delay(100, input);

		expect(value).toBe(value);
	});
});
