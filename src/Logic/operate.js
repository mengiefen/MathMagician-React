import Calc from './calculator';

const Calculate = new Calc();

class Operate {
  constructor() {
    this.result = null;
    this.isOperator = null;
  }

  compute(operator, arg1, arg2) {
    switch (operator) {
      case '+':
        this.result = Calculate.add(arg1, arg2);
        break;
      case '-':
        this.result = Calculate.subtract(arg1, arg2);
        break;

      case 'x':
        this.result = Calculate.multiply(arg1, arg2);
        break;
      case '/':
        this.result = Calculate.divide(arg1, arg2);
        break;
      case '%':
        this.result = Calculate.modulus(arg1, arg2);
        break;
      case '+/-':
        this.result = Calculate.plusOrMinus(arg1, arg2);
        break;
      default:
        return false;
    }
    return this.result;
  }

  checkForOperator(value) {
    switch (value) {
      case '+':
        this.isOperator = true;
        break;
      case '-':
        this.isOperator = true;
        break;

      case 'x':
        this.isOperator = true;
        break;
      case '/':
        this.isOperator = true;
        break;
      case '%':
        this.isOperator = true;
        break;
      case '+/-':
        this.isOperator = true;
        break;
      default:
        return false;
    }
    return this.isOperator;
  }

  checkForNumber = (value) => {
    const val = Number(value);
    if (Number.isNaN(val) && value !== '.') {
      return false;
    }
    return true;
  }

  checkForDots(number, currentValue) {
    this.valid = true;
    if (number.includes('.') && currentValue === '.') this.valid = false;
    return this.valid;
  }
}

export default Operate;
