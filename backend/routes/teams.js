const leagueQuickLookup = {
  recC3IBsAi0Bf8bBU: 'League Zero',
  rece8HkvjvdhkP6aN: 'Flux Cup',
  recQqMIn87FKHAXG0: 'Tornament of Kings Row',
  rechjt97oDfAnsbr8: 'Community Snowball Cup',
};

module.exports = function (app, base) {
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
    let roster = [];
    let staff = [];
    await Promise.all(record.get('Roster').map(async p=>{
      const r = await base('Players').find(p)
      const playerSnippet = {
        name: r.get('Name'),
        uuid: r.get('uuid'),
      };
        roster.push(playerSnippet);
    }),
    await record.get('Staff').map(async p=>{
      const r = await base('Players').find(p)
      const playerSnippet = {
        name: r.get('Name'),
        uuid: r.get('uuid'),
      };
        staff.push(playerSnippet);
    }));
    let rm = await base('Players').find(record.get('Manager'));
    let manager = {
    name: rm.get('Name'),
    uuid: rm.get('uuid')
    }
    const teamSnippet = {
      name: record.get('Name'),
      uuid: record.get('uuid'),
      roster,
      staff,
      season: record.get('Season'),
      league: league,
      manager,
      branding: {
        primary: record.get('PrimaryColor'),
        secondary: record.get('SecondaryColor'),
        logo: record.get('Logo'),
      },
    };
    if (record.get('Logo'))
      teamSnippet.branding.logo = record.get('Logo')[0].url;
    res.send(teamSnippet);
  })
};
