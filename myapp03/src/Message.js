import React, { useEffect, useRef, useState } from 'react';

function Message({ name }) {
  // пример №1 useState, useEffect, useRef
  /*
  const [state, setState] = useState(0); //Initial state
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    console.log('render');
  }, [state, counter]);

  const increase = () => {
    setState(state + 1);
    ref.current.focus();
  };

  return (
    <div class="message">
      <h4>Hello {state}</h4>
      <input ref={ref}></input>
      <div class="btn">
        <button onClick={increase}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        {counter}
        <button onClick={() => (setState(0), setCounter(0))}>reset</button>
      </div>
    </div>
  );
  */

  // пример №2 render списка

  const [state, setState] = useState([
    {
      name: '1',
      discription: '145',
    },
    {
      name: '2',
      discription: '149',
    },
    {
      name: '3',
      discription: '153',
    },
  ]);
  const [value, setValue] = useState(''); //изначально пустая строка
  const ref = useRef(null);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const good = () => {
    ref.current.style.color = 'red';
  };

  return (
    <div>
      <input ref={ref} onChange={handleChange} value={value} />
      <button onClick={good}>good</button>
      {state.map((item) => {
        return (
          //если у нас внутри 2 или более элемента, мы не указываем <div></div>,
          // а просто указываем <> </>, тогда не будет ошибки
          <>
            <h1>{item.name}</h1>
            <p>{item.discription}</p>
          </>
        );
      })}
    </div>
  );

  /*более короткий вывод без внутреннего return
    return (
        <div>
          {state.map((item) => <h1>{item.name}</h1>)}
        </div>
      );
  */
}

export default Message;
