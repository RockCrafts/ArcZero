import React from 'react';
import { Col } from 'react-bootstrap';
import PlayerPlate from './PlayerPlate';

function TeamRoster({ teamData }) {
  return (
    <div>
      <Col md={12}>
        <p />
        <h3
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ paddingRight: '10px' }}> Manager </div>
          {teamData && <PlayerPlate playerData={teamData.manager} />}
        </h3>
      </Col>
      <Col md={12}>
        <p />
        <h3>Roster</h3>
        {teamData && <PlayerPlate playerData={teamData.roster} />}
      </Col>
      {teamData && teamData.staff && (
        <Col md={12}>
          <p />
          <h3>Staff</h3>
          <PlayerPlate playerData={teamData.staff} />
        </Col>
      )}

      {teamData && teamData.brandArtists && (
        <Col md={12}>
          <p />
          <h3>Brand Designed by</h3>
          <PlayerPlate playerData={teamData.brandArtists} />
        </Col>
      )}
    </div>
  );
}

export default TeamRoster;
