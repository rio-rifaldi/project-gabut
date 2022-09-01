import React, {useEffect} from 'react'
import MovieListing from './MovieListing'
import {useDispatch} from "react-redux"
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSlice'
<button className='bg-blue-800 px-4 py-1 rounded-lg '>Details</button>

function Home() {

    const dispatch = useDispatch()
    let movie = "love"
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows(movie));
    },[dispatch])
    
  return (
    <div className=''>
        < MovieListing />
    </div>
  )
}

export default Home