import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, ButtonGroup, ButtonToolbar} from "react-bootstrap";
import { withRouter } from 'react-router-dom';


class Signup extends Component {


  submitForm(e) {
    e.preventDefault()
  }
  constructor(props) {
    super(props);
    this.state = { //gets updated here
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) { //when event happens, we look at event value and set the state
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password, firstName, lastName } = this.state;
    await axios.post(
      'https://jrkjxx158g.execute-api.us-east-1.amazonaws.com/dev/users',  //POST URL 
      { email: `${email}`, password: `${password}`, firstName: `${firstName}`, lastName: `${lastName}` }

    )

    this.props.history.push('/profile'); //The page you want to redirect your user to.
  }



  render() {
    return (
      <div className="background">
        <section className="Signup">
          <h3 id="signup">Sign Up</h3>
          <br></br><br></br>
          {/* handlesubmit takes the data and posts to web page */}
          <Form onSubmit={this.handleSubmit} > 

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} value={this.state.email} required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} required />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers, and
                must not contain spaces, special characters, or emoji.
              </Form.Text>

            </Form.Group>


            <Form.Row>
              <Form.Group as={Col} controlId="firstName" required>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="John" onChange={this.handleChange} value={this.state.text} required />
              </Form.Group>

              <Form.Group as={Col} controlId="lastName" required>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Smith" onChange={this.handleChange} value={this.state.text} required />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridState1" >
                <Form.Label>College</Form.Label>
                <Form.Control as="select" defaultValue="Choose..." required>
                  <option>Choose...</option>
                  <option>Brooklyn</option>
                  <option>Lehman</option>
                  <option>John Jay</option>
                  <option>Hunter</option>
                  <option>Baruch</option>
                  <option>Queens</option>
                  <option>Medgar Evers</option>
                  <option>City College</option>
                  <option>College of Staten Island</option>
                  <option>City Tech</option>
                  <option>BMCC</option>
                  <option>Bronx</option>
                  <option>York College</option>
                  <option>Queensborough</option>
                  <option>Kingsborough</option>
                  <option>Hostos</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState2" >
                <Form.Label>College Type</Form.Label>
                <Form.Control as="select" defaultValue="Choose..." required>
                  <option>Choose...</option>
                  <option>Community College</option>
                  <option>Senior College</option>
                  <option>Graduate School</option>
                </Form.Control>
              </Form.Group>
            </Form.Row><br></br>

            <h6>I am a:</h6> <br></br>
            <div className="form-row">
              <div className="form-group col-md-4" >

                <label htmlFor="developer">Developer</label>

                <img src="https://static.thenounproject.com/png/962492-200.png" width="auto" height="50px" alt="" />

                <input type="radio" id="developer" name="search"></input>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="designer">Designer</label>
                <img src="https://cdn2.iconfinder.com/data/icons/computer-63/100/People-Desk-02-512.png" width="auto" height="50px" alt="" />

                <input type="radio" id="designer" name="search"></input>

              </div>
              <div className="form-group col-md-4">
                <label htmlFor="marketer">Marketer</label>
                <img src="https://static.thenounproject.com/png/693589-200.png" width="auto" height="50px" alt="" />

                <input type="radio" id="marketer" name="search"></input>

              </div>

            </div><br></br><br></br>

            <Row className="justify-content-md-center">
              <Col md="auto">
                <h6>Year:</h6>
                <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups" required>
                  <ButtonGroup className="mr-2" aria-label="First group">
                    <Button variant="secondary">1</Button>{' '}
                    <Button variant="secondary">2</Button>{' '}
                    <Button variant="secondary">3</Button>{' '}
                    <Button variant="secondary">4</Button>{' '}
                    <Button variant="secondary">5</Button>{' '}
                    <Button variant="secondary">6</Button>
                  </ButtonGroup>
                </ButtonToolbar>

              </Col>
            </Row>

            <br></br><br></br>

            <fieldset>

              <Row>

                <Form.Label as="legend">
                  <h6>I'm good at:</h6>
                </Form.Label><br></br>

                <Col>
                  <Form.Check inline
                    type="checkbox"
                    label="Coding"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                </Col>

                {['radio'].map((type) => (
                  <div key={`-${type}`} className="mb-3">
                    <Form.Check label="Beginner" type={type} id={`-${type}-Beginner1`} />
                    <Form.Check label="Intermediate" type={type} id={`-${type}-Intermidiate1`} />
                    <Form.Check label="Pro" type={type} id={`-${type}-Pro1`} />

                  </div>
                ))}

                <Col>
                  <Form.Check inline
                    type="checkbox"
                    label="Design"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Col>

                {['radio'].map((type) => (
                  <div key={`-${type}`} className="mb-3">
                    <Form.Check label="Beginner" type={type} id={`-${type}-Beginner2`} />
                    <Form.Check label="Intermediate" type={type} id={`-${type}-Intermidiate2`} />
                    <Form.Check label="Pro" type={type} id={`-${type}-Pro2`} />

                  </div>
                ))}

                <Col>
                  <Form.Check inline
                    type="checkbox"
                    label="Marketing"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>

                {['radio'].map((type) => (
                  <div key={`-${type}`} className="mb-3">
                    <Form.Check label="Beginner" type={type} id={`-${type}-Beginner3`} />
                    <Form.Check label="Intermediate" type={type} id={`-${type}-Intermidiate3`} />
                    <Form.Check label="Pro" type={type} id={`-${type}-Pro3`} />

                  </div>
                ))}

                <Col>
                  <Form.Check inline
                    type="checkbox"
                    label="Business"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios4"
                  />
                </Col>

                {['radio'].map((type) => (
                  <div key={`-${type}`} className="mb-3">
                    <Form.Check label="Beginner" type={type} id={`-${type}-Beginner4`} />
                    <Form.Check label="Intermediate" type={type} id={`-${type}-Intermidiate4`} />
                    <Form.Check label="Pro" type={type} id={`-${type}-Pro4`} />

                  </div>
                ))}

              </Row>

            </fieldset>



            <br></br>

            <h6>I've got proof:</h6>
            <Form.Group as={Col} controlId="formGridLinkedin" >
              <Form.Label>Linkedin</Form.Label>
              <Form.Control type="text" placeholder="www.linkedin.com/in/JohnSmith/" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridGithub">
              <Form.Label>GitHub</Form.Label>
              <Form.Control type="text" placeholder="github.com/JohnSmith" />
            </Form.Group>


            <br></br><br></br>


            <h6>My goal is:</h6> <br></br>
            <div className="form-row">
              <div className="form-group col-md-6" required>

                <input type="radio" className="compete" name="purpose"></input>
                <label htmlFor="compete">I'm a free agent</label>

              </div>
              <div className="form-group col-md-6">

                <input type="radio" className="compete" name="purpose"></input>
                <label htmlFor="compete">We want to complete our team</label>

              </div>

            </div><br></br><br></br>


            <Button variant="secondary" type="submit" onClick={this.onSubmit} onSubmit={this.handleSubmit} >
              Submit
            </Button>
          </Form>
          <br></br>
        </section>
      </div>
    );
  }
}

export default withRouter(Signup);
