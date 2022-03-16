import React, { PureComponent } from 'react';
import Container from './Container/Container';
import Display from './Display/Display';
import Buttons from './Button/Buttons';
// import Check from '../Logic/check';
import calculate from '../Logic/calculator';

// const check = new Check();

const btnItems = [
  'AC', '+/-', '%', '÷',
  '7', '8', '9', 'x',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
];

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.total = '';
    this.next = '';
    this.operation = '';
    this.state = {
      displayValue: '',
    };
    this.display = this.display.bind(this);
  }

  display(value) {
    const result = calculate(
      {
        total: this.total,
        next: this.next,
        operation: this.operation,
      },
      value,
    );
    this.total = result.total;
    this.next = result.next;
    this.operation = result.operation;

    if ((!this.total && !this.operation)
    || (this.total && this.operation)) {
      this.setState({
        displayValue: this.next,
      });
    }

    if (!this.next && this.operation) {
      this.setState({
        displayValue: this.operation,
      });
    }

    if (((!this.next && this.total)
    || (this.next && this.total))
    && value === '=') {
      this.setState({
        displayValue: this.total,
      });
    }
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className="container">
        <Display
          value={displayValue}
          className="calc-display"
          total={this.total}
          next={this.next}
          operation={this.operation}
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
