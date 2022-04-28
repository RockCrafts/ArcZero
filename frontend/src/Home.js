import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PlayerPlate from './Components/PlayerPlate';

function Home() {
  return (
    <Container className='gen-page text-light' fluid>
      <Container>
        <Row>
          <Col className='p-3' md={12}>
            <center>
              <h1 className='header'>Welcome to ArcZero</h1>
              {/* <h3>Created by RockCrafts</h3> */}
            </center>
          </Col>
        </Row>
        <Row>
          <div className='g-2'>
            <Col md={12} className='home-topbox'>
              <h1>What is ArcZero?</h1>
              ArcZero is a database for archiving teams, rosters, matches, and
              more. Currently, ArcZero supports the following communities:
              League Zero, Flux Cup, Tournament of Kings Row, Community Snowball
              Cup, and Horizon League.
              <p />
              If you would like to update your player page or make a correction
              to a page, contact poofa#2155 or RockCrafts#1981 on discord.
              <p />
              Thank you to Solomon and the heavy inspiration from{' '}
              <a href='https://slmn.gg'>slmn.gg</a>. ArcZero is heavily based
              off of Solomon's website and we thank him for giving this
              opportunity to bring something like so to a different community.
              <p />
              Created by: <br />
              RockCrafts - Developer <br />
              Poofa - Project and Data lead <br />
              Kory, Crystaal, Chromed, Kernmaster and Frogman - Data Team <br />
              <p />
              {/* <PlayerPlate
                playerData={[
                  { name: 'RockCrafts', uuid: 'recv6tBD56l2aJV5A' },
                  { name: 'poofa', uuid: 'recqnS0lBMgOdiqtX' },
                  { name: 'Crystaal', uuid: 'recc1DxeClgA83OKD' },
                  { name: 'Kernmaster', uuid: 'recOGha91JnCAQWJT' },
                  { name: 'Chromed', uuid: 'rec7CeZiFiudrtTcf' },
                  { name: 'FROGMAN', uuid: 'recWQocXmfslsproM' },
                  { name: 'Kory', uuid: 'reco7XskeGv3elcZQ' },
                ]}
              /> */}
            </Col>
            with help from sbt, Mani, and coughdrop! <p /> We know there are
            things that are inaccurate, and we will try and fix them as time
            goes on!
            <Col md={12}>
              <center>
                <h2 className='header'>Select a League!</h2>
              </center>
            </Col>
          </div>
        </Row>
        <Row>
          <Col>
            <Link to='/league/rece8HkvjvdhkP6aN'>
              <div className='leaguelogos'>
                <img
                  src='https://cdn.discordapp.com/attachments/965626344635498557/968638291220000819/Flux_Cup_1.png'
                  alt=''
                />
              </div>
            </Link>
          </Col>
          <Col>
            <Link to='/league/recQqMIn87FKHAXG0'>
              <div className='leaguelogos'>
                <img
                  src='https://cdn.discordapp.com/attachments/965626344635498557/968643356508971088/ToKR_Logo.png'
                  alt=''
                />
              </div>
            </Link>
          </Col>
          <Col>
            <Link to='/league/recC3IBsAi0Bf8bBU'>
              <div className='leaguelogos'>
                <img
                  src='https://cdn.discordapp.com/attachments/965626344635498557/968638039020675082/unknown.png'
                  alt=''
                />
              </div>
            </Link>
          </Col>
          <Col>
            <Link to='/league/rechjt97oDfAnsbr8'>
              <div className='leaguelogos'>
                <img
                  src='https://cdn.discordapp.com/attachments/965626344635498557/968720356510670848/gotem.png'
                  alt=''
                />
              </div>
            </Link>
          </Col>

          <Col>
            <Link to='/league/recECYv8TY2ShOl2V'>
              <div className='leaguelogos'>
                <img
                  src='https://cdn.discordapp.com/attachments/965626344635498557/969077405639643196/Untitled_drawing_1.png'
                  alt=''
                />
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
