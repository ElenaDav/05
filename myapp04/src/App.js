import React, { useState } from 'react';
import './App.css';

// упражнения после прочтения методички

function App() {
  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    setValue({
      name: 'Vasya',
      text: 'text',
    });
  };

  const clickBtn = () => {};

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={clickBtn}>Send message</button>

      {/* {value.map((message) => {
        return (
          <div key={message.id}>
            <p></p>
            <p></p>
          </div>
        )
      }) */}
    </div>
  );
}

export default App;
