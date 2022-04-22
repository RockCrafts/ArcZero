import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
function NavbarTop(currPage) {
  return (
    <div className='site-wrapper'>
      <Navbar className='navbar' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            <div className='navbar-header'>{}</div>
          </Navbar.Brand>
          <Nav className='navbar-tabs me-auto'>
            <Nav.Link active={window.location.pathname === '/'} href='/'>
              Home
            </Nav.Link>
            <Nav.Link
              active={window.location.pathname === '/players'}
              href='/players'
            >
              Players
            </Nav.Link>
            <Nav.Link
              active={window.location.pathname === '/teams'}
              href='/teams'
            >
              Teams
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
