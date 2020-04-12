interface NumberFormatCurrencyProps {
	currency: string;
	decimals: number;
	value: number;
}

const numberFormatCurrency = ({ currency, decimals, value }: NumberFormatCurrencyProps) => {
	return new Intl.NumberFormat(currency, { currency, maximumFractionDigits: decimals }).format(value);
};

export default numberFormatCurrency;
