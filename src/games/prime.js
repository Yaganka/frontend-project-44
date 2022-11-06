import startGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRandom = () => Math.floor(Math.random() * 100);

function isPrime() {
    const randomNum = getRandom();
    for (let i = 2, max = Math.sqrt(randomNum); i <= max; i += 1) {
        if (randomNum % i === 0) {
            return 'no';
        }
    }
    return 'yes';
}

const brainPrime = () => {
    const question = getRandom();
    const correctAnswer = isPrime();
    return [question, correctAnswer];
};

export default () => startGame(brainPrime, rules);
