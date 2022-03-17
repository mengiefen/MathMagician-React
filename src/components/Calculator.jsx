import React, { useEffect, useState, useRef } from 'react';
import Container from './Container/Container';
import Display from './Display/Display';
import Buttons from './Button/Buttons';
import calculate from '../Logic/calculator';

const btnItems = ['AC', '+/-', '%', '÷',
  '7', '8', '9', 'x', '4', '5', '6', '-',
  '1', '2', '3', '+', '0', '.', '=',
];

function useKey(cb) {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  function handleKeyPress(event) {
    if (event.code) {
      callbackRef.current(event);
    }
  }
  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
}

const Calculator = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const display = (result, value) => {
    setNext(result.next);
    setTotal(result.total);
    setOperation(result.operation);

    if ((!total && !operation) || (total && operation)) {
      setDisplayValue(result.next);
    }

    if (
      ((!next && total) || (next && total))
      && (value === '=' || value === 'Enter')
    ) {
      setNext('');
      setOperation('');
      setDisplayValue(result.total);
    }
    if (value === 'AC' || value === 'q') {
      setDisplayValue(null);
      setNext(null);
      setOperation(null);
      setTotal(null);
    }

    if (value === '+/-') {
      setDisplayValue(String(-displayValue));
    }
  };

  const update = (value) => {
    const result = calculate({ total, next, operation }, value);
    display(result, value);
  };

  const handleCallback = (e) => {
    update(e.key);
  };
  useKey(handleCallback);

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
