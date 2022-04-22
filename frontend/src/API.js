const APIBASE = 'http://localhost:3001';
const fetchTeams = async () => {
  const response = await fetch(APIBASE + '/teams');
  const json = await response.json();
  return json;
};
export const ping = async () => {
  try  {
    const response = await fetch(APIBASE + '/ping');
    const json = await response.text();
    return true;
  } catch(err) {
    // console.log(err)
    return false;
  }
  return true;
}
export const fetchPlayers = async () => {
  const response = await fetch(APIBASE + '/players');
  const json = await response.json();

  return json;
};
export const getTeamFromUUID = async (uuid) => {
  const response = await fetch(APIBASE + '/teams/' + uuid);
  const json = await response.json();
  return json;
};
export const getTeamByLeague = async () => {
  const data = await fetchTeams();
  let teamByLeague = {};
  data.forEach((element, i) => {
    console.log(i);
    const prop = element.league + ' S' + element.season;
    if (teamByLeague.hasOwnProperty(prop)) {
      teamByLeague[prop].push(element);
    } else {
      teamByLeague[prop] = [element];
    }
  });
  // const ordered = Object.keys(teamByLeague)
  //   .sort()
  //   .reduce((obj, key) => {
  //     obj[key] = teamByLeague[key];
  //     return obj;
  //   }, {});
  return teamByLeague;
};
