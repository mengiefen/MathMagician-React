import React, { PureComponent } from 'react';
import Container from './Container/Container';
import Input from './Input/Input';
import Buttons from './Button/Buttons';

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
    this.state = {
      displayValue: '',
    };
    this.triggerClick = this.triggerClick.bind(this);
  }

  triggerClick(value) {
    this.setState((state) => ({
      displayValue: state.displayValue + value,
    }));
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className="container">
        <Input value={displayValue} className="calc-display" />
        <Container>
          <>
            {btnItems.flat().map((btn) => (
              <Buttons
                className={btn === '0' ? 'btn long' : 'btn'}
                key={btn}
                value={btn}
                onClick={this.triggerClick}
              />
            ))}
          </>
        </Container>
      </div>
    );
  }
}

export default Calculator;
