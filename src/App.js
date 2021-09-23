import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import TimePicker from "react-bootstrap-time-picker";

function App() {
  const [data, setData] = useState({
    phone: "",
    email: "",
    invalidEmail: false,
    invalidPhone: false,
  });
  const [time, setTime] = useState({
    start: 28800,
    end: 32400,
    error: "",
  });

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const setInput = (event) => {
    const { name, value } = event.target;

    setData(previousData => {
      return {
        ...previousData,
        [name]: value,
      }
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    setData(previousData => {
      return {
        ...previousData,
        invalidPhone: (data.phone.length > 10 || isNaN(data.phone)) ? true : false,
        invalidEmail: !validateEmail(data.email),
      }
    });

    setTime(d => {
      return {
        ...d,
        error: (time.start >= time.end) ? "Start time can't be greater than or equal to end time." : "",
      }
    });

  }

  console.log(data);
  console.log(time);

  return (
    <>
      <Navbar bg="primary" variant="dark" expand='lg' >
        <Container>
          <Navbar.Brand href="#home" className="order-md-0 mx-auto order-1">Navbar</Navbar.Brand>
          <Navbar.Toggle className="order-md-0 order-0" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="order-md-0 order-1"> {/* For Hamburger button */}
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Card className="p-3 mt-5">
          <Row>
            <Col md>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text>+91</InputGroup.Text>
                    <Form.Control
                      required type="tel"
                      placeholder="98XXXXXXXX"
                      onChange={setInput}
                      name="phone"
                      value={data.phone}
                      isInvalid={data.invalidPhone}
                    />
                    <Form.Control.Feedback type="invalid">Please enter a valid number.</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="example@mail.com"
                    onChange={setInput}
                    value={data.email}
                    name="email"
                    isInvalid={data.invalidEmail}
                  />
                  <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Row className="my-3">
                    <Col>
                      <Form.Label>Start Time</Form.Label>
                      <TimePicker
                        start="8:00"
                        end="22:00"
                        step={60}
                        name="start"
                        onChange={(e) => { setTime(d => { return { ...d, start: e } }) }}
                        value={time.start}
                        isInvalid={time.error}
                      />
                    </Col>
                    <Col>
                      <Form.Label>End Time</Form.Label>
                      <TimePicker
                        initialValue="9:00"
                        start="8:00"
                        end="22:00"
                        step={60}
                        name="endTime"
                        onChange={(e) => { setTime(d => { return { ...d, end: e } }) }}
                        value={time.end}
                        isInvalid={time.error}
                      />
                    </Col>
                    <div className="text-danger" type="invalid">{time.error}</div>
                  </Row>
                </Form.Group>

                <Button className="mb-3" variant="primary" type="submit"> Submit </Button>
              </Form>
            </Col>
            <Col md>
              <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Col>
                    <Card>
                      <Card.Img variant="top" src="https://picsum.photos/200/150?dark" width="200px" height="150px" />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default App;
