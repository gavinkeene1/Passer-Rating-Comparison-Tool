import * as React from 'react';
import { useState } from 'react';
import { getPasserRating } from './AddQBStats.util';
import { displayTotalRow } from './DisplayQBStats.util';

export const getTotalQBStats = (totalQBRow, statIndex) => {
    return totalQBRow[0][statIndex];
  }

  /** Push the data of a stats input row to the total stats array for a particular QB.  */
  export const getOneStatsRow = (term, completions, attempts, yards, touchdowns, interceptions) => {
    let statsRow = []; // Term, Completions, Attempts, Yards, Touchdowns, Interceptions
    statsRow.push([term], [completions], [attempts], [yards], [touchdowns], [interceptions]);

    // Push the row of data to the total stats for an individual QB. Individual stats will be gotten from there.
    totalQBRow.push(([[term], [completions], [attempts], [yards], [touchdowns], [interceptions]]));

    return statsRow;
  };


export let totalQBRow = [];

const AddQBStats = () => {
    const [term, setTerm] = useState('');
    const [completions, setCompletions] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [yards, setYards] = useState(0);
    const [touchdowns, setTouchdowns] = useState(0);
    const [interceptions, setInterceptions] = useState(0);
    const [numberOfYears, setNumberOfYears] = useState(0);

 /** Update/set the value of a stat on changing its input.
  */
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

  const simpleDataEntry = () => {
    return <>
    <input type="text" id="term" name="fname" placeholder='game/year' style={{ width: 100, margin: 4 }} onInput={setValue} />
    <input type="text" id="completions" name="fname" placeholder='comp' style={{ width: 100, margin: 4 }} onInput={setValue} />
    <input type="text" id="attempts" name="fname" placeholder='att' style={{ width: 100, margin: 4 }} onInput={setValue} />
    <input type="text" id="yards" name="fname" placeholder='yards' style={{ width: 100, margin: 4 }} onInput={setValue} />
    <input type="text" id="touchdowns" name="fname" placeholder='tds' style={{ width: 100, margin: 4 }} onInput={setValue} />
    <input type="text" id="interceptions" name="fname" placeholder='ints' style={{ width: 100, margin: 4 }} onInput={setValue} />
    {displayTotalRow(term, completions, attempts, yards, touchdowns, interceptions)}
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
    console.log(quarterbackTable)
    quarterbackTable.push(
        [totalQBRow[totalQBRow.length-1][1], 
        totalQBRow[totalQBRow.length-1][2],
        totalQBRow[totalQBRow.length-1][3],
        totalQBRow[totalQBRow.length-1][4],
        totalQBRow[totalQBRow.length-1][5]]);

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