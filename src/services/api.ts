import axios, { AxiosResponse } from 'axios';

interface Response<T> {
	statusCode: number;
	body: T;
}

interface AuthorInterface {
	name: string;
	lastname: string;
}

interface ItemsInterface {
	id: string;
	title: string;
	picture: string;
	condition: string;
	free_shiping: boolean;
	price: {
		currency: string;
		amount: number;
		decimals: number;
	};
}

interface ItemsResponse {
 author: AuthorInterface;
	categories: string[];
	items: ItemsInterface[];
}

const api = axios.create({
	baseURL: 'http://localhost:3000/api'
});

export const searchItems = async (query: string): Promise<ItemsResponse> => {
	const response: AxiosResponse = await api.get(`/items?q=${query}`);

	const { body }: Response<ItemsResponse> = response.data;

	return body;
};
