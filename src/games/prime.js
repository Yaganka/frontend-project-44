import createGame from '../index.js';
import getRandomNumber from '../getRandom.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(randomNum) {
  for (let i = 2, max = Math.sqrt(randomNum); i <= max; i += 1) {
    if (randomNum % i === 0) {
      return false;
    }
  }
  return randomNum > 1;
}

const determinePrimeNum = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => createGame(determinePrimeNum, rule);
