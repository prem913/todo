import './App.css';
import Header from './components/header';
import Addtodo from './components/addtodo';
import Todos from './components/todos';
import { useEffect } from 'react';
import {setTodos} from './features/todos/todosSlice';
import { useDispatch } from 'react-redux';
import Alert from './features/alert/Alert';
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    let p = JSON.parse(localStorage.getItem("todos"));
    if(p)
    dispatch(setTodos(p));
  },[dispatch]);

  return (
    <>
    <Alert />
    <div className="app">
      <Header />
      <Addtodo />
      <h1>Todos</h1>
      <Todos />
    </div>
    </>
  );
}

export default App;
