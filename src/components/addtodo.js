import React,{useState} from 'react';
import addIcon from '../icons/add.svg';
function Addtodo({addtodo}) {
    const [input,setInput]=useState("");
    function handlesubmit(e){
        e.preventDefault();
        if(input==="") return;
        addtodo(input);
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
