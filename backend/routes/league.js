const { getPlayerSnippets } = require('./players');
const { getTeamSnippets } = require('./teams');

module.exports = {
  main: function (app, base) {
    app.get('/leagues/:uuid', async (req, res) => {
      const record = await base('Leagues').find(req.params.uuid);
      const leagueStaff = await getPlayerSnippets(record.get('Staff'), base);

      const leagueSnippet = {
        name: record.get('Name'),
        logo: '',
        leagueStaff,
        uuid: record.get('uuid'),
      };
      if (record.get('Logo') !== undefined)
        leagueSnippet.logo = record.get('Logo')[0].url;
      else
        leagueSnippet.logo =
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png';
      res.send(leagueSnippet);
    });
  },
};
