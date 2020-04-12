const pascalCase = (phrase: string) => {
 const words = phrase.split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`);

 return words.join(" ");
};

export default pascalCase;