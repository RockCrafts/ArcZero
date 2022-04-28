import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { fetchTeams, getLeagueFromUUID, getTeamByLeague } from './API';
import PlayerPlate from './Components/PlayerPlate';
import TeamPlate from './Components/TeamPlate';
import './Teams.css';

function League() {
  const leagueQuickLookup = {
    recC3IBsAi0Bf8bBU: 'League Zero',
    rece8HkvjvdhkP6aN: 'Flux Cup',
    recQqMIn87FKHAXG0: 'Tournament of Kings Row',
    rechjt97oDfAnsbr8: 'Community Snowball Cup',
    recECYv8TY2ShOl2V: 'Horizon League',
  };

  const [search, setSearch] = useState('');
  const { id } = useParams();
  const league = leagueQuickLookup[id];
  const [leagueLogo, setLeagueLogo] = useState(undefined);
  const [leagueStaff, setLeagueStaff] = useState(undefined);
  const onChangeHandler = (e) => {
    const timeout = setTimeout(() => {
      setSearch(e.target.value);
    }, 450);
  };
  useEffect(() => {
    getLeagueFromUUID(id).then((a) => {
      setLeagueLogo(a.logo);
      console.log(a);
      setLeagueStaff(a.leagueStaff);
    });
  }, []);
  useEffect(() => {
    fetchTeams().then((t) => {
      let out = t.filter(
        (word) =>
          word.league === league &&
          word.name.toLowerCase().includes(search.toLowerCase())
      );
      getTeamByLeague(out).then((e) => {
        setTeamByLeague(e);
      });
    });
  }, [search]);

  const [teamByLeague, setTeamByLeague] = useState(false);
  return (
    <Container className='gen-page text-light' fluid>
      <Container>
        <Row>
          <Col className='p-3' md={12}>
            <center>
              <h1 className='header'>Teams in {league}</h1>
              {leagueLogo && <img src={leagueLogo} width={100} alt='' />}
            </center>
          </Col>
          <Col className='p-3' md={12}>
            <center>
              Staff{leagueStaff && <PlayerPlate playerData={leagueStaff} />}{' '}
            </center>
          </Col>
        </Row>
        <Row className='m-3' md={12}>
          <Form.Control
            onChange={(e) => onChangeHandler(e)}
            type='text'
            label='Search'
            placeholder='Filter Teams'
          />
        </Row>
        <Row>
          <div className=''>
            {teamByLeague ? (
              <center>
                {' '}
                {teamByLeague.map(([key, value]) => {
                  return (
                    <Row>
                      <p />
                      <h1>{key.replace(league, '').trim()}</h1>
                      {<TeamPlate teamData={value} />}
                    </Row>
                  );
                })}{' '}
              </center>
            ) : (
              <center>
                <Spinner animation='border' size='lg' role='status' />
              </center>
            )}
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default League;
