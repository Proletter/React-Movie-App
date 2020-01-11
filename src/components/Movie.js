import React from 'react'
//importing all components to route to
import Movieinfo from './elements/Movieinfo'
import Navigation from './elements/Navigation'
import Movieinfobutton from './elements/Movieinfobutton'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'
import { useMovieFetch } from './hooks/useMovieFetch'





const Movie = (movieId) => {

   const [movie, loading, error] = useMovieFetch(movieId)
    //same as useMovieFetch hook "state"
    //console.log(movie);
    if (error) return <div>Something went wrong</div>
    if(loading) return <Spinner />
    return (<>
        <Navigation/>
        <Movieinfo />
        <Movieinfobutton />
        <Grid>
            <Actor/>
        </Grid>
        <Spinner/>
    
    </>)
    
    
    }

export default Movie