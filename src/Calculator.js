import './calc.css'
import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const click = (value) => {
    if (value === '=') {
      try {
        const result = eval(display);
        setResult(result);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <>
    <div className='name'>😊Calculater😊</div>
    <div className="calculator">
      <div className="display">
        <div className="expression">{display}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => click('7')}>7</button>
        <button onClick={() => click('8')}>8</button>
        <button onClick={() => click('9')}>9</button>
        <button onClick={() => click('+')}>+</button>
        <button onClick={() => click('4')}>4</button>
        <button onClick={() => click('5')}>5</button>
        <button onClick={() => click('6')}>6</button>
        <button onClick={() => click('-')}>-</button>
        <button onClick={() => click('1')}>1</button>
        <button onClick={() => click('2')}>2</button>
        <button onClick={() => click('3')}>3</button>
        <button onClick={() => click('*')}>*</button>
        <button onClick={() => click('0')}>0</button>
        <button onClick={() => click('.')}>.</button>
        <button onClick={() => click('=')}>=</button>
        <button onClick={() => click('/')}>/</button>
        <button onClick={() => click('C')}>C</button>
      </div>
    </div>
    </>
  );
};

export default Calculator;
