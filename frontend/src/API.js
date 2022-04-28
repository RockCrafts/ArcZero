const APIBASE = 'https://arc-zero.herokuapp.com'; //PROD
// const APIBASE = 'http://localhost:3001'; //DEV

export const fetchTeams = async () => {
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
  json.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase()
      ? 1
      : b.name.toLowerCase() > a.name.toLowerCase()
      ? -1
      : 0
  );
  return json;
};
export const getLeagueFromUUID = async (uuid) => {
  const response = await fetch(APIBASE + '/leagues/' + uuid);
  const json = await response.json();
  return json;
};
export const getTeamFromUUID = async (uuid) => {
  const response = await fetch(APIBASE + '/teams/' + uuid);
  const json = await response.json();
  try {
    json.roster = json.roster.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    json.staff = json.staff.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    json.relatedTeams = json.relatedTeams.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    json.brandArtists = json.brandArtists.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  } catch {}
  return json;
};
export const getPlayerFromUUID = async (uuid) => {
  const response = await fetch(APIBASE + '/players/' + uuid);
  const json = await response.json();
  try {
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
  } catch {}
};

let sortList = [
  'League Zero S4',
  'League Zero S3',
  'League Zero S2',
  'League Zero S1',
  'League Zero S0',
  'Flux Cup S4',
  'Flux Cup S3',
  'Flux Cup S2',
  'Flux Cup S1',
  'Flux Cup S0',
  'Tournament of Kings Row S4',
  'Tournament of Kings Row S3',
  'Tournament of Kings Row S2',
  'Tournament of Kings Row S1',
  'Tournament of Kings Row S0',
  'Community Snowball Cup S1',
  'Horizon League S2',
];
export const getTeamByLeague = async (data) => {
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
  sorted.sort((a, b) => {
    console.log(a[0]);

    console.log(b[0]);
    return sortList.indexOf(a[0]) - sortList.indexOf(b[0]);
  });
  return sorted;
};
