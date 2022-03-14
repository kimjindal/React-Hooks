import { useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseCountState = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log('Rendering...');

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`countRef: ${countRef.current}`);
  };

  return (
    <div className="App">
      <div className="cnt state">
        <h2>State: {count}</h2>
        <button onClick={increaseCountState}>Up</button>
      </div>
      <div className="cnt">
        <h2>Ref: {countRef.current}</h2>
        <button onClick={increaseCountRef}>Up</button>
      </div>
    </div>
  );
}

export default App;
