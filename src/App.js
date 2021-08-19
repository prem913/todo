import './App.css';
import Header from './components/header';
import Addtodo from './components/addtodo';
import Todos from './components/todos';
import { useEffect, useState } from 'react';
function App() {
  const [todos,setTodos]=useState([]);
  function addtodo(todo){
    if(!todos){
      localStorage.setItem("todos",JSON.stringify([{todo,time:new Date()}]))
      setTodos(JSON.parse(localStorage.getItem("todos")));
      return;
    }
    localStorage.setItem("todos",JSON.stringify([{todo,time:new Date()},...todos]));
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }
  function handlechange(newtodos){
    localStorage.setItem("todos",JSON.stringify(newtodos));
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }
  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")))
  },[]);
  return (
    <div className="app">
      <Header />
      <Addtodo addtodo={addtodo}/>
      <h1>Todos</h1>
      <Todos todo={todos} setTodos={handlechange} />
    </div>
  );
}

export default App;
