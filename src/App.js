import { useState } from 'react';

function heavyWork() {
  console.log('Heavy Work');
  return ['Kim', 'Lee'];
}

function App() {
  const [names, setNames] = useState(() => heavyWork()); // Important callback
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleClickAdd = () => {
    setNames((prevState) => [input, ...prevState]);
    setInput((prevState) => '');
  };

  const showNames = names.map((name, index) => <li key={index}>{name}</li>);

  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleClickAdd}>Add</button>
      </div>
      <ul>{showNames}</ul>
    </div>
  );
}

export default App;
