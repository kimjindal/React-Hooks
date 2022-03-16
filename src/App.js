import { useEffect, useMemo, useState } from 'react';

function hardCalculate(number) {
  console.log('Hard calculating...');
  for (let i = 0; i < 199999999; i++) {}
  return number + 10000;
}

function easyCalculate(number) {
  console.log('Easy calculating...');
  return number + 1;
}

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardOnChange = (e) => setHardNumber(parseInt(e.target.value));
  const easyOnChange = (e) => setEasyNumber(parseInt(e.target.value));

  /* const hardSum = hardCalculate(hardNumber); */

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  /* Dependency Array Value Type, Primitive or Object */

  const [isMale, setIsMale] = useState(true);

  /* const answer = isMale ? 'Male' : 'Female'; */
  /* const answer = {
    jender: isMale ? 'Male' : 'Female',
  }; */

  const answer = useMemo(() => {
    return {
      jender: isMale ? 'Male' : 'Female',
    };
  }, [isMale]);

  useEffect(() => {
    console.log('Called useEffect');
  }, [answer]);

  return (
    <div className="App">
      <div className="calculate">
        <h3>Hard Calculation</h3>
        <input type="number" value={hardNumber} onChange={hardOnChange} />
        <span> + 10000 = {hardSum}</span>
      </div>
      <div className="calculate">
        <h3>Easy Calculation</h3>
        <input type="number" value={easyNumber} onChange={easyOnChange} />
        <span> + 1 = {easySum}</span>
      </div>
      <div className="calculate">
        <h3>What is your gender?</h3>
        <p>I am a {answer.jender}</p>
        <button onClick={() => setIsMale(!isMale)}>click</button>
      </div>
    </div>
  );
}

export default App;
