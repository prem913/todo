import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import alertstyles from './alert.module.css';
function Alert() {
    let msg= useSelector(state=>state.alert);
    let timeoutid = useRef(null);
    let alertRef = useRef(null);
    useEffect(()=>{
        if(msg!== "")
        alertRef.current.style.transform = 'translateX(0)';
        timeoutid.current= setTimeout(()=>{
            alertRef.current.style.transform = 'translateX(200%)';
        },1000)
        return ()=>{
            timeoutid.current && clearTimeout(timeoutid.current);
        }
    },[msg])
    return (
        <div ref={alertRef} className={alertstyles.wrapper}>
            {msg.msg}
        </div>
    )
}

export default Alert;
