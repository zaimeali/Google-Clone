import React from 'react'
import './Home.css'

// React Router
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='home'>
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to='/about'>About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                </div>
            </div>

            <div className="home__body">

            </div>
        </div>
    )
}
