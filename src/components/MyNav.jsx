import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNav = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className='rounded-navbar'>
    <Container>
      <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNav;
