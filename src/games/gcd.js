import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getRandom = () => Math.floor(Math.random() * 100);
const gcd = (num1, num2) => {
    let result;
    if (num2 === 0) {
    return result = num1
    }
    return result = gcd(num2, num1 % num2)
    };

function brainGcd() {
    let randomNumber1 = getRandom();
    let randomNumber2 = getRandom();
    let num1 = Math.abs(randomNumber1);
    let num2 = Math.abs(randomNumber2);
    let resultGcd = gcd(num1, num2);
    const correctAnswer = resultGcd;
    const question = `${num1}, ${num2}`;
    return [question, String(correctAnswer)];
}
    
    export default () => startGame(brainGcd, rules);