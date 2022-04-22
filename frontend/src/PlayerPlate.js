import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PlayerPlate({ playerData }) {
  return (
    <div>
      {playerData ? (
        <Row>
          <div className='g-2'>
            {playerData.map((player) => {
              return (
                <Link key={player.uuid} to={`/players/${player.uuid}/`}>
                  <div className='player-nameplate'>{player.name}</div>
                </Link>
              );
            })}
          </div>
        </Row>
      ) : (
        <center>
          {' '}
          <Spinner animation='border' size='lg' role='status' />
        </center>
      )}
    </div>
  );
}

export default PlayerPlate;
