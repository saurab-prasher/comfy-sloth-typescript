import React, { useRef } from "react";
import { useUserContext } from "../../context/user_context";
import { Link, withRouter } from "react-router-dom";
import Error from "../Error";

import {
  LoginContainer,
  FormContainer,
  Button,
  FormGroup,
} from "./LoginPageElements";
import Loading from "../Loading";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { error, handleSubmitLogin, loading } = useUserContext();

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     setError(null);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(id);
  //   };
  // }, [error]);

  return (
    <LoginContainer>
      {loading ? (
        <Loading />
      ) : (
        <FormContainer>
          {error ? <Error message={error} /> : null}
          <h1>Login to your account</h1>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <p>Test Id: test@test.com | password: 123456 </p>
          <form onSubmit={(e) => handleSubmitLogin(e, emailRef, passwordRef)}>
            <FormGroup className="form-group">
              <label htmlFor="email">Email</label>
              <input
                ref={emailRef}
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
                ref={passwordRef}
                placeholder="Enter Password"
                type="password"
                name="password"
                id="password"
              />
            </FormGroup>
            <FormGroup>
              <Link
                style={{
                  display: "inline-block",
                  margin: "0 auto",
                  fontSize: "1.6rem",
                  color: "#531410",
                  fontWeight: "500",
                  textDecoration: "underline",
                }}
                to="/forgotpassword"
              >
                Forgot Password?
              </Link>
            </FormGroup>

            <Button type="submit">
              Log In <span>&rarr;</span>
            </Button>
          </form>
        </FormContainer>
      )}
    </LoginContainer>
  );
};

export default withRouter(Login);
