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

const AddQBStats = () => {
    const [term, setTerm] = useState('');
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
    event.target.id === 'completions' && setTerm(value);
    event.target.id === 'completions' && setCompletions(value);
    event.target.id === 'attempts' && setAttempts(value);
    event.target.id === 'yards' && setYards(value);
    event.target.id === 'touchdowns' && setTouchdowns(value);
    event.target.id === 'interceptions' && setInterceptions(value);
    event.target.id === 'numberOfYears' && setNumberOfYears(value);
    getPasserRating(completions, attempts, yards, touchdowns, interceptions);
  };



  const getOneStatsRow = (term, completions, attempts, yards, touchdowns, interceptions) => {
    let statsRow = []; // Term, Completions, Attempts, Yards, Touchdowns, Interceptions
    statsRow.push([term], [completions], [attempts], [yards], [touchdowns], [interceptions]);

    return statsRow;
  };

  const displayStatsRow = (term, completions, attempts, yards, touchdowns, interceptions) => {
    let row = getOneStatsRow(term, completions, attempts, yards, touchdowns, interceptions);
    return <><br />
      <input type="text" disabled id="gameOrYear-" name="fname" style={{ width: 100, margin: 4 }} value={'Total'} />
      <input type="text" disabled id="completions" name="fname" placeholder='comp' style={{ width: 100, margin: 4 }} value={row[1]} />
      <input type="text" disabled id="attempts" name="fname" placeholder='att' style={{ width: 100, margin: 4 }} value={row[2]} />
      <input type="text" disabled id="yards" name="fname" placeholder='yards' style={{ width: 100, margin: 4 }} value={row[3]} />
      <input type="text" disabled id="touchdowns" name="fname" placeholder='tds' style={{ width: 100, margin: 4 }} value={row[4]} />
      <input type="text" disabled id="interceptions" name="fname" placeholder='ints' style={{ width: 100, margin: 4 }} value={row[5]} />
      <br />
      </>

  }

  const simpleDataEntry = () => {
    return <>
    <input type="text" id="term" name="fname" placeholder='game/year' style={{ width: 100, margin: 4 }} onInput={setValue} />
    <input type="text" id="completions" name="fname" placeholder='comp' style={{ width: 100, margin: 4 }} onInput={setValue} />
    <input type="text" id="attempts" name="fname" placeholder='att' style={{ width: 100, margin: 4 }} onInput={setValue} />
    <input type="text" id="yards" name="fname" placeholder='yards' style={{ width: 100, margin: 4 }} onInput={setValue} />
    <input type="text" id="touchdowns" name="fname" placeholder='tds' style={{ width: 100, margin: 4 }} onInput={setValue} />
    <input type="text" id="interceptions" name="fname" placeholder='ints' style={{ width: 100, margin: 4 }} onInput={setValue} />
    {displayStatsRow(term, completions, attempts, yards, touchdowns, interceptions)}
    <br />
    </>
}

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
      <h1>Passer Rating (Simpler)</h1>
      <input type="text" id="numberOfYears" name="fname" placeholder='# of years' style={{ width: 100, margin: 4 }} onInput={setValue} /><br />
      {/*<button id="addQuarterback" name="fname" onClick={addQuarterback}>Add Quarterback</button>*/}
      {simpleDataEntry()}
      {displayRowsPasserRating(numberOfYears)}
      <p>Passer Rating: {getPasserRating(completions, attempts, yards, touchdowns, interceptions)}</p>
    </div>
  );
}

export default AddQBStats;