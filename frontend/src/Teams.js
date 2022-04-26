import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchTeams, getTeamByLeague } from './API';
import TeamPlate from './Components/TeamPlate';
import './Teams.css';
function Teams() {
  const [search, setSearch] = useState('');
  const onChangeHandler = (e) => {
    const timeout = setTimeout(() => {
      setSearch(e.target.value);
    }, 450);
  };
  useEffect(() => {
    fetchTeams().then((t) => {
      let out = t.filter((word) =>
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
              <h1 className='header'>Teams</h1>
              <h3>View Teams and their players below!</h3>
            </center>
          </Col>
        </Row>
        <Row className='m-3' md={12}>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Control
                onChange={(e) => onChangeHandler(e)}
                type='text'
                label='Search'
                placeholder='Filter Teams'
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <div className=''>
            {teamByLeague ? (
              <center>
                {' '}
                {teamByLeague.map(([key, value]) => {
                  return (
                    <Row>
                      <h1>{key}</h1>
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

export default Teams;
