import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container, Nav,NavDropdown,Form ,FormControl,Button} from 'react-bootstrap';
function NavBar(){
    return(
        <>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/"><img src="https://media.gettyimages.com/vectors/wheat-field-line-icon-vector-id1044854884?k=20&m=1044854884&s=612x612&w=0&h=OvWk0KNdIdQ--ndkF0R8VrwzLaXnRpGHOPSiJtA0WNA=" alt="img" className="img" height={"20px"} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/Fruits">FRUITS</Nav.Link>
        <Nav.Link href="/Vegetables">Vegetables</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
export default NavBar;