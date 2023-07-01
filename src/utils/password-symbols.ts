export const Alphabet: string = 'ABCDEGHIJKLMOPQRSTVWXYZ';
export const Numbers: string = '1234567890';
export const Symbols: string = '@!#$%&!-_?¿¡';


export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const getLetterUpperCase = () => {
  const number = getRandomNumber(Alphabet.length)
  return Alphabet[number];
}

export const getLetterLowerCase = () => {
  const number = getRandomNumber(Alphabet.length)
  return Alphabet[number].toLowerCase();
}

export const getSymbols = () => {
  const number = getRandomNumber(Symbols.length)
  return Symbols[number];
}

export const getNumbers = () => {
  const number = getRandomNumber(Numbers.length)
  return Numbers[number];
}