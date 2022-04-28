import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Teams.css';
function TeamPlate({ teamData }) {
  return (
    <>
      {teamData.map((e) => (
        <Col sm={6} md={4} lg={2}>
          <div
            className='team-nameplate m-1'
            style={{
              borderTop: `solid 0.5rem ${e.branding.primary}`,
              background: '#181818',
            }}
          >
            <Link to={'/teams/' + e.uuid}>
              <div className='team-nameplate-name' style={{}}>
                {e.name}
              </div>
              <center>
                <div className='team-nameplate-imgwrapper'>
                  <img
                    className='team-nameplate-img'
                    src={e.branding.logo}
                    alt=''
                  />
                </div>
              </center>
            </Link>
          </div>
        </Col>
      ))}
    </>
  );
}

export default TeamPlate;
