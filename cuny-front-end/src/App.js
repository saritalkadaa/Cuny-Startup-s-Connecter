import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route,
  Switch, Link,Redirect
} from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Login from "./login";
import Signup from "./signup";
import Profile from "./profile";
import Home from "./home";
import Match from "./match";
import About from "./about";
import { connect } from 'react-redux';



function mapStoreToProps(store){ //sets the state for isActive to what we have in store, which is false
  return {
    isActive: store.isActive
  }
  
}

class App extends Component {
  
  constructor(props) { //creates an instance for the class to include the properties that you need 
    super(props);
      
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar sticky="top" bg="light" variant="light">
             

          <Redirect exact from="/" to="/home" />
              <Navbar.Collapse>
              
                <Nav className="auto">
                  <NavItem eventkey={1} href="/">
                    <Nav.Link as={Link} to="/home" > <Navbar.Brand >
                <img
                  alt=""
                  src="https://cunystartups.com/wp-content/uploads/2019/06/cropped-CS-logo-trans-1.png"
                  width="auto"
                  height="50"
                  className="d-inline-block align-top"
                />{' '}
              </Navbar.Brand></Nav.Link>
                  </NavItem>
                  <NavItem eventkey={3} href="/">
                    <Nav.Link as={Link} to="/about" >About</Nav.Link>
                  </NavItem>
                  <NavItem eventkey={2} href="/">
                    <Nav.Link as={Link} to="/login" >Log In</Nav.Link>
                  </NavItem>
                  <NavItem eventkey={3} href="/">
                    <Nav.Link as={Link} to="/signup" >Sign Up</Nav.Link>
                  </NavItem>
                  
                  {this.props.isActive ?  //if statement that checks if isActive is true, and makes a new link sppear on navbar if it is
                    <NavItem eventkey={4} href="/">
                      <Nav.Link as={Link} to="/profile" >Profile</Nav.Link>
                    </NavItem>
                    : null}

                </Nav>
              </Navbar.Collapse>

            </Navbar>
          </div>

          <div>
            <Switch> 
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/match">
                <Match />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>

        </Router>
      </div>
    );
  }
}
const AppForm = connect(mapStoreToProps)(App); //where the function mapStoreToProps is used, and where it gets updated 
export default AppForm;
