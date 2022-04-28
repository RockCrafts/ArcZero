import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getTeamFromUUID } from './API';
import LoadingSpinner from './Components/LoadingSpinner';
import RelatedTeams from './Components/RelatedTeams';
import TeamRoster from './Components/TeamRoster';
import './Teams.css';
function Team() {
  const { id } = useParams();
  const naviagate = useNavigate();
  const [teamData, setTeamData] = useState(undefined);
  const [selectedTab, setSelectedTab] = useState(1);
  // const [secti]
  useEffect(() => {
    setSelectedTab(1);
    setTeamData(undefined);
    getTeamFromUUID(id).then((out) => {
      if (out.length === 0) return naviagate('/');
      else setTeamData(out);
    });
  }, [id]);

  return (
    <Container className='gen-page text-light m-2' fluid>
      {teamData ? (
        <Container>
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
                    <Col md='auto' className='teambar-h2'>
                      {teamData && teamData.winner ? 'Winner' : ''}
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          )}

          <p />
          <div className='team-section-selector'>
            <Row>
              <Col md={4}>
                <button
                  onClick={() => setSelectedTab(1)}
                  style={{
                    color: selectedTab === 1 && 'var(--accent)',
                  }}
                >
                  Roster {'&'} Management
                </button>
              </Col>
              <Col md={4}>
                <button
                  onClick={() => setSelectedTab(0)}
                  style={{
                    color: selectedTab === 0 && 'var(--accent)',
                  }}
                >
                  Games
                </button>
              </Col>
              <Col md={4}>
                <button
                  onClick={() => setSelectedTab(2)}
                  style={{
                    color: selectedTab === 2 && 'var(--accent)',
                  }}
                >
                  Related Teams
                </button>
              </Col>
            </Row>
          </div>
          <br />
          {selectedTab === 1 && <TeamRoster teamData={teamData} />}
          {selectedTab === 2 && <RelatedTeams teamData={teamData} />}
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
}

export default Team;
