import { stat } from "fs";
import { useCallback } from "react";

export const header = `Player Team Att Cmp Yds TD Int`;

const isTeamName = (value) =>
  "ARI" ||
  "ATL" ||
  "BAL" ||
  "BUF" ||
  "CAR" ||
  "CHI" ||
  "CIN" ||
  "CLE" ||
  "DAL" ||
  "DEN" ||
  "DET" ||
  "DET" ||
  "GB" ||
  "HOU" ||
  "IND" ||
  "JAX" ||
  "KC" ||
  "LA" ||
  "LAC" ||
  "LV" ||
  "MIA" ||
  "MIN" ||
  "NE" ||
  "NO" ||
  "NYG" ||
  "NYJ" ||
  "PHI" ||
  "PIT" ||
  "SEA" ||
  "SF" ||
  "TB" ||
  "TEN" ||
  "WAS";

const FourthQuarterPassing2021 = `
Justin Herbert	LAC	201	125	1,583	14	7
Derek Carr	LV	164	116	1,375	5	4
Ben Roethlisberger	PIT	189	132	1,375	12	1
Kirk Cousins	MIN	163	109	1,337	8	2
Tom Brady	TB	162	106	1,172	9	2
Jared Goff	DET	180	118	1,131	3	5
Trevor Lawrence	JAX	195	110	1,123	3	5
Matthew Stafford	DET	134	96	1,118	12	0
Joe Burrow	CIN	123	82	1,081	10	6
Matt Ryan	ATL	142	97	1,062	6	6
Josh Allen	BUF	135	96	1,027	10	0
Davis Mills	HOU	148	96	989	7	4
Patrick Mahomes	KC	121	81	979	11	2
Carson Wentz	IND	124	77	957	5	3
Jimmy Garoppolo	SF	103	69	947	5	4
Taylor Heinicke	WAS	145	94	931	5	7
Teddy Bridgewater	CAR	122	84	928	8	4
Dak Prescott	DAL	126	85	917	8	4
Mac Jones	NE	129	81	914	8	3
Kyler Murray	ARI	121	80	914	3	1
Ryan Tannehill	TEN	122	85	903	5	5
Zach Wilson	NYJ	138	75	894	4	3
Jalen Hurts	PHI	107	65	784	7	0
Aaron Rodgers	GB	93	59	753	6	0
Tua Tagovailoa	MIA	97	66	725	7	5
Lamar Jackson	BAL	100	62	724	5	4
Sam Darnold	CAR	120	69	698	4	4
Russell Wilson	SEA	101	62	644	5	2
Baker Mayfield	CLE	110	56	607	4	4
Daniel Jones	NYG	111	62	591	2	1
Justin Fields	CHI	89	51	579	3	4
Trevor Siemian	NO	68	46	471	6	1
Andy Dalton	CHI	76	44	426	2	4
Tyler Huntley	BAL	72	46	404	1	2
Mike Glennon	NYG	75	42	351	3	6
Drew Lock	DEN	43	25	326	1	1
Jacoby Brissett	MIA	50	33	310	2	1
Jordan Love	GB	37	22	264	2	3
Taysom Hill	NO	31	18	262	2	3
Geno Smith	SEA	38	25	242	1	1
Jameis Winston	NO	30	15	241	4	1
Mike White	NYJ	39	23	233	2	0
Josh Johnson	BAL	34	24	231	3	2
Brian Hoyer	NE	11	9	227	1	0
Trey Lance	SF	28	15	225	2	0
Cam Newton	CAR	32	23	214	2	1
Phillip Walker	CAR	38	15	196	1	1
Cooper Rush	DAL	21	15	165	2	0
Tyrod Taylor	HOU	34	19	154	0	0
Colt McCoy	ARI	23	17	152	0	0
Tim Boyle	DET	26	19	147	0	3
Jake Fromm	NYG	28	13	146	1	1
Case Keenum	CLE	23	14	121	1	0
Kyle Allen	WAS	19	12	120	1	0
Joe Flacco	NYJ	11	8	101	1	0
Nick Foles	CHI	11	7	99	1	0
Garrett Gilbert	WAS	13	10	82	0	0
Chad Henne	KC	16	11	82	0	0
Brandon Allen	CIN	17	8	74	2	0
Gardner Minshew	PHI	10	7	70	1	1
Blaine Gabbert	TB	11	7	67	0	0
Ian Book	NO	6	2	60	0	1
Mason Rudolph	PIT	14	8	60	0	0
Nick Mullens	CLE	9	6	56	1	0
Cedrick Wilson	DAL	2	2	53	0	0
Mitchell Trubisky	BUF	8	6	43	0	1
Sean Mannion	MIN	7	3	38	0	0
Jakobi Meyers	NE	1	1	30	0	0
Jacob Eason	SEA	5	2	25	0	1
Chris Streveler	BAL	7	4	20	0	0
Josh Rosen	ATL	11	2	19	0	2
Tommy Townsend	KC	1	1	16	0	0
Kellen Mond	MIN	3	2	5	0	0
John Wolford	LA	4	1	5	0	1
Keenan Allen	LAC	1	0	0	0	0
Cole Beasley	BUF	1	0	0	0	0
David Blough	DET	0	0	0	0	0
A.J. Brown	TEN	2	0	0	0	0
Jamison Crowder	NYJ	0	0	0	0	0
Feleipe Franks	ATL	1	0	0	0	1
Mike Gesicki	MIA	1	0	0	0	0
Andy Lee	ARI	0	0	0	0	0
David Montgomery	CHI	1	0	0	0	1
`;

const statsWithCommas = (stats) => {
  return stats.replace(/\n/g, "---"); // Break up with tabs
};

const statCategories = (excelData) => {
    return statsWithCommas(excelData).split("---");
};

const FourthQuarterPassingStatsArray = (excelData) => {
    return statCategories(excelData);
}

const getArrayOfAllPlayerStatLines = (excelData) => {
    // For each player stat line in the array, push it to a new array of player stat lines.
    const allPlayerStatLines = [];

    FourthQuarterPassingStatsArray(excelData).forEach(statLine =>
        allPlayerStatLines.push(statLine));

    return allPlayerStatLines;
}

const getPlayerName = (individualPlayerString) => {
    const playerName = [];

    const firstName = individualPlayerString.split(" ")[0];
    playerName.push(firstName);

    const lastName = individualPlayerString.split(" ")[1];
    playerName.push(lastName);

    return playerName.join(' ');
}

const createData = (excelData) => {
  const individualPlayerString = statCategories(excelData)[1];

  return getArrayOfAllPlayerStatLines(excelData) // Remove after checking it out

  

  // TODO: For each player stat line, get player name


  // TODO: For each player stat line, get attempts
  // TODO: For each player stat line, get completions
  // TODO: For each player stat line, get yards
  // TODO: For each player stat line, get touchdowns
  // TODO: For each player stat line, get interceptions

  console.log(`player: ${getPlayerName(individualPlayerString)}`);
  // const team = statCategories(excelData);
  /*
    const attempts
    const completions
    const yards
    const touchdowns
    const interceptions
*/

  // return getPlayerName(individualPlayerString);
};

export const FourthQuarterPassingStats = () => {
  console.log(createData(FourthQuarterPassing2021));
  return createData(FourthQuarterPassing2021);
};
