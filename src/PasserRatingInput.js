import * as React from 'react';
import { useState } from 'react';

const clamp =  require('lodash/clamp');
const round = require('lodash/round');

/** Get Passer Rating
* @Docs https://en.wikipedia.org/wiki/Passer_rating#NFL_and_CFL_formula
* @Dependencies: lodash (clamp, round) */
const getPasserRating = (
  attempts,
  completions,
  yards,
  touchdowns,
  interceptions
) => {
  if (attempts === 0) return 0
  const a = clamp((completions / attempts - 0.3) * 5, 0, 2.375)
  const b = clamp((yards / attempts - 3) * 0.25, 0, 2.375)
  const c = clamp((touchdowns / attempts) * 20, 0, 2.375)
  const d = clamp(2.375 - (interceptions / attempts) * 25, 0, 2.375)

  return round(((a + b + c + d) / 6) * 100, 1)
};

const PasserRatingInput = () => {
  const [completions, setCompletions] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [yards, setYards] = useState(0);
  const [touchdowns, setTouchdowns] = useState(0);
  const [interceptions, setInterceptions] = useState(0);

  const setValue = (event) => {
    const value = Number(event.target.value ? event.target.value : 0);
    event.target.id === 'completions' && setCompletions(value);
    event.target.id === 'attempts' && setAttempts(value);
    event.target.id === 'yards' && setYards(value);
    event.target.id === 'touchdowns' && setTouchdowns(value);
    event.target.id === 'interceptions' && setInterceptions(value);
    console.log(`value changed to ${value}`);
    console.log(getPasserRating(completions, attempts, yards, touchdowns, interceptions));
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