import React,{useState} from 'react';
import addIcon from '../icons/add.svg';
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todos/todosSlice';
import { setAlert } from '../features/alert/alertSlice';
function Addtodo() {
  const dispatch= useDispatch();
    const [input,setInput]=useState("");
    function handlesubmit(e){
        e.preventDefault();
        if(input==="") return;
        dispatch(addTodo(input))
        dispatch(setAlert({
            key:input,
            msg:"Task Added"}))
        setInput("");
    }
    return (
        <div className="addtodo">
            <form onSubmit={handlesubmit} >
            <div className="input">
            <input type="text" placeholder="Ex:- Go to market" value={input} onInput={(e)=>{setInput(e.target.value)}} />
            <button className="btn"><img src={addIcon} alt="add" ></img></button>
            </div>
            </form>
        </div>
    )
}

export default Addtodo;
