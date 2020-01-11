import { useState, useEffect } from 'react'
import { POPULAR_BASE_URL } from '../../config'

export const useHomeFetch = () => {
        //using react hooks to keep track of states
        const [state, setState] = useState({
           //thr initial state is "movies" with an empty array"
            movies: []
        });
    
    //you can create multiple states within the same component
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(false)
        //console.log(state)
    

    //making an api call to the tmdb api while using an async function
        const fetchMovies = async endpoint => {
            //changing the state of the previously created states to false and then true
            setError(false)
            setLoading(true)


            const isLoadMore = endpoint.search('page');
            //running the fetch request in a try and catch block to handle errors
            try {
                //I can now use await since it is an async function
                //I am using await twice here since fetch itself is asynchronous also parsing the blob gotten from the api call to json is also asynchronous
                const result = await (await (await fetch(endpoint))).json();
                
                //console logging the result of the request
                console.log(result)
                //

                //setting the previously  created state which contains an empty "movies array" to contain the result of the api call
                setState((prev) => ({
                    ...prev,
                    movies: isLoadMore !== -1 ? [...prev.movies, ...result.results] : [...result.results],
                    heroimage: prev.heroimage || result.results[0],
                    currentPage: result.page,
                    totalPages: result.total_pages,
                }))

            } catch (error) {
                setError(true)
                console.log(error)

            }
            setLoading(false)
    }
    
    //using useEffect to call the "fetchmovies" function. UseEffect is more or less Componentdidmount
    //the empty array means it only runs the function once after the component has mounted
        useEffect(() => {
            fetchMovies(`${POPULAR_BASE_URL}`)
        }, [])
    
    //returninng all three initial states so they can be imported and used by a component. 
    return [{state, loading, error}, fetchMovies]

}