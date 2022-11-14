import createGame from '../index.js';
import getRandomNumber from '../getRandom.js';

const rule = 'What is the result of the expression?';

const operationSigns = ['+', '-', '*'];
const selectOperation = (randomNumber1, randomNumber2, operation) => {
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

const calculateExpression = () => {
  const randomNumber1 = getRandomNumber(1, 50);
  const randomNumber2 = getRandomNumber(1, 50);
  const randomOperationSign = operationSigns[getRandomNumber(0, operationSigns.length)];
  const correctAnswer = selectOperation(randomNumber1, randomNumber2, randomOperationSign);
  const question = `${randomNumber1} ${randomOperationSign} ${randomNumber2}`;
  return [question, String(correctAnswer)];
};

export default () => createGame(calculateExpression, rule);
