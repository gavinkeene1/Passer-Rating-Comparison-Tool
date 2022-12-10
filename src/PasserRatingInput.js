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
  const completionPercentage = (completions / attempts);
  const yardsPerAttempt = (yards / attempts);
  const touchdownsPerAttempt = (touchdowns / attempts);
  const interceptionsPerAttempt = (interceptions / attempts);

  const a = clamp((completionPercentage - 0.3) * 5, 0, 2.375);
  const b = clamp(((yardsPerAttempt) - 3) * 0.25, 0, 2.375);
  const c = clamp((touchdownsPerAttempt) * 20, 0, 2.375);
  const d = clamp(2.375 - ((interceptionsPerAttempt) * 25), 0, 2.375);

  const unadjustedPasserRating = round(((a + b + c + d) / 6) * 100, 1);

  return unadjustedPasserRating;
};

const PasserRatingInput = () => {
  const [completions, setCompletions] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [yards, setYards] = useState(0);
  const [touchdowns, setTouchdowns] = useState(0);
  const [interceptions, setInterceptions] = useState(0);
  const [numberOfYears, setNumberOfYears] = useState(0);

  const setValue = (event) => {
    console.clear();
    console.log(`event.target.value is ${event.target.value}: ${typeof event.target.value}`);
    let value = 0;
    value = Number(event.target.value);
    event.target.id === 'completions' && setCompletions(value);
    event.target.id === 'attempts' && setAttempts(value);
    event.target.id === 'yards' && setYards(value);
    event.target.id === 'touchdowns' && setTouchdowns(value);
    event.target.id === 'interceptions' && setInterceptions(value);
    event.target.id === 'numberOfYears' && setNumberOfYears(value);
    getPasserRating(completions, attempts, yards, touchdowns, interceptions);
  };

const oneQBRow = () => {
      return <>
      <input type="text" id="gameOrYear-" name="fname" placeholder='game/year' style={{ width: 100, margin: 4 }} onInput={setValue} />
      <input type="text" id="completions" name="fname" placeholder='comp' style={{ width: 100, margin: 4 }} onInput={setValue} />
      <input type="text" id="attempts" name="fname" placeholder='att' style={{ width: 100, margin: 4 }} onInput={setValue} />
      <input type="text" id="yards" name="fname" placeholder='yards' style={{ width: 100, margin: 4 }} onInput={setValue} />
      <input type="text" id="touchdowns" name="fname" placeholder='tds' style={{ width: 100, margin: 4 }} onInput={setValue} />
      <input type="text" id="interceptions" name="fname" placeholder='ints' style={{ width: 100, margin: 4 }} onInput={setValue} />
      <br />
      </>
  }

  const displayRowsPasserRating = (years) => {
    let quarterbackTable = [];
    for (let i = 0; i < years; i++) {
      quarterbackTable.push(oneQBRow());
    }
    return quarterbackTable;
  }

  /*const addQuarterback = () => {
    displayRowsPasserRating(1);
  }*/

  return (
    <div>
      <h1>Passer Rating</h1>
      <input type="text" id="numberOfYears" name="fname" placeholder='# of years' style={{ width: 100, margin: 4 }} onInput={setValue} /><br />
      {/*<button id="addQuarterback" name="fname" onClick={addQuarterback}>Add Quarterback</button>*/}
      {displayRowsPasserRating(numberOfYears)}
      <p>Passer Rating: {getPasserRating(completions, attempts, yards, touchdowns, interceptions)}</p>
    </div>
  );
}

export default PasserRatingInput;