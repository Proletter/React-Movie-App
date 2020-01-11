import React from 'react'
import { Link } from '@reach/router'
import TMDBlogo from '../images/tmdb_logo.svg'
import RMDBlogo from '../images/reactMovie_logo.png'
import { StyledHeader, StyledTMDBLogo, StyledRMDBLogo} from '../styles/StyledHeader'

//learn how to create a basic styled component
//learn how to handle props in styled components
//create a global style with styled components


const Header = () => (
   
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledRMDBLogo src={RMDBlogo} alt="rmdb-logo"></StyledRMDBLogo>
            </Link>
             <StyledTMDBLogo src={TMDBlogo} alt="rmdb-logo"></StyledTMDBLogo>

        </div>
</StyledHeader>

) 

export default Header;