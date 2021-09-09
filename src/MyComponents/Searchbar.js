import React,{useState} from 'react'

const Searchbar =({onSubmitform})=>{

     const [term,setTerm]=useState('');

    const onSubmit= (event) =>
    {
        event.preventDefault();
         onSubmitform(term)
 
    }
    return(

        <div className="bar">
            <form onSubmit={onSubmit}>
            <input className="form-control form-control-sm" type="text" placeholder="Search" aria-label=".form-control-sm example"
            value={term} 
            onChange={(event)=>setTerm(event.target.value)}
            />
            </form>
        </div>
    )

}
export default Searchbar;