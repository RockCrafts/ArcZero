const APIBASE = 'https://arc-zero.herokuapp.com'; //PROD
// const APIBASE = 'http://localhost:3001'; //DEV

const fetchTeams = async () => {
  const response = await fetch(APIBASE + '/teams');
  const json = await response.json();
  return json;
};
export const ping = async () => {
  try {
    const response = await fetch(APIBASE + '/ping');
    await response.text();
    return true;
  } catch (err) {
    return false;
  }
};
export const fetchPlayers = async () => {
  const response = await fetch(APIBASE + '/players');
  const json = await response.json();
  return json;
};
export const getTeamFromUUID = async (uuid) => {
  const response = await fetch(APIBASE + '/teams/' + uuid);
  const json = await response.json();
  json.roster = json.roster.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  json.staff = json.staff.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  json.relatedTeams = json.relatedTeams.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  return json;
};
export const getPlayerFromUUID = async (uuid) => {
  const response = await fetch(APIBASE + '/players/' + uuid);
  const json = await response.json();
  json.playingFor = json.playingFor.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  json.staffFor = json.staffFor.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  json.managed = json.managed.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  return json;
};
export const getTeamByLeague = async () => {
  const data = await fetchTeams();
  let teamByLeague = {};
  data.forEach((element, i) => {
    const prop = element.league + ' S' + element.season;
    if (teamByLeague.hasOwnProperty(prop)) {
      teamByLeague[prop].push(element);
    } else {
      teamByLeague[prop] = [element];
    }
  });
  let sorted = [];
  Object.entries(teamByLeague).forEach(([key, value]) => {
    sorted.push([key, value]);
  });
  sorted.sort().reverse();
  return sorted;
};
