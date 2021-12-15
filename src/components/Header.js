import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>E-Shop</Navbar.Brand>
            <Nav className="mx-auto">
              <Nav.Item>
                <Nav.Link href="#" className="nav-category">
                  <b>Men</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="nav-category">
                  <b>Women</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="nav-category">
                  <b>Kids</b>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <i className="fas fa-search"></i>
              </Nav.Link>
              <Nav.Link href="#">
                <i className="fas fa-shopping-cart"></i>
              </Nav.Link>
              <Nav.Link href="#">
                <i className="far fa-user"></i>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
