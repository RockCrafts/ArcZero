import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingSpinner() {
  return (
    <center>
      <Spinner animation='border' size='lg' role='status' />
    </center>
  );
}

export default LoadingSpinner;
