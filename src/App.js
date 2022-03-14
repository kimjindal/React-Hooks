import { useState } from 'react';
import Timer from './component/Timer';

function App() {
  const [timer, setTimer] = useState(false);

  const handleClick = () => {
    setTimer((prevTimer) => !prevTimer);
  };

  return (
    <div className="App">
      <h2>
        Timer is {timer ? 'Start' : 'Stop!'}
        {timer && <Timer />}
      </h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
