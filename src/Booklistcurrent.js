import React from 'react'
import Bookitem from './Bookitem'
const Booklistcurrent=({current})=>
{
    const renderedlist=current.map(book=>{
        return <Bookitem book={book}/>;
    })
    
    return <div className="center">{renderedlist}</div>
}
export default Booklistcurrent;