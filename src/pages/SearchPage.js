import React from 'react'

// Reducer
import { useStateValue } from '../StateProvider'

// Styling
import './SearchPage.css'

// Custom Hook
import useGoogleSearch from '../useGoogleSearch'

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();

    const { data } = useGoogleSearch(term)

    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <h1>{ term }</h1>
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
