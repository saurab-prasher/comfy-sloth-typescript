import React from "react";
import { Link } from "react-router-dom";
import {
  LoginContainer,
  FormContainer,
  Button,
  FormGroup,
} from "./LoginPageElements";
const index = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <h1>Create account</h1>
        <p>
          Already have an account? <Link to="/idk">Sign in</Link>
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

          <FormGroup className="form-group">
            <label htmlFor="password-confirmation">Password Confirmation</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="password"
              id="password-conformation"
              required
            />
          </FormGroup>
          <Button type="submit">
            Sign up <span>&rarr;</span>
          </Button>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default index;
