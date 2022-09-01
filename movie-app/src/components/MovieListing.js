import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../features/movies/movieSlice'
import MovieCard from './MovieCard';
import Slider from 'react-slick';

function MovieListing() {
    // console.clear();
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    let renderMovies , renderShows= "";
    if(movies.Response === "True"){
            renderMovies = movies.Search.map((movie,index) => <MovieCard data={movie} key={index}/>)
    }else{
        renderMovies = (
            <div>
             <h3>error :{movies.Error}</h3>
        </div>
        )
    }

    if(shows.Response === "True"){
            renderShows = shows.Search.map((shows,index) => <MovieCard data={shows} key={index}/>)
    }else{
        renderShows = (
            <div>
             <h3>error :{shows.Error}</h3>
        </div>
        )
    }
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

  return (
    <div className=''>
        <div className='flex flex-col items-center'>
            <h2 className='text-white my-4 text-xl text-center capitalize font-bold'>movies</h2>
            <div className='w-[95%]'>
                <Slider {...settings}>
                {renderMovies}
                </Slider>
            </div>
        </div>
        <div className='my-8'>
            <h2 className='text-white my-4 text-xl text-center capitalize font-bold'>movies</h2>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-8 '>
                {renderShows}
            </div>
        </div>
    </div>
  )
}

export default MovieListing