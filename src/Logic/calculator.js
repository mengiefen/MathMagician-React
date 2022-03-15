class Calc {
  constructor() {
    this.result = null;
  }

  add(arg1, arg2) {
    this.result = arg1 + arg2;
    return this.result;
  }

  plusOrMinus(arg1, arg2) {
    this.result = [arg1 + arg2, arg1 - arg2];
    return this.result;
  }

  subtract(arg1, arg2) {
    this.result = arg1 - arg2;
    return this.result;
  }

  multiply(arg1, arg2) {
    this.result = arg1 * arg2;
    return this.result;
  }

  divide(arg1, arg2) {
    this.result = arg1 / arg2;
    return this.result;
  }

  modulus(arg1, arg2) {
    this.result = arg1 % arg2;
    return this.result;
  }
}

export default Calc;
