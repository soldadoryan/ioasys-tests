import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type FormAttributesType = { taskTitle: string }

const schema = yup.object({
  taskTitle: yup.string().required('O campo não pode estar vazio!')
});

function App() {
  const [taskList, setTaskList] = useState<string[]>([])
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormAttributesType>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (e: { taskTitle: string }) => {
    setTaskList(oldList => [...oldList, e.taskTitle]);
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nova tarefa" {...register('taskTitle')} /><br />
        {errors.taskTitle && <strong data-testid="msgError">{errors.taskTitle?.message}</strong>}
        <button data-testid="btnSubmit" type="submit">Adicionar</button>
      </form>
      <ul data-testid="list">
        {taskList.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}

export default App;
