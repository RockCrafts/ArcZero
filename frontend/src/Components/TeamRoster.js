import React from 'react';
import { Col } from 'react-bootstrap';
import PlayerPlate from './PlayerPlate';

function TeamRoster({ teamData }) {
  return (
    <div>
      <Col md={12}>
        <p />
        <h3>Roster</h3>
        {teamData && <PlayerPlate playerData={teamData.roster} />}
      </Col>
      <Col md={12}>
        <p />
        <h3>Staff</h3>
        {teamData && teamData.staff !== undefined && (
          <PlayerPlate playerData={teamData.staff} />
        )}
      </Col>
    </div>
  );
}

export default TeamRoster;
