import React from 'react';
import { Link } from 'react-router-dom';

class PasserRatingInput extends React.Component {
    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder={`Passer Rating Input`}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}

export default PasserRatingInput;