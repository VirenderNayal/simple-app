import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card, Form, Button, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand='lg' >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> {/* For Hamburger button */}
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Card className='container my-5 p-3'>
          <Row>
            <Col className="px-5" >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" placeholder="Enter Phone Number" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col>
              <Row>
                <Col>1</Col>
                <Col>2</Col>
              </Row>
              <Row>
                <Col>3</Col>
                <Col>4</Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default App;
