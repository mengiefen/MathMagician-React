import React, { useState } from 'react';
import Container from './Container/Container';
import Display from './Display/Display';
import Buttons from './Button/Buttons';
import calculate from '../Logic/calculator';

const btnItems = [
  'AC', '+/-', '%', '÷',
  '7', '8', '9', 'x',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
];

const Calculator = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const display = (result, value) => {
    setNext(result.next);
    setTotal(result.total);
    setOperation(result.operation);

    if ((!total && !operation)
    || (total && operation)) {
      setDisplayValue(result.next);
    }

    if (((!next && total)
    || (next && total))
    && value === '=') {
      setDisplayValue(result.total);
    }
    if (value === 'AC') {
      setDisplayValue(null);
    }

    if (value === '+/-') {
      setDisplayValue(String(-(displayValue)));
    }
  };

  const update = (value) => {
    const result = calculate(
      { total, next, operation },
      value,
    );
    display(result, value);
  };

  return (
    <div className="container">
      <Display
        value={displayValue}
        className="calc-display"
        total={total}
        next={next}
        operation={operation}
      />
      <Container>
        <>
          {btnItems.flat().map((btn) => (
            <Buttons
              className={btn === '0' ? 'btn long' : 'btn'}
              key={btn}
              value={btn}
              onClick={(val) => update(val)}
            />
          ))}
        </>
      </Container>
    </div>
  );
};

export default Calculator;
