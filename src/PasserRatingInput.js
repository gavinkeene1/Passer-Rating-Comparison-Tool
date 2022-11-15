import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/*class PasserRatingInput extends React.Component {
    render() {
      const [completions, setCompletions] = useState(0);
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder={`Passer Rating Input`}/>
              </div>
              <div>
      <p>You clicked {completions} times</p>
      <button onClick={() => setCompletions(completions + 1)}>
        Click me
      </button>
    </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
          
        )
    }
}*/

function PasserRatingInput() {
  const [completions, setCompletions] = useState(0);

  return (
    <div>
      <p>You clicked {completions} times</p>
      <button onClick={() => setCompletions(completions + 1)}>
        Click me
      </button>
      <input type="text" id="fname" name="fname" placeholder='comp' style={{width: 100, margin: 4}} />
      <input type="text" id="fname" name="fname" placeholder='att' style={{width: 100, margin: 4}} />
      <input type="text" id="fname" name="fname" placeholder='yards' style={{width: 100, margin: 4}} />
      <input type="text" id="fname" name="fname" placeholder='tds' style={{width: 100, margin: 4}} />
      <input type="text" id="fname" name="fname" placeholder='ints' style={{width: 100, margin: 4}} /><br /><br></br>
    </div>
  );
}

export default PasserRatingInput;
//export default PasserRatingInput;