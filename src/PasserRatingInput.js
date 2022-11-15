import * as React from 'react';
import { useState } from 'react';

const clamp =  require('lodash/clamp');
const round = require('lodash/round');

/** Get Passer Rating
* @Docs https://en.wikipedia.org/wiki/Passer_rating#NFL_and_CFL_formula
* @Dependencies: lodash (clamp, round) */
const getPasserRating = (
  completions,
  attempts,
  yards,
  touchdowns,
  interceptions
) => {
  if (attempts === 0) return 0
  const a = clamp((completions / attempts - 0.3) * 5, 0, 2.375);
  const b = clamp((yards / attempts - 3) * 0.25, 0, 2.375);
  const c = clamp((touchdowns / attempts) * 20, 0, 2.375);
  const d = clamp(2.375 - ((interceptions / attempts) * 25), 0, 2.375);

  console.log(`13/17 percentage is ${13/17*100}%`);
  console.log(a);
  console.log(`completions was ${completions}`);
  console.log(b);
  console.log(`yards was ${yards}`);
  console.log(c);
  console.log(`touchdowns was ${touchdowns} and attempts was ${attempts}`);
  console.log(`tds/att * 20 is ${(touchdowns/attempts) * 20} `);
  console.log(d);
  console.log(`interceptions was ${interceptions}`);

  const unadjustedPasserRating = round(((a + b + c + d) / 6) * 100, 1);

  /*if (unadjustedPasserRating > 15&& (a < .775 || b < 7.5 || c < .11875 || interceptions > 0)) { 
    return 
  }*/

  console.log(unadjustedPasserRating);

  return unadjustedPasserRating;


};

const PasserRatingInput = () => {
  const [completions, setCompletions] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [yards, setYards] = useState(0);
  const [touchdowns, setTouchdowns] = useState(0);
  const [interceptions, setInterceptions] = useState(0);

  const setValue = (event) => {
    console.clear();
    console.log(`event.target.value is ${event.target.value}: ${typeof event.target.value}`);
    let value = 0;
    //if (event.target.value === value) {
      value = Number(event.target.value);
    //}
    event.target.id === 'completions' && setCompletions(value);
    event.target.id === 'attempts' && setAttempts(value);
    event.target.id === 'yards' && setYards(value);
    event.target.id === 'touchdowns' && setTouchdowns(value);
    event.target.id === 'interceptions' && setInterceptions(value);
    getPasserRating(completions, attempts, yards, touchdowns, interceptions);
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