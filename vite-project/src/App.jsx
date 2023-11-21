import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const serverUrl = 'http://localhost:8080'; // サーバー側のURL
  const handleBtnClick = async () => {
    await fetch(`${serverUrl}/api`, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <>
      <button onClick={handleBtnClick()}>view</button>
      <button>edit</button>
    </>
  );
}

export default App;
