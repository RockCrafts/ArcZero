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
  },
  getPlayerSnippets: async (uuids, base) => {
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
