import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { addEmail, showMatchnProfile } from "./actions/index";


function mapDispatchToProps(dispatch) {  //updates the store 
    return {
        addEmail: email => dispatch(addEmail(email)), //getting the reducer and email variable to it
        showMatchnProfile: isActive => dispatch(showMatchnProfile(isActive))
    };
}

function mapStoreToProps(store) {  // takes store as a parameter and we set it to a variable called isActive
    return {
        isActive: store.isActive
    }

}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // state gets updated here
            email: '',
            password: '',
            isActive: false
        };
        this.submitForm = this.submitForm.bind(this);  //allows you to transfer to a new page once button is clicked
        this.handleChange = this.handleChange.bind(this); //when functions are passed, we have to bind 'this'

    }

    handleChange(event) {   //sets state variables
        this.setState({
            [event.target.name]: event.target.value  //selecting variable by name, and its setting it by getting value from user input. used for email and password.
        });
        console.log(this.state);
    }


    //this is to go to profile when clicking on SUBMIT BUTTON
    submitForm = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.addEmail(email);

        //This is for match button in navbar
        let active = !this.props.isActive;
        this.props.showMatchnProfile(active);


        console.log("from login-email: " + email);
        console.log("from login-password: " + password);

        this.props.history.push('/Profile'); // <--- The page you want to redirect your user to.
    }

    render() {
        return (
            <div>
                <section className="Login">
                    <h3 id="login">Log In</h3>
                    <br></br><br></br>
                    <Form onSubmit={this.submitForm.bind(this)}>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" name="email"
                                    placeholder="JohnSmith@gmail.com" required
                                    onChange={this.handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword" >
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" name="password"
                                    placeholder="Password" required onChange={this.handleChange} /> 
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long and must not contain
                                    spaces, special characters, or emoji.
                                </Form.Text>
                            </Col>
                            <br></br> <br></br> 

                            <Col>
                                <Button variant="secondary" type="submit">
                                    Log in
                                </Button>

                            </Col>
                        </Form.Group>
                    </Form>
                    <br></br><br></br>
                </section>
            </div>
        );
    }
}


const LoginForm = connect(mapStoreToProps, mapDispatchToProps)(Login); 


export default withRouter(LoginForm);

