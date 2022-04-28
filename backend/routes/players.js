const { getTeamSnippets } = require('./teams');

module.exports = {
  main: function (app, base) {
    app.get('/players', (req, res) => {
      let listOfPlayers = [];
      base('Players')
        .select()
        .eachPage((records, fetchNextPage) => {
          records.forEach(function (record) {
            const playerSnippet = {
              name: record.get('Name'),
              uuid: record.get('uuid'),
            };
            listOfPlayers.push(playerSnippet);
          });
          fetchNextPage();
        })
        .then(() => {
          listOfPlayers.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          );
          res.send(listOfPlayers);
        });
    });
    app.get('/players/:uuid', async (req, res) => {
      try {
        const record = await base('Players').find(req.params.uuid);

        const playingFor = await getTeamSnippets(
          record.get('PlayingFor'),
          base
        );
        const staffFor = await getTeamSnippets(record.get('StaffFor'), base);
        const managed = await getTeamSnippets(record.get('Managed'), base);
        const brandArtistFor = await getTeamSnippets(
          record.get('BrandArtistFor'),
          base
        );

        const playerSnippet = {
          name: record.get('Name'),
          playingFor,
          staffFor,
          managed,
          brandArtistFor,
          tags: record.get('Tags'),
          uuid: record.get('uuid'),
        };
        res.send(playerSnippet);
      } catch (err) {
        res.send([]);
      }
    });
  },
  getPlayerSnippets: async function (uuids, base) {
    let out = [];
    if (!uuids) return undefined;
    await Promise.all(
      uuids.map(async (p) => {
        const r = await base('Players').find(p);
        const playerSnippet = {
          name: r.get('Name'),
          uuid: r.get('uuid'),
        };
        out.push(playerSnippet);
      })
    );
    return out;
  },
};
