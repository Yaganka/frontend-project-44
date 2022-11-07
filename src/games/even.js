import startGame from '../index.js';
import getRandom from '../getRandom.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const gameVariant = () => {
  const question = getRandom();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startGame(gameVariant, rules);
