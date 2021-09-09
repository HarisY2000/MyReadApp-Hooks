import React,{useState} from 'react'
import './Header'
import Booklistread from './Booklistread'
import { render } from '@testing-library/react';
const Todos =({Select3})=>{
    let [read,setRead]=useState([]);
    if(Select3=="Read")
    {
        render()
        {
return(

    <div>
        <label className="currentread" htmlFor="name">
            Read
            return <Booklistread read={read}/>
        </label>
    </div>
)
        }
    }
}
export default Todos;