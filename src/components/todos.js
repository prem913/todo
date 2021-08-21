import React from 'react';
import Nothing from './nothing';
import Todocard from './todocard';
import { useSelector } from 'react-redux';
function Todos() {
    const todos=useSelector(state=>state.todos.value);

        return (
        <div className="todos" >
            {todos && todos.length!==0? todos.map(e=>
            <Todocard key={e.time} time={e.time} todo={e.todo}/>
            ):<Nothing />
        }
        </div>
    )
}

export default Todos;
