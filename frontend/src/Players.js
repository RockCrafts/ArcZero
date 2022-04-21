import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchPlayers } from './API';

function Players() {
  useEffect(() => {
    fetchPlayers().then((e) => {
      console.log(e);
      setPlayerData(e);
    });
  }, []);
  const [playerData, setPlayerData] = useState(undefined);
  return (
    <Container className='gen-page text-light' fluid>
      <Container>
        <Row>
          <Col className='p-3' md={12}>
            <center>
              <h1 className='header'>Players</h1>
            </center>
          </Col>
        </Row>
        <Row className='m-3' md={12}>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Control
                type='text'
                label='Search'
                placeholder='Filter Players'
              />
            </Form.Group>
          </Form>
        </Row>
        {playerData && (
          <Row>
            <div className='g-2'>
              {playerData.map((player) => {
                return (
                  <Link key={player.uuid} to={`${player.uuid}/`}>
                    <div className='player-nameplate'>{player.name}</div>
                  </Link>
                );
              })}
            </div>
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Players;
