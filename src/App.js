import './App.css';
import Header from './components/header';
import Addtodo from './components/addtodo';
import Todos from './components/todos';
import { useEffect } from 'react';
import {setTodos} from './features/todos/todosSlice';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(setTodos(JSON.parse(localStorage.getItem("todos"))))
  },[dispatch]);

  return (
    <div className="app">
      <Header />
      <Addtodo />
      <h1>Todos</h1>
      <Todos />
    </div>
  );
}

export default App;
