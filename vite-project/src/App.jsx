import { useState, useRef } from 'react';
import Table from './components/Table';
import './App.css';
import InputModal from './components/InputModal';
import GanttChart from './components/Gantt';

const currentDate = new Date();
let taskCollection = [
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
    name: 'ryozo',
    id: 'aaa',
    type: 'task',
    progress: 0,
  },
];

function App() {
  const [table, setTable] = useState([]);
  const [currentView, setCurrentView] = useState('');
  const [tasks, setTasks] = useState(taskCollection);

  const serverUrl = 'http://localhost:8080'; // サーバー側のURL
  const handleViewBtnClick = async () => {
    setCurrentView('tableView');
    await fetch(`${serverUrl}/api`, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setTable(res));
  };

  const handleEditBtnClick = () => {
    setCurrentView('editView');
  };

  const handleAddBtnClick = async () => {
    const task = {
      start: new Date(startRef.current.value),
      end: new Date(endRef.current.value),
      name: nameRef.current.value,
      id: codeRef.current.value,
      type: 'task',
      progress: 0,
    };
    let newTasks = tasks.slice();
    newTasks.push(task);
    await setTasks(newTasks);
  };
  const startRef = useRef();
  const endRef = useRef();
  const codeRef = useRef();
  const nameRef = useRef();
  const ganttRef = useRef();
  const handleConfirmeBtnClick = () => {
    console.log(ganttRef);
  };
  const handleSaveBtnClick = async () => {
    const changeKeyName = await (() => {
      const array = tasks.map((elem) => {
        return { code: elem.id, name: elem.name, start: elem.start, end: elem.end };
      });
      return array;
    })();

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(changeKeyName),
    };
    console.log(requestOptions.body);
    await fetch(`${serverUrl}/api`, requestOptions);
  };
  return (
    <>
      <button onClick={handleViewBtnClick}>view</button>
      <button onClick={handleEditBtnClick}>edit</button>
      <button onClick={handleAddBtnClick}>add</button>
      <button onClick={handleSaveBtnClick}>save</button>
      <button onClick={handleConfirmeBtnClick}>confirme</button>

      {currentView === 'tableView' ? <Table rows={table} /> : []}
      {currentView === 'editView' ? (
        <>
          <InputModal startRef={startRef} endRef={endRef} codeRef={codeRef} nameRef={nameRef} />
          <GanttChart tasks={tasks} />
        </>
      ) : (
        []
      )}
    </>
  );
}

export default App;
