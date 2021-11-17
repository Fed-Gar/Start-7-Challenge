import React from 'react';

import LogIn from '../LogIn/LogIn';
import Projectolist from '../Projectolist/Projectolist';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LogContainer = () => {

  return (
    <Container fluid>
      <Row>
        <Col className='d-flex align-items-center justify-content-center'>
          <LogIn />
        </Col>
        <Col>
          <Projectolist />
        </Col>
      </Row>
    </Container>
  );
};

export default LogContainer;