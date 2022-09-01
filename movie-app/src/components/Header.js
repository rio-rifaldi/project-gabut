import React,{useState} from 'react'
import logo from '../images/layers-purple.svg'
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import { fetchAsyncShows } from '../features/movies/movieSlice';
function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch()
   const searchHandler = (e) =>{
    e.preventDefault();
    console.log(term);
    dispatch(fetchAsyncShows(term));
    setTerm('')
  } 
  return (
    <header className='bg-slate-600 flex px-10 justify-between py-3'>
        <Link to="/">
            <h1 className='text-xl text-white font-bold'>movie app</h1>
        </Link>
        <form action="" onSubmit={searchHandler}>
          <input type="text" name="text" id="text" placeholder='search' className='px-4 py-1 mx-3 focus:outline-none' value={term} onChange={(e) => setTerm(e.target.value) }  />
          <button className='text-white bg-sky-700 px-4 py-1 rounded-lg'>search</button>
        </form>
        <img src={logo} alt="Layer purple" className='w-8' />
    </header>
  )
}

export default Header