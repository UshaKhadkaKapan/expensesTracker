import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Expenses Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* dynamically content page */}
      <main className="container wrapper">{children}</main>

      {/* footer */}

      <footer className="bg-dark text-light text-center py-5">
        All right reserved & copyright
      </footer>
    </div>
  );
};

export default Layout;