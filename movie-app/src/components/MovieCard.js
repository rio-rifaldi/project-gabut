import React from 'react'
import {Link} from 'react-router-dom'
function MovieCard({data,index}) {
  return (
    <div className='text-white '>
        <img src={data.Poster} alt="poster" className='w-[90%]' />
        <h1>{data.Title}</h1>
        <p>{data.Year}</p>
        <Link to={`/movie/${data.imdbID}`} >
              <button className='bg-blue-800 px-4 py-1 rounded-lg '>Details</button>
        </Link>
    </div>
  )
}

export default MovieCard