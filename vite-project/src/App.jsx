import { useState } from 'react';
import Table from './components/Table';
import './App.css';

function App() {
  const [table, setTable] = useState('');
  const [currentview, setCurrentView] = useState();
  const serverUrl = 'http://localhost:8080'; // サーバー側のURL
  const handleBtnClick = async () => {
    await fetch(`${serverUrl}/api`, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setTable(res));
  };

  return (
    <>
      <button onClick={handleBtnClick}>view</button>
      <button>edit</button>
      <Table rows={table} />
    </>
  );
}

export default App;
