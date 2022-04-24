import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RelatedTeams({ teamData, setSelectedTab }) {
  return (
    <div>
      <Col md={12}>
        <h1 className='header'>Teams</h1>
        <br />
        {teamData.relatedTeams &&
          teamData.relatedTeams.map((element) => {
            return (
              <Link to={'/teams/' + element.uuid}>
                <div
                  className='teambar-h2'
                  style={{
                    borderTop: `3px solid ${element.branding.primary}`,
                    display: 'inline',
                    background: '#181818',
                    padding: '2rem 1rem',
                    margin: '0.5rem',
                    color: element.branding.primary,
                  }}
                >
                  {element.name} S{element.season} ({element.league})
                </div>
              </Link>
            );
          })}
      </Col>
    </div>
  );
}

export default RelatedTeams;
