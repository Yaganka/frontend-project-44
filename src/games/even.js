import createGame from '../index.js';
import getRandomNumber from '../getRandom.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const startBrainGame = () => {
  const question = getRandomNumber(0, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => createGame(startBrainGame, rule);
