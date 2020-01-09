import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
    return (
        <div className="Nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav