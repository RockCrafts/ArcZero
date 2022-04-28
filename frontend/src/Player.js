import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getPlayerFromUUID } from './API';
import LoadingSpinner from './Components/LoadingSpinner';
import TeamPlateSmall from './Components/TeamPlateSmall';
import './Players.css';
function Player() {
  const navigate = useNavigate();
  let uniqueWins = [];
  const { id } = useParams();
  const [playerData, setPlayerData] = useState(undefined);
  useEffect(() => {
    // setPlayerData(undefined);
    getPlayerFromUUID(id).then((out) => {
      console.log(out);
      if (out === undefined) navigate('/');
      let a = out.playingFor.concat(out.staffFor).concat(out.managed);

      out.combinedTeams = a;
      return setPlayerData(out);
    });
  }, [id]);

  return (
    <Container className='gen-page text-light m-2' fluid>
      {playerData ? (
        <Container>
          {playerData && (
            <Col
              className=' '
              md={12}
              style={{
                borderBottom: `solid 0.25rem var(--accent)`,
              }}
            >
              <div className='playerbar'>
                <div className='playerbar-header'>
                  <div className='player-h1'>
                    {playerData && playerData.name}
                  </div>
                  <Row className='playerbottombar'>
                    <Col
                      style={{
                        textAlign: 'left',
                      }}
                      className='teambar-h2'
                    >
                      {playerData.tags &&
                        playerData.tags.map((tag) => {
                          return <div className='tag'>{tag}</div>;
                        })}
                      {playerData.combinedTeams.map((c) => {
                        if (
                          c.winner &&
                          !uniqueWins.includes(c.name + ' S' + c.season)
                        ) {
                          uniqueWins.push(c.name + ' S' + c.season);
                          return (
                            <div className='tag'>
                              {c.league + ' S' + c.season + ' Winner'}
                            </div>
                          );
                        }
                        return '';
                      })}
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          )}
          {playerData.playingFor.length > 0 && (
            <Row>
              <div className='player-h2'>Player for: </div>
              <TeamPlateSmall teamData={playerData.playingFor} />
            </Row>
          )}
          {playerData.staffFor.length > 0 && (
            <Row>
              <div className='player-h2'>Staff for: </div>
              <TeamPlateSmall teamData={playerData.staffFor} />
            </Row>
          )}
          {playerData.managed.length > 0 && (
            <Row>
              <div className='player-h2'>Managed for: </div>
              <TeamPlateSmall teamData={playerData.managed} />
            </Row>
          )}
          {playerData.brandArtistFor.length > 0 && (
            <Row>
              <div className='player-h2'>Brand Artist for: </div>
              <TeamPlateSmall teamData={playerData.brandArtistFor} />
            </Row>
          )}
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
}

export default Player;
