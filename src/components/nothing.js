import React from 'react'
import nothingicon from '../icons/nothingtodo.png';
function Nothing() {
    return (
        <>
            <h2 style={{display:"block",textAlign:"center"}}>Nothing ToDo</h2>
        <div className="nothing">
            <img src={nothingicon} alt="nothing" ></img>
        </div>
        </>
    )
}

export default Nothing
