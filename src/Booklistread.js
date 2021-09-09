import React from 'react'
import Bookitem from './Bookitem'
const Booklistread=({read})=>
{
    const renderedlist=read.map(book=>{
        return <Bookitem book={book}/>;
    })
    
    return <div className="center">{renderedlist}</div>
}
export default Booklistread;