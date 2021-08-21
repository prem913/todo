import React,{useEffect, useRef, useState} from 'react';
import { gsap,Power1 } from 'gsap';
import Options from './options';
import expandIcon from '../icons/expand.svg';
import {moveUp,moveDown,deleteTodo} from '../features/todos/todosSlice';
import { useDispatch } from 'react-redux';
function Todocard({todo,time}) {
    const [collapsed,setCollapse]=useState(false);
    const dispatch=useDispatch();
    const cardRef=useRef(null);
    let deletetodo=(id)=>{
        gsap.to(cardRef.current,{x: "+=70%" ,
        opacity:0,
        duration: 0.5,
        ease: Power1.easeOut,
        onComplete:()=>{
            dispatch(deleteTodo(id));
        }
        })
    }
    function moveup(id){
        dispatch(moveUp({id,next:()=>{
        gsap.from(cardRef.current,{y: "+=100%" ,
        duration: 0.3,
        ease: Power1.easeOut,
    })
        }}))
    }
    function movedown(id){
        dispatch(moveDown({id,next:()=>{
        gsap.from(cardRef.current,{y: "-=100%" ,
        duration: 0.3,
        ease: Power1.easeOut,
        })}})
    )
    }
    useEffect(()=>{
        cardRef.current.style.transform="translateX(0)";
        cardRef.current.style.opacity=1;
    },[cardRef])
    return (
        <div ref={cardRef} className="todocard" style={collapsed?{backgroundColor:"#0001"}:{}} >
            <div className="card" >
            {todo}
            <div className="btn" style={collapsed?{}:{transform:"rotate(180deg)"}}>
            <img src={expandIcon} onClick={()=>{setCollapse(!collapsed)}} alt="expand"></img>
            </div>
            </div>
            {collapsed?<Options movedown={movedown} moveup={moveup} deletetodo={deletetodo} id={time} />:""}
        </div>
    )
}

export default Todocard;
