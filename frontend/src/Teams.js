import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getTeamByLeague } from './API';
import './Teams.css';
function Teams() {
  // const teamsData = [
  //   {
  //     name: 'Exodus',
  //     branding: {
  //       primary: 'blue',
  //       secondary: 'darkblue',
  //       logo: '',
  //     },
  //     league: 'Flux Cup',
  //     season: 1,
  //   },
  //   {
  //     name: 'Volcanic',
  //     branding: {
  //       primary: 'red',
  //       secondary: 'darkred',
  //       logo: '',
  //     },
  //     league: 'Flux Cup',
  //     season: 1,
  //   },
  //   {
  //     name: 'Soar Academy',
  //     branding: {
  //       primary: 'yellow',
  //       secondary: 'lightblue',
  //       logo: '',
  //     },
  //     league: 'Flux Cup',
  //     season: 1,
  //   },
  // ];
  useEffect(() => {
    getTeamByLeague().then((out) => {
      console.log(out);
      setTeamByLeague(out);
    });
  }, []);

  const [teamByLeague, setTeamByLeague] = useState(false);
  return (
    <Container className='gen-page text-light' fluid>
      <Container>
        <Row>
          <Col className='p-3' md={12}>
            <center>
              <h1>Teams</h1>
              <h3>View Teams and their players below!</h3>
            </center>
          </Col>
        </Row>
        <Row>
          <div className='g-2'>
            {teamByLeague &&
              Object.entries(teamByLeague).map(([key, value]) => {
                return (
                  <Row>
                    <h1>{key}</h1>
                    {value.map((e) => (
                      <Col
                        sm={12}
                        md={6}
                        lg={3}
                        className='team-nameplate mt-3'
                        style={{
                          color: e.branding.secondary,
                          background: e.branding.primary,
                        }}
                      >
                        <h1
                          className='team-nameplate-name'
                          style={{
                            borderTop: `solid 1.2rem ${e.branding.secondary}`,
                          }}
                        >
                          {e.name}
                        </h1>
                        <center>
                          {}
                          <div className='team-nameplate-imgwrapper'>
                            <img
                              className='team-nameplate-img'
                              src={e.branding.logo}
                              alt=''
                            />
                          </div>
                        </center>
                      </Col>
                    ))}
                  </Row>
                );
              })}
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Teams;
