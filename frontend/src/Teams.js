import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        <Row className='m-3' md={12}>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Control
                type='text'
                label='Search'
                placeholder='Filter Teams'
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <div className='g-2'>
            {teamByLeague ? (
              Object.entries(teamByLeague).map(([key, value]) => {
                return (
                  <Row>
                    <h1>{key}</h1>
                    {value.map((e) => (
                      <Link
                        to={e.uuid}
                        className='team-nameplate m-2'
                        style={{
                          borderTop: `solid 0.5rem ${e.branding.secondary}`,
                          background: '#181818',
                        }}
                      >
                        <div className='team-nameplate-name' style={{}}>
                          {e.name}
                        </div>
                        <center>
                          <div className='team-nameplate-imgwrapper'>
                            <img
                              className='team-nameplate-img'
                              src={e.branding.logo}
                              alt=''
                            />
                          </div>
                        </center>
                      </Link>
                    ))}
                  </Row>
                );
              })
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

export default Teams;
