import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Home() {
  return (
    <Container className='gen-page text-light' fluid>
      <Container>
        <Row>
          <Col className='p-3' md={12}>
            <center>
              <h1>Welcome to ArcZero</h1>
              <h3>Created by Dumb Fucks</h3>
            </center>
          </Col>
        </Row>
        <Row>
          <div className='g-2'>
            <Col md={12}>
              <h1>What is ArcZero?</h1>
            </Col>
            <Col md={12}>
              <h3>Its a thing created by people who are dumb! (fucks)</h3>
            </Col>
            <Col md={12}>
              <h1>Supported Leagues:</h1>
            </Col>
            <Col md={12}></Col>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
