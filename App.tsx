import * as React from 'react';
import './style.css';

export default function App() {
  let [toDoList, setToDoList] = React.useState([]);
  let [task, setTask] = React.useState('');
  let addToDoList = () => {
    setToDoList([...toDoList, { taskName: task, taskStatus: 'todo' }]);
    setTask('');
  };
  let removeTask = (taskSelected) => {
    let reAssignData = toDoList;
    toDoList.forEach((task) => {
      if (task.taskName == taskSelected) {
        task.taskStatus = 'completed';
      }
    });
    /* let filteredData = toDoList.filter((task) => task.taskName == taskSelected); */
    setToDoList([...reAssignData]);
  };
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={($event) => setTask($event.target.value)}
        placeholder="Enter a task name"
      />{' '}
      &nbsp;
      <button
        onClick={() => {
          addToDoList();
        }}
      >
        ADD
      </button>
      {toDoList.map((task) => {
        return (
          <div className="">
            {task.taskStatus == 'todo' ? (
              <div className="taskCard green">
                <p>
                  {task.taskName} &nbsp;
                  <button
                    className="closeBtn"
                    onClick={() => {
                      removeTask(task.taskName);
                    }}
                  >
                    X
                  </button>
                </p>
              </div>
            ) : (
              <div className="taskCard red">
                <p>
                  {task.taskName}
                  <button
                    className="closeBtn"
                    onClick={() => {
                      removeTask(task.taskName);
                    }}
                  >
                    X
                  </button>
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
