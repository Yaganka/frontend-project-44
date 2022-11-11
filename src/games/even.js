import gameBeginning from '../index.js';
import getRandom from '../getRandom.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const startSomeGame = () => {
  const question = getRandom(0, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameBeginning(startSomeGame, rule);
