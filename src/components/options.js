import upicon from '../icons/arrow_up.svg';
import downicon from '../icons/arrow_down.svg';
import deleteicon from '../icons/delete.svg';
import { useEffect, useRef } from 'react';
function Options({id,movedown,moveup,deletetodo}) {
    const cardRef=useRef(null);
    useEffect(()=>{
        cardRef.current.style.transform="scaleY(1)";
    })
    return (
        <div ref={cardRef} className="options-wrap">
            <div className="options">
            <img src={upicon}alt="upicon" onClick={()=>moveup(id)}></img>
            <img src={downicon}alt="downicon" onClick={()=>movedown(id)}></img>
            <img src={deleteicon}alt="deleteicon" onClick={()=>deletetodo(id)}></img>
        </div></div>
    )
}

export default Options;
