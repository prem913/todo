import React,{useState} from 'react';
import Options from './options';
import expandIcon from '../icons/expand.svg';
function Todocard({todo,time,moveup,movedown,deletetodo}) {
    const [collapsed,setCollapse]=useState(false);
    return (
        <div className="todocard" onClick={()=>{setCollapse(!collapsed)}}>
            <div className="card" >
            {todo}
            <div className="btn" style={collapsed?{}:{transform:"rotate(180deg)"}}>
            <img src={expandIcon} alt="expand"></img>
            </div>
            </div>
            <div className={collapsed?"options":"displaynone"}><Options movedown={movedown} moveup={moveup} deletetodo={deletetodo} id={time} /></div>
        </div>
    )
}

export default Todocard;
