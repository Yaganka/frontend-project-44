import startGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRandom = () => Math.floor(Math.random() * 100);

function isPrime(randomNum) {
    for (let i = 2, max = Math.sqrt(randomNum); i <= max; i += 1) {
        if (randomNum % i === 0) {
            return false;
        }
    }
    return true;
}

const brainPrime = () => {
    const randomNum = getRandom();
    const question = randomNum;
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
};

export default () => startGame(brainPrime, rules);
