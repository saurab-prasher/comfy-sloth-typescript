import React from "react";
import { Link } from "react-router-dom";
import {
  LoginContainer,
  FormContainer,
  Button,
  FormGroup,
} from "./LoginPageElements";
const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <h1>Login to your account</h1>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
        <form>
          <FormGroup className="form-group">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Email"
              type="email"
              name="email"
              id="email"
              required
            />
          </FormGroup>
          <FormGroup className="form-group">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              id="password"
              required
            />
          </FormGroup>

          <Button type="submit">
            Log In <span>&rarr;</span>
          </Button>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
