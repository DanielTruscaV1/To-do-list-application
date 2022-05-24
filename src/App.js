//IMPORT CSS
import './App.css';
//IMPORT A FUNCTION COMPONENT
import TodoList from './components/TodoList';
//CREATE A FUNCTION COMPONENT
function App() {
  return (
    <div className="todo-app">
      <TodoList/>
    </div>
  );
}
//EXPORT A FUNCTION COMPONENT
export default App;
