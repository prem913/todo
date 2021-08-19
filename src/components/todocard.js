import React,{useEffect, useRef, useState} from 'react';
import { gsap } from 'gsap';
import Options from './options';
import expandIcon from '../icons/expand.svg';
function Todocard({todo,time,moveup,movedown,deletetodo}) {
    const [collapsed,setCollapse]=useState(false);
    const cardRef=useRef(null);
    function deletetodos(id){
        deletetodo(id,cardRef);
    }
    function movesdown(id){
        movedown(id,cardRef);
    }
    function movesup(id){
        moveup(id,cardRef);
    }
    useEffect(()=>{
        gsap.to(cardRef.current, { x: "0",opacity:1,duration: 0.4,ease:true });
    },[cardRef])
    return (
        <div ref={cardRef} className="todocard" >
            <div className="card" >
            {todo}
            <div className="btn" style={collapsed?{}:{transform:"rotate(180deg)"}}>
            <img src={expandIcon} onClick={()=>{setCollapse(!collapsed)}} alt="expand"></img>
            </div>
            </div>
            <div className={collapsed?"options":"displaynone"}><Options movedown={movesdown} moveup={movesup} deletetodo={deletetodos} id={time} /></div>
        </div>
    )
}

export default Todocard;
