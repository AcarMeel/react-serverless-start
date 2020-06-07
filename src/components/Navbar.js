import React from 'react'
import { Link } from 'react-router-dom';
import { StyledNavbar, StyledNavBrand, StyledNavItems, StyledLink } from '../styled/Navbar';
import { Accent } from '../styled/Shared'

export default Navbar => {
    return (
        <StyledNavbar>
            <StyledNavBrand>
                <Link to='/'>
                    Learn.Build.<Accent>Type.</Accent>
                </Link>
            </StyledNavBrand>
            <StyledNavItems>
                <li><StyledLink to='/home'>Home</StyledLink></li>
                <li><StyledLink to='/highScores'>High Scores</StyledLink></li>
            </StyledNavItems>
        </StyledNavbar>
    )
}