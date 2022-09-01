import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi"
import {APIKey} from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () =>{
    const movieText = "Harry";
    const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
    return response.data;
} );

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (search) =>{
    const response = await MovieApi.get(`?apikey=${APIKey}&s=${search}&type=movie`)
    return response.data;
} );

export const fetchAsyncMovieDetails = createAsyncThunk("movies/fetchAsyncMovieDetails", async (id) =>{
    const response = await MovieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
    return response.data;
} );





const initialState = {
    movies : {},
    shows : {},
    selectedMovie : {}
}

const movieSlice  = createSlice({
    name : "movies",
    initialState,
    reducers: {
        removeFetchAsyncMovieDetails: (state) =>{ state.selectedMovie = {}} 
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () =>{console.log('pending') },
        [fetchAsyncMovies.fulfilled]: (state,{payload}) =>{console.log('feth sukses');return {...state,movies: payload} },
        [fetchAsyncShows.fulfilled]: (state,{payload}) =>{console.log('feth sukses');return {...state,shows: payload} },
        [fetchAsyncMovieDetails.fulfilled]: (state,{payload}) =>{console.log('feth sukses' );return {...state,selectedMovie:payload} },
        [fetchAsyncMovies.rejected]: () =>{console.log('rejected') }

}
});


export default movieSlice.reducer;

export const  {removeFetchAsyncMovieDetails} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMovieDetail = (state) => state.movies.selectedMovie;

