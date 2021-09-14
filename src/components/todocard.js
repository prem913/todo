import React,{useEffect, useRef, useState} from 'react';
import { gsap,Power1 } from 'gsap';
import Options from './options';
import expandIcon from '../icons/expand.svg';
import {moveUp,moveDown,deleteTodo} from '../features/todos/todosSlice';
import { useDispatch } from 'react-redux';
import { setAlert } from '../features/alert/alertSlice';
function Todocard({todo,time}) {
    const [collapsed,setCollapse]=useState(false);
    const dispatch=useDispatch();
    const cardRef=useRef(null);
    const handleclick=()=>{
        setCollapse(!collapsed);
        // if(collapsed){
        //     cardRef.current.style.height="auto";
        //     setCollapse(false);
        // }
        // else{
        //     gsap.to(cardRef.current,{
        //     height:"+=40px",
        //     duration:0.1,
        //     onComplete:()=>{     
        // setCollapse(true);
        //     }
        // })
        // }
    }
    let deletetodo=(id)=>{
        gsap.to(cardRef.current,{x: "+=70%" ,
        opacity:0,
        duration: 0.27,
        ease: Power1.easeOut,
        onComplete:()=>{
            dispatch(deleteTodo(id));
            dispatch(setAlert({
                key:id,
                msg:"Marked as done👍"}))
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
        gsap.to(cardRef.current,{x: "0" ,
        opacity:1,
        duration: 0.3,
        ease: Power1.easeOut
        })
    },[cardRef])
    return (
        <div ref={cardRef} className="todocard" style={collapsed?{backgroundColor:"#0001"}:{}} >
            <div className="card" >
            {todo}
            <div className="btn" style={collapsed?{}:{transform:"rotate(180deg)"}}>
            <img src={expandIcon} onClick={handleclick} alt="expand"></img>
            </div>
            </div>
            {collapsed?<Options movedown={movedown} moveup={moveup} deletetodo={deletetodo} id={time} />:""}
        </div>
    )
}

export default Todocard;
