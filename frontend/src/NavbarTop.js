import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
function NavbarTop() {
  return (
    <div className='site-wrapper'>
      <Navbar className='navbar' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            <div className='navbar-header'>ArcZero</div>
          </Navbar.Brand>
          <Nav className='navbar-tabs me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link active={true} href='/players'>
              Players
            </Nav.Link>
            <Nav.Link href='/teams'>Teams</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
