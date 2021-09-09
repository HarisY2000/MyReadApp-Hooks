import React,{useState} from 'react'
import './Header.css'
import Currentlyread from './Currentlyread'
import Todos from './Todos'
import Wantread from './Wantread'
const Select=()=>
{
   
    let [selected,setSelected]=useState("");
    return (
        <div>
        <select onChange={(e)=>{
            selected=e.target.value;
            setSelected(selected);
        }
            }
            >
            <option value="Currently Read">Currently Read</option>
            <option value="Read">Read</option>
            <option value="Want to read">Want to read</option>
        </select>
            {selected}
            <Currentlyread Select1={selected}/>
            <Todos Select2={selected}/>
            <Wantread Select3={selected}/>
            </div>
            
    )
}
export default Select;