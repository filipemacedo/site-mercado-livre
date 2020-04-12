const delay = (ms: number, value?: any) => new Promise((resolve) => setTimeout(() => resolve(value), ms));

export default delay;
