import React from 'react';
import {gsap,Power1} from 'gsap';
import Nothing from './nothing';
import Todocard from './todocard';
function getIndex(arr,key){
    let l=arr.length;
    for(let i=0;i<l;i++){
        if(arr[i].time===key) return i;
    }
}
function Todos({todo,setTodos}) {
    function move(idx,i){
        let temp=todo[idx];
        todo[idx]=todo[idx+i];
        todo[idx+i]=temp;
        setTodos(todo);
    }
    function moveup(id,ref){
        if(todo[0].time===id || todo.length===1) return;
        let idx=getIndex(todo,id);
        move(idx,-1);
        gsap.from(ref.current,{y: "+=100%" ,
        duration: 0.3,
        ease: Power1.easeOut,
    })
    }
    function movedown(id,ref){
        if(todo[todo.length-1].time===id || todo.length===1) return;
        let idx=getIndex(todo,id);
        move(idx,1);
        gsap.from(ref.current,{y: "-=100%" ,
        duration: 0.3,
        ease: Power1.easeOut,
    })
    }
    function deletetodo(id,ref){
        gsap.to(ref.current,{x: "+=70%" ,
        opacity:0,
        duration: 0.5,
        ease: Power1.easeOut,
        onComplete:()=>{
            let newtodos=[];
            let l=todo.length;
            for(let i=0;i<l;i++){
                if(todo[i].time!==id) 
                newtodos.push(todo[i]);
            }
            setTodos(newtodos);
        }
        })
    }
        return (
        <div className="todos" >
            {todo && todo.length!==0? todo.map(e=>
            <Todocard key={e.time} time={e.time} moveup={moveup} movedown={movedown} deletetodo={deletetodo} todo={e.todo}/>
            ):<Nothing />
        }
        </div>
    )
}

export default Todos;
