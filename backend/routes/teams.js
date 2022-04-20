module.exports = function (app, base) {
  app.get('/teams', async (req, res) => {
    let listOfTeams = [];
    const records = await base('Teams').select().all();
    await Promise.all(
      records.map(async function (record) {
        let league = '';
        let leagueRecord = await base('Leagues').find(record.get('League')[0]);
        league = leagueRecord.get('Name');
        const teamSnippet = {
          name: record.get('Name'),
          uuid: record.get('uuid'),
          season: record.get('Season'),
          league: league,
          manager: record.get('Manager'),
          branding: {
            primary: record.get('PrimaryColor'),
            secondary: record.get('SecondaryColor'),
            logo: record.get('Logo'),
          },
        };
        if (record.get('Logo'))
          teamSnippet.branding.logo = record.get('Logo')[0].url;
        listOfTeams.push(teamSnippet);
      })
    );
    await listOfTeams.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    res.send(listOfTeams);
  });
};
