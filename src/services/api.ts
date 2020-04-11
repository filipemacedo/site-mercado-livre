import axios, { AxiosResponse } from 'axios';
import { SearchResults, ItemInterface } from '../store/modules/items/items.types';

interface Response<T> {
	statusCode: number;
	body: T;
}

const api = axios.create({
	baseURL: 'http://localhost:3000/api'
});

/**
	* Function responsible for send request to api
	* and return search results
	*
	* @param query 
	*/
export const searchItems = async (query: string): Promise<SearchResults> => {
	const response: AxiosResponse = await api.get(`/items?q=${query}`);

	const { body }: Response<SearchResults> = response.data;

	return body;
};

/**
	* Function responsible for send request to api
	* and return a item
	* 
	* @param itemId 
	*/
export const findItem = async (itemId: string): Promise<ItemInterface> => {
	const response: AxiosResponse = await api.get(`/items/${itemId}`);

	const { body }: Response<ItemInterface> = response.data;

	return body;
};
