import React,{useState} from 'react'
import './Header'
import Booklistcurrent from './Booklistcurrent'
import { render } from '@testing-library/react';
const Currentlyread =({Select1})=>{
    let [current,setCurrent]=useState([]);
    if(Select1==="Currently read")
    {
      render()
      {
    return(
    <div>
        <label className="read" htmlFor="name">
         Currently read
         return  <Booklistcurrent current={current}/>
        </label>
        
    </div>
)
    }
}
}
export default Currentlyread;