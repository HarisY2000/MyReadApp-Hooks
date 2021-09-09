import React from 'react'
import Bookitem from './Bookitem'
const Booklistwant=({want})=>
{
    const renderedlist=want.map(book=>{
        return <Bookitem book={book}/>;
    })
    
    return <div className="center">{renderedlist}</div>
}
export default Booklistwant;