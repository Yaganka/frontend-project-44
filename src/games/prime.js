import gameBeginning from '../index.js';
import getRandom from '../getRandom.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(randomNum) {
  for (let i = 2, max = Math.sqrt(randomNum); i <= max; i += 1) {
    if (randomNum % i === 0) {
      return false;
    }
  }
  return randomNum > 1;
}

const brainPrime = () => {
  const randomNum = getRandom(0, 100);
  const question = randomNum;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameBeginning(brainPrime, rule);
