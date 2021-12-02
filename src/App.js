
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
//import TodoList from './components/TodoList/Todo/TodoList';
function App() {
  return (
    <div className="App">
      <h1 className="header">
        RTK Todo list
      </h1>
      <AddTodo />
    </div>
  );
}

export default App;
