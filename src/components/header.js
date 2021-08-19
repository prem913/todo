import React, { useState } from 'react'

function Header() {
    const [pos,setPos]=useState(false);
    document.onscroll=()=>{
        if(!pos){
        if(document.documentElement.scrollTop>20){
            setPos(true);
        }
    }
    else{ 
        if(pos){ 
        if(document.documentElement.scrollTop===0)setPos(false);
        }
    }
}
    return (
        <div className="header" style={pos?{boxShadow: "0 3px 4px #0003"}:{}}>
            <h1>ToDo List</h1>
        </div>
    )
}

export default Header;
