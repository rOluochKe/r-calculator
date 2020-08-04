/* eslint-disable no-undef */
import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const [one, two] = [Big(numberOne), Big(numberTwo)];

  switch (operation) {
    case '+':
      return one.plus(two);
    case '-':
      return one.minus(two);
    case 'x':
      return one.times(two);
    case '/':
      if (operandTwo === 0) {
        return 'infinity';
      }
      return one.div(two);
    default:
      return '0';
  }
};

export default operate;
