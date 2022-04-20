const APIBASE = 'http://localhost:3001';
const fetchTeams = async () => {
  const response = await fetch(APIBASE + '/teams');
  const json = await response.json();
  return json;
};
export const fetchPlayers = async () => {
  const response = await fetch(APIBASE + '/players');
  const json = await response.json();

  return json;
};
export const getTeamByLeague = async () => {
  const data = await fetchTeams();
  let teamByLeague = {};
  data.forEach((element) => {
    const prop = element.league + ' S' + element.season;
    if (teamByLeague.hasOwnProperty(prop)) {
      teamByLeague[prop].push(element);
    } else {
      teamByLeague[prop] = [element];
    }
  });
  return teamByLeague;
};
