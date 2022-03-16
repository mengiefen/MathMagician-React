class Check {
  constructor() {
    this.isOperator = null;
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
      case '÷':
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
  };

  checkForDots(number, currentValue) {
    this.valid = true;
    if (number.includes('.') && currentValue === '.') this.valid = false;
    return this.valid;
  }
}

export default Check;
