//IMPORT REACT AND THE "useState" HOOK
import React, { useState } from 'react';
//IMPORT A FUNCTION COMPONENT
import TodoForm from './TodoForm';
//INPORT A FUNCTION COMPONENT
import Todo from './Todo';
//CREATE A FUNCTION COMPONENT
function TodoList() {
  const [todos, setTodos] = useState([]);
  //CREATE AN ARROW FUNCTION TO ADD A NEW TASK
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  //CREATE AN ARROW FUNCTION TO UPDATE A TASK
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };
  //CREATE AN ARROW FUNCTION TO REMOVE A TASK
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };
  ////CREATE AN ARROW FUNCTION TO MARK A TASK AS COMPLETED
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  //RETURN HTML
  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}
//EXPORT A FUNCTION COMPONENT
export default TodoList;