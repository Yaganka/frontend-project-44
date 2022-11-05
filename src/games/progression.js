import startGame from '../index.js';

const rules = 'What number is missing in the progression?';
const getRandom = () => Math.floor(Math.random() * 10);

const createProgression = (firstNum, step) => {
  const progressionLength = 10;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + (step * i));
  }
  return progression;
};

const generateProgression = () => {
  const step = getRandom();
  const firstNum = getRandom();
  const progression = createProgression(firstNum, step);
  const hiddenIndex = getRandom(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => startGame(generateProgression, rules);
