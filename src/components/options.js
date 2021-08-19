import upicon from '../icons/arrow_up.svg';
import downicon from '../icons/arrow_down.svg';
import deleteicon from '../icons/delete.svg';
function Options({id,movedown,moveup,deletetodo}) {
    return (
        <div className="options">
            <img src={upicon}alt="upicon" onClick={()=>moveup(id)}></img>
            <img src={downicon}alt="downicon" onClick={()=>movedown(id)}></img>
            <img src={deleteicon}alt="deleteicon" onClick={()=>deletetodo(id)}></img>
        </div>
    )
}

export default Options;
