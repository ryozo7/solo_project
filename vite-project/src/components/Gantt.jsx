import { Gantt } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
// const currentDate = new Date();
// export let taskCollection = [
//   {
//     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16),
//     end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
//     name: 'Idea',
//     id: 'Task 0',
//     type: 'task',
//   },
// ];
const dateChange = (task) => {
  // setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  console.log(task);
};
export default function GanttChart(props) {
  const { tasks } = props;
  return (
    <div>
      <Gantt tasks={tasks} onDateChange={dateChange} />
    </div>
  );
}
