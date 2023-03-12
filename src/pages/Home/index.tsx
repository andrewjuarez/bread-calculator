import React, { useState, useRef } from 'react';
import './HomePage.css';
import NavBar from '../../common/NavBar';

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);
  const nameRef = useRef<HTMLInputElement>(null);

  function handleNameClick (e: React.FormEvent): void {
    e.preventDefault();
    const name: string | null = nameRef?.current?.value ?? null;

    if (name) { alert(`Hello ${name}`); } else { alert('I don\'t even know who you are..'); }
  };

  return (
    <div className='App'>
      <NavBar />
      <h1>Vite + React + TypeScript with ESlint template</h1>
      <div className='card'>
        <button onClick={() => { setCount((count) => count + 1); }}>
          count is {count}
        </button>
        <p>
          Edit this page and save to test HMR
        </p>
      </div>
      <div id='nameInputBox'>
        <form onSubmit={handleNameClick}>
          <input ref={nameRef} type='text' placeholder='My name is...' />
          <input type='submit' value='Greet' />
        </form>
      </div>
    </div>
  );
};

export default HomePage;
