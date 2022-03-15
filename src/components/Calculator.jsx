import React, { PureComponent } from 'react';
import Container from './Container/Container';
import Input from './Input/Input';
import Buttons from './Button/Buttons';
import Operate from '../Logic/operate';

const operate = new Operate();

const btnItems = [
  'AC', '+/-', '%', '/',
  '7', '8', '9', 'x',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
];

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.firstArgument = '';
    this.secondArgument = '';
    this.operator = '';
    this.state = {
      displayValue: '',
    };
    this.display = this.display.bind(this);
  }

  display(value) {
    const { displayValue } = this.state;
    if (!this.firstArgument && operate.checkForOperator(value)) return;
    if (displayValue
        && !this.firstArgument
        && !this.secondArgument
        && !this.operator
        && operate.checkForNumber(value)) {
      this.clearDisplay();
    }

    if (this.firstArgument && operate.checkForOperator(value)) {
      this.clearDisplay();
      this.operator = value;
      this.setState({
        displayValue: value,
      });
    }
    if (
      !this.operator
      && !operate.checkForOperator(value)
      && operate.checkForNumber(value)
      && operate.checkForDots(this.firstArgument, value)
    ) {
      this.firstArgument += value;
      this.setState((state) => ({
        displayValue: state.displayValue + value,
      }));
    }
    if (
      this.firstArgument
      && this.operator
      && operate.checkForNumber(value)
      && operate.checkForDots(this.secondArgument, value)
    ) {
      this.secondArgument += value;
      this.setState(() => ({
        displayValue: this.secondArgument,
      }));
    }

    if (value === 'AC') {
      this.clearDisplay();
      this.clearAguments();
    }

    if ((this.firstArgument && this.operator && this.secondArgument)
      && (value === '=')) {
      this.clearDisplay();
      const result = operate.compute(
        this.operator,
        Number(this.firstArgument),
        Number(this.secondArgument),
      );
      this.clearAguments();

      this.setState({
        displayValue: String(result),
      });
    }
  }

  clearDisplay() {
    this.setState({
      displayValue: '',
    });
  }

  clearAguments() {
    this.firstArgument = '';
    this.secondArgument = '';
    this.operator = '';
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className="container">
        <Input
          value={displayValue}
          className="calc-display"
          firstArgument={this.firstArgument}
          secondArgument={this.secondArgument}
          operator={this.operator}
        />
        <Container>
          <>
            {btnItems.flat().map((btn) => (
              <Buttons
                className={btn === '0' ? 'btn long' : 'btn'}
                key={btn}
                value={btn}
                onClick={this.display}
              />
            ))}
          </>
        </Container>
      </div>
    );
  }
}

export default Calculator;
