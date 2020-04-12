interface ErrorMessages {
	[x: number]: string;
}

const errorMessages: ErrorMessages = {
	404: 'No pude encontrar lo que estabas buscando.',
	500: 'Lo siento Ocurrio un error. Ya estamos trabajando para resolverlo.'
};

function getErrorMessage(statusCode = 500) {
	return errorMessages[statusCode] || errorMessages[500];
}

export default getErrorMessage;
