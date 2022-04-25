import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { fetchPlayers } from './API';
import PlayerPlate from './Components/PlayerPlate';

function Players() {
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetchPlayers().then((e) => {
      const timeout = setTimeout(() => {
        let out = e.filter((word) => word.name.includes(search));
        setPlayerData(out);
      }, 600);
      return () => {
        clearTimeout(timeout);
      };
    });
  }, [search]);
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
                onChange={(e) => setSearch(e.target.value)}
                type='text'
                label='Search'
                placeholder='Filter Players'
              />
            </Form.Group>
          </Form>
        </Row>
        <PlayerPlate playerData={playerData} />
      </Container>
    </Container>
  );
}

export default Players;
