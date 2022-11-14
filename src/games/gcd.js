import createGame from '../index.js';
import getRandomNumber from '../getRandom.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

function calculateGcd() {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const correctAnswer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  return [question, String(correctAnswer)];
}

export default () => createGame(calculateGcd, rule);
