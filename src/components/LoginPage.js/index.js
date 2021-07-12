import React, { useRef, useState } from "react";
import { useUserContext } from "../../context/user_context";
import { Link, useHistory } from "react-router-dom";
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

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useUserContext();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(error);
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push("/");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  };

  return (
    <LoginContainer>
      {loading ? (
        <Loading />
      ) : (
        <FormContainer>
          <h1>Login to your account</h1>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <form onSubmit={handleSubmit}>
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
                required
              />
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

export default Login;
