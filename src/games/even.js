import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const getRandom = () => Math.floor(Math.random() * 100);

const gameVariant = () => {
  const question = getRandom();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startGame(gameVariant, rules);