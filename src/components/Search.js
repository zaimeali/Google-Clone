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

// useStateValue
import { useStateValue } from '../StateProvider'

// Action Type
import { actionTypes } from '../reducer'

function Search({ hideButtons = false }) {

    const [input, setInput] = useState('')
    const history = useHistory()

    const [, dispatch] = useStateValue()

    const search = e => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
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

            {!hideButtons ? (
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
            ): (
                <div className="search_buttons">
                    <Button 
                        variant="outlined"
                        onClick={ search }
                        type="submit"
                        className="search__buttonsHidden"
                    >
                        Google Search
                    </Button>
                    <Button 
                        variant="outlined"
                        className="search__buttonsHidden"
                    >
                        I'm Feeling Lucky
                    </Button>
                </div>
            )}
        </form>
    )
}

export default Search
