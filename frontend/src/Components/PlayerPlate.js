import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

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
        <LoadingSpinner />
      )}
    </div>
  );
}

export default PlayerPlate;
