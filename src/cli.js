import readlineSync from 'readline-sync';

const helloDialog = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const userName = helloDialog();

export { helloDialog, userName };
