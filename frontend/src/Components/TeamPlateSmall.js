import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Teams.css';
function TeamPlateSmall({ teamData }) {
  return (
    <Row>
      <div>
        {' '}
        {teamData &&
          teamData.map((element) => {
            return (
              <Link key={element.uuid} to={'/teams/' + element.uuid}>
                <div
                  className='team-plate-small'
                  style={{
                    borderTop: `3px solid ${element.branding.primary}`,
                  }}
                >
                  <img src={element.branding.logo} alt='' /> {element.name} S
                  {element.season} ({element.league})
                </div>
              </Link>
            );
          })}
      </div>
    </Row>
  );
}

export default TeamPlateSmall;
