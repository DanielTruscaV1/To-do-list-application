//IMPORT REACT AND THE "useState" HOOK
import React, { useState } from 'react';
//IMPORT A FUNCTION COMPONENT
import TodoForm from './TodoForm';
//IMPORT REACT ICONS
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
//CREATE A FUNCTION COMPONENT
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    time: "00.00.0000"
  });
  //CREATE AN ARROW FUNCTION OF TYPE HANDLER TO HANDLE THE SUBMIT EVENT
  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
      time: "00.00.0000"
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  //RETURN HTML
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div>
        {todo.time}
      </div>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};
//EXPORT A FUNCTION COMPONENT
export default Todo;