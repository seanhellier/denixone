import React, { Component } from "react";
import "./pagescss/Login.css";
import API from "../utils/API";
import {  Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Searchbar from "../components/searchbar";
import Welcomejumbo from "../components/Welcomejumbo";

class Login extends Component {



state = {
  email: "",
  password: ""
};

componentDidMount() {
}

handleInputChange = event => {
const { name, value } = event.target;
this.setState({
  [name]: value
});
};

handleFormSubmit = event => {
event.preventDefault();
if (this.state.email && this.state.password) {
  API.loginUser({
    email: this.state.email,
    password: this.state.password
  })
    .then(res => {
      if(res.status === 200 ){
        this.props.authenticate();
        return <Redirect to="/books" />
      }
    })
    .catch(err => console.log(err));
}
};
 
  render() {
    return (
      <div className="Mapcont">
        <Welcomejumbo />
        <Row>
  <Col size="12">

    <form>
      <Input
        value={this.state.email}
        onChange={this.handleInputChange}
        name="email"
        placeholder="email (required)"
      />
      <Input
        value={this.state.password}
        onChange={this.handleInputChange}
        name="password"
        placeholder="(required)"
        type="password"
      />
      
      <FormBtn
        disabled={!(this.state.email && this.state.password)}
        onClick={this.handleFormSubmit}
      >
          sign in
      </FormBtn>
      <button><a href="/signup">sign up</a></button>
    </form>
  </Col>
  
</Row>

        </div>
    )
    }
  }

export default Login;



// state = {
//   email: "",
//   password: ""
// };

// componentDidMount() {
// }

// handleInputChange = event => {
// const { name, value } = event.target;
// this.setState({
//   [name]: value
// });
// };

// handleFormSubmit = event => {
// event.preventDefault();
// if (this.state.email && this.state.password) {
//   API.loginUser({
//     email: this.state.email,
//     password: this.state.password
//   })
//     .then(res => {
//       if(res.status === 200 ){
//         this.props.authenticate();
//         return <Redirect to="/books" />
//       }
//     })
//     .catch(err => console.log(err));
// }
// };


/* <Container fluid>
<Row>
  <Col size="12">

    <form>
      <Input
        value={this.state.email}
        onChange={this.handleInputChange}
        name="email"
        placeholder="email (required)"
      />
      <Input
        value={this.state.password}
        onChange={this.handleInputChange}
        name="password"
        placeholder="(required)"
        type="password"
      />
      
      <FormBtn
        disabled={!(this.state.email && this.state.password)}
        onClick={this.handleFormSubmit}
      >
          sign in
      </FormBtn>
      <button><a href="/signup">sign up</a></button>
    </form>
  </Col>
  
</Row>

{/* Redirect on authentication */
// {this.props.authenticated ? <Redirect to='/books'/>: <div></div>}
// </Container> */}
