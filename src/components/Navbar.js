import React from 'react'
import { Link } from 'react-router-dom';

export default Navbar => {
    return (
        <nav>
            <div>
                <Link to='/'>
                    Learn.Build.<span>Type.</span>
                </Link>
            </div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/highScores'>High Scores</Link></li>
            </ul>
        </nav>
    )
}