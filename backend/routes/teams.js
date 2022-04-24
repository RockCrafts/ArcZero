const { getPlayerSnippets } = require('./players');

const leagueQuickLookup = {
  recC3IBsAi0Bf8bBU: 'League Zero',
  rece8HkvjvdhkP6aN: 'Flux Cup',
  recQqMIn87FKHAXG0: 'Tornament of Kings Row',
  rechjt97oDfAnsbr8: 'Community Snowball Cup',
};

module.exports = {
  main: function (app, base) {
    app.get('/teams', async (req, res) => {
      let listOfTeams = [];
      const records = await base('Teams').select().all();
      await Promise.all(
        records.map(async function (record) {
          // let league = '';
          // let leagueRecord = await base('Leagues').find(record.get('League')[0]);
          // league = leagueRecord.get('Name');
          let league = leagueQuickLookup[record.get('League')[0]];
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
          else
            teamSnippet.branding.logo =
              'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png';
          listOfTeams.push(teamSnippet);
        })
      );
      await listOfTeams.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      res.send(listOfTeams);
    });
    app.get('/teams/:uuid', async (req, res) => {
      const record = await base('Teams').find(req.params.uuid);
      let league = leagueQuickLookup[record.get('League')[0]];
      console.log(record);
      try {
        let roster = await getPlayerSnippets(record.get('Roster'), base);
        let staff = await getPlayerSnippets(record.get('Staff'), base);
        let manager = await getPlayerSnippets([record.get('Manager')], base)[0];
        let relatedTeams = await this.getTeamSnippets(
          record.get('RelatedTeams'),
          base
        );
        if (!relatedTeams) relatedTeams = '';

        const teamSnippet = {
          name: record.get('Name'),
          uuid: record.get('uuid'),
          roster,
          staff,
          season: record.get('Season'),
          league: league,
          manager,
          division: record.get('Division'),
          relatedTeams,
          branding: {
            primary: record.get('PrimaryColor'),
            secondary: record.get('SecondaryColor'),
            logo: record.get('Logo'),
          },
        };
        if (record.get('Logo'))
          teamSnippet.branding.logo = record.get('Logo')[0].url;
        res.send(teamSnippet);
      } catch {
        res.send('Error');
      }
    });
  },
  getTeamSnippets: async (uuids, base) => {
    let out = [];
    if (!uuids || uuids == '' || uuids == []) return [];

    await Promise.all(
      uuids.map(async (p) => {
        const record = await base('Teams').find(p);
        let league = leagueQuickLookup[record.get('League')[0]];
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
        out.push(teamSnippet);
      })
    );
    return out;
  },
};
