import React from 'react';
import { Router } from '@reach/router'
import Header from './elements/Header'
import Home from './Home'
import { GlobalStyle } from './styles/GlobalStyle'
import Movie from './Movie'
import NotFound from './NotFound'






const App = () => (
    <>
        
        <GlobalStyle />
        <Header />
        <Router>
            <Home path="/" />
            <Movie path="/:movieId" />
            <NotFound default/>
        </Router>
        
        
    </>

)
export default App;
