import { useState, useEffect, useCallback } from 'react'
import { API_URL, API_KEY } from '../../config'

export const useMovieFetch = movieId => {
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    console.log(error)
 

    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);
        
        try {
            const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`g
            console.log(endpoint)
            const result = await(await fetch(endpoint)).json()
            console.log(result)

            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
            console.log(creditsEndpoint)
            const creditsResult = await (await fetch(creditsEndpoint)).json()
            console.log("This is the data")
            console.log(creditsResult)

            const directors = creditsResult.crew.filter(member => member.job === 'Director')
            setState({
                ...result,
                actors: creditsResult.cast,
                director: directors,
            })
           setLoading(false)

        } catch (err) {
            if(err){
                setError(true)
            }
           
        }

    }, [movieId])
    useEffect(() => {
        if (localStorage[movieId]) {
            setState(JSON.parse(localStorage[movieId]))
            setLoading(false)
        }else{
            fetchData()
            }
    }, [fetchData])

    useEffect(() => {
        localStorage.setItem(movieId, JSON.stringify(state))
    }, [movieId, state])
    
    return [state, loading, error]
}