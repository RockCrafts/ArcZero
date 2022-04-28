import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { fetchPlayers } from './API';
import PlayerPlate from './Components/PlayerPlate';

function Players() {
  const [search, setSearch] = useState('');
  const onChangeHandler = (e) => {
    const timeout = setTimeout(() => {
      setSearch(e.target.value);
    }, 450);
  };
  useEffect(() => {
    fetchPlayers().then((e) => {
      let out = e.filter((word) =>
        word.name.toLowerCase().includes(search.toLowerCase())
      );
      setPlayerData(out);
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
          <Form.Control
            onChange={(e) => onChangeHandler(e)}
            type='text'
            label='Search'
            placeholder='Filter Players'
          />
        </Row>
        <PlayerPlate playerData={playerData} />
      </Container>
    </Container>
  );
}

export default Players;
