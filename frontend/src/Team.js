import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getTeamFromUUID } from './API';
import PlayerPlate from './PlayerPlate';
import './Teams.css';
function Team() {
  const { id } = useParams();
  const [teamData, setTeamData] = useState(undefined);
  // const [secti]
  useEffect(() => {
    getTeamFromUUID(id).then((out) => setTeamData(out));
  }, []);

  return (
    <Container className='gen-page text-light m-2' fluid>
      <Container>
        <Row>
          {teamData && (
            <Col
              className=' '
              md={12}
              style={{
                borderBottom: `solid 0.25rem ${teamData.branding.primary}`,
              }}
            >
              <div className='teambar'>
                {teamData && (
                  <div className='teambar-imgwrapper'>
                    <img
                      className='teambar-img'
                      src={teamData.branding.logo}
                      alt={''}
                    />
                  </div>
                )}
                <div className='teambar-header'>
                  <div className='teambar-h1'>{teamData && teamData.name}</div>
                  <Row className='teambottombar'>
                    <Col md='auto' className='teambar-h2'>
                      {teamData && 'S' + teamData.season}
                    </Col>
                    <Col md='auto' className='teambar-h2'>
                      {teamData && teamData.league}
                    </Col>
                    <Col md='auto' className='teambar-h2'>
                      {teamData && teamData.division}
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          )}
          <Col md={12}>
            <p />
            <div className='team-section-selector'>
              <button>Games</button>
              <button>Roster {'&'} Management</button>
              <button>Related Teams</button>
            </div>
          </Col>
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
        </Row>
      </Container>
    </Container>
  );
}

export default Team;
