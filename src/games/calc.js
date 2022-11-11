import gameBeginning from '../index.js';
import getRandom from '../getRandom.js';

const rule = 'What is the result of the expression?';

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
  const randomNumber1 = getRandom(1, 50);
  const randomNumber2 = getRandom(1, 50);
  const randomOperationSign = operationSigns[getRandom(0, 3)];
  const correctAnswer = operations(randomNumber1, randomNumber2, randomOperationSign);
  const question = `${randomNumber1} ${randomOperationSign} ${randomNumber2}`;
  return [question, String(correctAnswer)];
};

export default () => gameBeginning(brainCalc, rule);
