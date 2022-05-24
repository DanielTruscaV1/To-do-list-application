//IMPORT REACT AND THE "useState", "useEffect", "useRef" HOOKS
import React, { useState, useEffect, useRef } from 'react';
//CREATE A FUNCTION COMPONENT
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  //CREATE AN ARROW FUNCTION OF TYPE HANDLER TO HANDLE THE CHANGE EVENT
  const handleChange = e => {
    setInput(e.target.value);
  };
  //CREATE AN ARROW FUNCTION OF TYPE HANDLER TO HANDLE THE SUBMIT EVENT
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };
  //RETURN HTML
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your tasks'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a new task'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add
          </button>
        </>
      )}
    </form>
  );
}
//EXPORT A FUNCTION COMPONENT
export default TodoForm;