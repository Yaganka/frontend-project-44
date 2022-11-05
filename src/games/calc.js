import startGame from '../index.js';

const rules = 'What is the result of the expression?';
const getRandom = () => Math.floor(Math.random() * 100);

const operationSigns = ['+', '-', '*'];
const operations = (randomNumber1, randomNumber2, operation) => {
  switch (operation) {
    case '+':
      return randomNumber1 + randomNumber2;
    case '-':
      return randomNumber1 - randomNumber2;
    case '*':
      return randomNumber1 * randomNumber2;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const brainCalc = () => {
  const randomNumber1 = getRandom();
  const randomNumber2 = getRandom();
  const randomOperationSign = operationSigns[Math.floor(Math.random() * 3)];
  const correctAnswer = operations(randomNumber1, randomNumber2, randomOperationSign);
  const question = `${randomNumber1} ${randomOperationSign} ${randomNumber2}`;
  return [question, String(correctAnswer)];
};

export default () => startGame(brainCalc, rules);
