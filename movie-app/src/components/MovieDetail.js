import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { fetchAsyncMovieDetails, getAllMovieDetail, removeFetchAsyncMovieDetails } from '../features/movies/movieSlice';
import {useParams,Link} from 'react-router-dom';


function MovieDetail() {
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getAllMovieDetail);
   
    useEffect(() => {
      dispatch(fetchAsyncMovieDetails(imdbID));
      return () => {
         dispatch(removeFetchAsyncMovieDetails());
      }
    }, [dispatch,imdbID])

  return (
    <>
        {Object.keys(data).length === 0 ?
         (<div className="text-2xl font-bold text-white text-center my-10 ">...looading</div>):
         (
          <div className='my-8 grid grid-cols-2 gap-4 '>
            <div className="text-white leading-7 ">
                <h1>title : {data.Title}</h1>
                <p>year : {data.Year}</p>
                <p>country : {data.Country}</p>
                <p>director : {data.Director}</p>
                <p>actor : {data.Actors}</p>
                <p>released : {data.Released}</p>
                <p>genre : {data.Genre}</p>
                <p>language : {data.Language}</p>
                <p>runtime : {data.Runtime}</p>
                <p>writer : {data.Writer}</p>
                <p>ratings : </p>
                <ul className='indent-7'>
                  {data.Ratings?.map( (rating,index) => <li key={index}>{rating.Source} : {rating.Value}</li>)}
                </ul>
                <Link to={'/'}>
                      <button className='text-white bg-blue-800 px-4 py-1 my-7 rounded-lg mb-5'>back to list</button>
                </Link>
            </div>
            <div className="place-self-center">
              <img src={data.Poster} alt={data.Title} />
            </div>
          </div>

         )
         }
    </>
  )
}

export default MovieDetail