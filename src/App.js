import { useEffect, useRef } from 'react';

function App() {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  });

  const handleClickLogin = () => {
    alert(`Hello, ${inputRef.current.value}`);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  console.log('Renderd...');

  return (
    <div className="App">
      <div className="form">
        <input ref={inputRef} type="text" placeholder="Enter name..." />
        <button onClick={handleClickLogin}>login</button>
      </div>
    </div>
  );
}

export default App;
