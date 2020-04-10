import axios, { AxiosResponse } from 'axios';
import { SearchResults } from '../store/modules/items/items.types';

interface Response<T> {
	statusCode: number;
	body: T;
}

const api = axios.create({
	baseURL: 'http://localhost:3000/api'
});

export const searchItems = async (query: string): Promise<SearchResults> => {
	const response: AxiosResponse = await api.get(`/items?q=${query}`);

	const { body }: Response<SearchResults> = response.data;

	return body;
};
