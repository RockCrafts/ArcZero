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
          <div className=''>
            {teamByLeague ? (<center>  {(
              
              Object.entries(teamByLeague).map(([key, value]) => {
                return (
                  
                  <Row>
                    <h1>{key}</h1>
                    {value.map((e) => (
                     <Col sm={6} md={4} lg={2}>
                      <div 
                        className='team-nameplate m-1'
                        style={{
              
                          borderTop: `solid 0.5rem ${e.branding.secondary}`,
                          background: '#181818',
                        }}
                      >
                        <Link to={e.uuid}>
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
                      </div>
                      </Col>
            
                    ))}
                  </Row>
                
                  
                );
              })
              
            )} </center>): (
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
