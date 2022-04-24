import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TeamPlateSmall from './TeamPlateSmall';

function RelatedTeams({ teamData, setSelectedTab }) {
  return (
    <div>
      <Col md={12}>
        <h1 className='header'>Teams</h1>
        <br />
        <TeamPlateSmall teamData={teamData.relatedTeams} />
      </Col>
    </div>
  );
}

export default RelatedTeams;
