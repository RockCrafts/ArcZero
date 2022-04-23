import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Offline() {
  return (
    <Container className='gen-page text-light' fluid>
      <Container className='m-5'>
        <Row>
          <Col md={12}>
            <h1>
              The server seems to be offline, please check back at another time!
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Offline;
