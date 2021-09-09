import React,{useState,useEffect} from 'react'
import './Header.css'
import Searchbar from './MyComponents/Searchbar'
import axios from 'axios'
import Booklist from './Booklist'

const Header=()=>
{
    const [books,setBooks]=useState([]);
    const onSearchSubmit=async term=>
{
    const response=await axios.get("https://reactnd-books-api.udacity.com/books",{
        params:{q:term},
        headers:{
            Authorization:Math.random().toString(36).substr(-8)
        }

    }); 
    setBooks(response.data.books);
};
return(
    <div style={{backgroundColor:'green',height:80}}> 
    <label className="label" htmlFor="name">
     MyReads
    </label>
    <a className="nav-link" href="#">Search Page</a>
    <Searchbar onSubmitform={onSearchSubmit}/>
    <Booklist books={books}/>
    </div>
    );

}


export default Header;