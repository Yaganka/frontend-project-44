import gameBeginning from '../index.js';
import getRandom from '../getRandom.js';

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
  const step = getRandom(2, 10);
  const firstNum = getRandom(0, 20);
  const progression = createProgression(firstNum, step);
  const hiddenIndex = getRandom(1, 10);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => gameBeginning(generateProgression, rule);
