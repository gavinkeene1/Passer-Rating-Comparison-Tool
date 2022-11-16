const clamp =  require('lodash/clamp');
const round = require('lodash/round');

/** Get Passer Rating
* @Docs https://en.wikipedia.org/wiki/Passer_rating#NFL_and_CFL_formula
* @Dependencies: lodash (clamp, round) */
export const getPasserRating = (
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