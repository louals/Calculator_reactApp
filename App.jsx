import { useReducer, useState } from 'react';
import logo from './logo.svg';
import './styles.css';



function App() {
  const [output, setOutput] = useState('');


  const displayName = (event) => {
    const value = event.target.value;

    const processedOutput = output.replace('÷', '/');
    if (value === 'AC') {
      setOutput('');
    } else if (value === 'DEL') {
      setOutput((prev) => prev.slice(0, -1)); 
    } else if (value === '=') {
      try {
        setOutput(eval(processedOutput).toString()); 
      } catch (error) {
        setOutput('Error'); 
      }
    } else {
      setOutput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator-grid">
      <input className="output" value={output} readOnly />
      <input value="AC" className="span-two" onClick={displayName}  />
      <input value="DEL" onClick={displayName} readOnly />
      <input value="÷" onClick={displayName} readOnly />
      <input value="1" onClick={displayName} readOnly />
      <input value="2" onClick={displayName} readOnly />
      <input value="3" onClick={displayName} readOnly />
      <input value="*" onClick={displayName} readOnly />
      <input value="4" onClick={displayName} readOnly />
      <input value="5" onClick={displayName} readOnly />
      <input value="6" onClick={displayName} readOnly />
      <input value="+" onClick={displayName} readOnly />
      <input value="7" onClick={displayName} readOnly />
      <input value="8" onClick={displayName} readOnly />
      <input value="9" onClick={displayName} readOnly />
      <input value="-" onClick={displayName} readOnly />
      <input value="." onClick={displayName} readOnly />
      <input value="0" onClick={displayName} readOnly />
      <input className="span-two" value="=" onClick={displayName} readOnly />
    </div>
  );
};

export default App;
