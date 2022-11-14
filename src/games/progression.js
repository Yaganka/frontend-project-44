import createGame from '../index.js';
import getRandomNumber from '../getRandom.js';

const rule = 'What number is missing in the progression?';

const createProgression = (firstNum, step) => {
  const progressionLength = 10;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + (step * i));
  }
  return progression;
};

const generateProgression = () => {
  const step = getRandomNumber(2, 10);
  const firstNum = getRandomNumber(0, 20);
  const progression = createProgression(firstNum, step);
  const hiddenIndex = getRandomNumber(1, progression.length);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => createGame(generateProgression, rule);
