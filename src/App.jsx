import React from 'react';
import useTaskName from './hooks/use-task-name.jsx';
import ToDoItems from './component/ToDoItems.jsx';
import InputField from './component/InputField.jsx';
import Header from './component/Header.jsx';
import { styles } from './todo.styles.js';

function App() {
  const {todos, setTodos, task, setTask} = useTaskName()

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div style={styles.tasksContainer}>
        <InputField todos={todos} setTodos={setTodos} task={task} setTask={setTask} />
        <ToDoItems todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default App;
