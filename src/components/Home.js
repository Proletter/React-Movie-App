import React from 'react'
import { useState, useEffect } from 'react';
import {
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL,
    POPULAR_BASE_URL,
    SEARCH_BASE_URL
} from '../config'
//importing all components

import Heroimage from './elements/Heroimage'
import Spinner from './elements/Spinner'
import SearchBar from './elements/SearchBar'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Grid from './elements/Grid'
// import Header from './elements/Header'
import MovieThumb from './elements/MovieThumb'

//import custom hooks
import {useHomeFetch} from './hooks/useHomeFetch'
import NoImage from './images/no_image.jpg'





const Home = () => {
    // call hooks and get the state which contains the api data, the erro which contains the error being returned from the api call and a loading status to check wether the api call was completed or not
    const [ 
        { state:
            { movies, currentPage, totalPages, heroimage }
                        
            ,
            loading,
            error }
        
        , fetchMovies
    
        ] = useHomeFetch()
    console.log(movies)
    
    const [searchTerm, setSearchTerm] = useState('')
    //check if there is an error in the api call. If there is an error return the following div
    if (error) return <div>Something went wrong please refresh page</div>
    
    //check if there is no data in the first index of the movie array. if there is no data return a spinner
    if (!movies[0]) return <Spinner />

    
    const searchMovies = search => {
        const endpoint = search ? `${SEARCH_BASE_URL}${search}` : `${POPULAR_BASE_URL}`
        setSearchTerm(search);
        fetchMovies(endpoint)
    }   


    const loadMoreMovies = () => {
        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`
        const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`

        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
    
        fetchMovies(endpoint);
    }
    
    return <>
        
        {/* //passing the following props to the heroimage component/image */}
        
        {/* if there is a seach term, return nothing. Else return the home image */}
        {!searchTerm && <Heroimage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroimage.backdrop_path}`}
        
            title={heroimage.original_title} text={heroimage.overview} />}
        

        <SearchBar callback={searchMovies}/>

        <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
            
            {movies.map((movie) => (
                    <MovieThumb
                    key={movie.id}
                    clickable
                    image={
                        movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` :
                        NoImage}
                    movieId={movie.id}
                    movieName={movie.original_title}
                />
            ))}
                        
         </Grid>
        
        {loading && <Spinner />}
        
        {/* //check if there is no more to show and hide the button */}
        {currentPage < totalPages && !loading && (
       
            <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
        )}
        </>  

}

export default Home;