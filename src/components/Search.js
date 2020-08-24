import React, { useState } from 'react'

// Styling
import './Search.css'

// Icons
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'

// Material UI
import { Button } from '@material-ui/core'

// React Router
import { useHistory } from 'react-router-dom'

function Search() {

    const [input, setInput] = useState('')
    const history = useHistory()

    const search = e => {
        e.preventDefault();
        history.push('/search')
        
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search_inputIcon" />
                <input 
                    value={ input } 
                    onChange={ e => setInput(e.target.value) }
                />
                <MicIcon />
            </div>

            <div className="search_buttons">
                <Button 
                    variant="outlined"
                    onClick={ search }
                    type="submit"
                >
                    Google Search
                </Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search
