import React from 'react'

// Reducer
import { useStateValue } from '../StateProvider'

// Styling
import './SearchPage.css'

// Custom Hook
// import useGoogleSearch from '../useGoogleSearch'

// Local Call Response
import Response from '../response';

// React Router
import { Link } from 'react-router-dom'

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();

    // LIVE API CALL
    // const { data } = useGoogleSearch(term)

    const data = Response

    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img 
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt="google logo"
                    />
                </Link>
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
