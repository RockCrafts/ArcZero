import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getTeamFromUUID } from './API';
import PlayerPlate from './PlayerPlate';
import './Teams.css';
function Team() {
  const { id } = useParams();
  const [teamData, setTeamData] = useState(undefined);
  useEffect(() => {
    getTeamFromUUID(id).then((out) => setTeamData(out));
  }, []);

  return (
    <Container className='gen-page text-light' fluid>
      <Container>
        <Row>
          {teamData && (
            <Col
              className='m-5 p-2'
              md={12}
              style={{
                borderTop: `solid 0.5rem ${teamData.branding.primary}`,
                background: '#181818',
              }}
            >
              <center className=''>
                <h1>{teamData && teamData.name}</h1>

                <h3>
                  {teamData &&
                    teamData.league +
                      ' S' +
                      teamData.season +
                      ' ' +
                      (teamData.division || '')}
                </h3>
                {teamData && <img src={teamData.branding.logo} height={300} />}
              </center>
            </Col>
          )}
          <Col md={12}>
            <h3>Roster</h3>
            {teamData && <PlayerPlate playerData={teamData.roster} />}
          </Col>
          <Col md={12}>
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
