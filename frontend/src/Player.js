import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getPlayerFromUUID } from './API';
import LoadingSpinner from './Components/LoadingSpinner';
import TeamPlateSmall from './Components/TeamPlateSmall';
import './Players.css';
function Player() {
  const { id } = useParams();
  const [playerData, setPlayerData] = useState(undefined);
  useEffect(() => {
    // setPlayerData(undefined);
    getPlayerFromUUID(id).then((out) => setPlayerData(out));
  }, [id]);

  return (
    <Container className='gen-page text-light m-2' fluid>
      {playerData ? (
        <Container>
          {playerData && (
            <Col
              className=' '
              md={12}
              style={{
                borderBottom: `solid 0.25rem var(--accent)`,
              }}
            >
              <div className='playerbar'>
                <div className='playerbar-header'>
                  <div className='player-h1'>
                    {playerData && playerData.name}
                  </div>
                  <Row className='playerbottombar'>
                    <Col md='auto' className='teambar-h2'></Col>
                  </Row>
                </div>
              </div>
            </Col>
          )}
          {playerData.playingFor.length > 0 && (
            <Row>
              <div className='player-h2'>Player for: </div>
              <TeamPlateSmall teamData={playerData.playingFor} />
            </Row>
          )}
          {playerData.staffFor.length > 0 && (
            <Row>
              <div className='player-h2'>Staff for: </div>
              <TeamPlateSmall teamData={playerData.staffFor} />
            </Row>
          )}
          {playerData.managed.length > 0 && (
            <Row>
              <div className='player-h2'>Managed for: </div>
              <TeamPlateSmall teamData={playerData.managed} />
            </Row>
          )}
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
}

export default Player;
