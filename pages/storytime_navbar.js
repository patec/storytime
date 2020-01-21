import { Navbar, Nav } from 'react-bootstrap';

const StorytimeNavbar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Story Time</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/submit_link">Submit Link</Nav.Link>
        <Nav.Link href="/stream">Stream</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default StorytimeNavbar;
