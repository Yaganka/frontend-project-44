import gameBeginning from '../index.js';
import getRandom from '../getRandom.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

function brainGcd() {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const correctAnswer = gcd(num1, num2);
  const question = `${num1} ${num2}`;
  return [question, String(correctAnswer)];
}

export default () => gameBeginning(brainGcd, rule);
