import React, { useState } from 'react';

function App() {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskList, setTaskList] = useState<string[]>([])

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTaskList(oldList => [...oldList, taskTitle]);
    setTaskTitle('');
  }

  return (
    <>
      <form onSubmit={handleAddTask}>
        <input value={taskTitle} onChange={e => setTaskTitle(e.target.value)} placeholder="Nova tarefa" />
        <button data-testid="btnSubmit" type="submit">Adicionar</button>
      </form>
      <ul data-testid="list">
        {taskList.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}

export default App;
