import * as React from 'react';
import { useState, useCallback } from 'react';
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
  const [attempts, setAttempts] = useState(0);
  const [yards, setYards] = useState(0);
  const [touchdowns, setTouchdowns] = useState(0);
  const [interceptions, setInterceptions] = useState(0);

  const setValue = (event) => {
    const value = Number(event.target.value);
    event.target.id === 'completions' && setCompletions(value);
    event.target.id === 'attempts' && setAttempts(value);
    event.target.id === 'yards' && setYards(value);
    event.target.id === 'touchdowns' && setTouchdowns(value);
    event.target.id === 'interceptions' && setInterceptions(value);
    console.log(`completions: ${completions}`);
  };

  return (
    <div>
      <p>You clicked {completions} times</p>
      <button onClick={() => setCompletions(completions + 1)}>
        Click me
      </button>
      <input type="text" id="completions" name="fname" placeholder='comp' style={{width: 100, margin: 4}} onChange={setValue} />
      <input type="text" id="attempts" name="fname" placeholder='att' style={{width: 100, margin: 4}} onChange={setValue} />
      <input type="text" id="yards" name="fname" placeholder='yards' style={{width: 100, margin: 4}} onChange={setValue} />
      <input type="text" id="touchdowns" name="fname" placeholder='tds' style={{width: 100, margin: 4}} onChange={setValue} />
      <input type="text" id="interceptions" name="fname" placeholder='ints' style={{width: 100, margin: 4}} onChange={setValue} /><br /><br></br>

      <p>Completions: {completions}</p>
      <p>Attempts: {attempts}</p>
      <p>Yards: {yards}</p>
      <p>Touchdowns: {touchdowns}</p>
      <p>Interceptions: {interceptions}</p>
    </div>
  );
}

export default PasserRatingInput;
//export default PasserRatingInput;