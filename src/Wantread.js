import React,{useState} from 'react'
import './Header'
import Booklistwant from './Booklistwant'
import { render } from '@testing-library/react';
const Wantread =({Select2})=>{
    let [want,setwant]=useState([]);
    if(Select2==="Want to read")
    {
        render()
        {
    return(

    <div>
        <label className="wantread" htmlFor="name">
            Want to read
            return  <Booklistwant want={want}/>
        </label>
        

    </div>
)
    }
}
}
export default Wantread;