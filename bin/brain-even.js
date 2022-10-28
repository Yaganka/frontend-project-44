import readlineSync from 'readline-sync';

// Определение функции запроса имени и приветствия
export const helloDialog = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Определение функции, дающее рандомное целое число
const getRandom = () => (
  Math.floor(Math.random() * 100)
);

// Определение функции игры на четность
export const trueOrFalse = () => {
  const name = helloDialog();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const random = getRandom();
    console.log('Question: ', random);
    const userAnswer = readlineSync.question('Your answer: ');
    const check1 = (random % 2 === 0) && (userAnswer === 'yes');
    const check2 = (random % 2 !== 0) && (userAnswer === 'no');

    if (check1 === true || check2 === true) {
      console.log('Correct!');
    } else {
      const rightAnswer = (random % 2 !== 0 ? 'no' : 'yes');
      const errorMessage = `"${userAnswer}" is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`;
      console.log(errorMessage);
      return errorMessage;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};
