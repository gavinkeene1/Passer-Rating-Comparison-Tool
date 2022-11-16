import * as React from 'react';
import { getOneStatsRow } from "./AddQBStats";
import { getTotalQBStats } from "./AddQBStats";
import { totalQBRow } from "./AddQBStats";

export const displayTotalRow = (term, completions, attempts, yards, touchdowns, interceptions) => {
    let row = getOneStatsRow(term, completions, attempts, yards, touchdowns, interceptions);
    getTotalQBStats(totalQBRow, 0)
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