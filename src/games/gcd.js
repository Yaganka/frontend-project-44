import startGame from '../index.js';
import getRandom from '../getRandom.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

function brainGcd() {
  const randomNumber1 = getRandom();
  const randomNumber2 = getRandom();
  const num1 = Math.abs(randomNumber1);
  const num2 = Math.abs(randomNumber2);
  const resultGcd = gcd(num1, num2);
  const correctAnswer = resultGcd;
  const question = `${num1} ${num2}`;
  return [question, String(correctAnswer)];
}

export default () => startGame(brainGcd, rules);
