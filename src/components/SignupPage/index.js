import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserContext } from "../../context/user_context";
import {
  SignUpContainer,
  FormContainer,
  Button,
  FormGroup,
} from "./SignupElements";
import Loading from "../Loading";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useUserContext();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(error);
    if (passwordRef.current.value !== passwordConfirmRef.current.value)
      return setError("Passwords do not match");

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push("/");
    } catch (err) {
      console.error(err);
      setError("Failed to create an account");
      setLoading(false);
    }
  };
  return (
    <SignUpContainer>
      {loading ? (
        <Loading />
      ) : (
        <FormContainer>
          <h1>Create an account</h1>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
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

            <FormGroup className="form-group">
              <label htmlFor="password-confirmation">
                Password Confirmation
              </label>
              <input
                ref={passwordConfirmRef}
                type="password"
                placeholder="Confirm Password"
                name="password"
                id="password-conformation"
                required
              />
            </FormGroup>
            <Button disabled={loading} type="submit">
              Sign up <span>&rarr;</span>
            </Button>
          </form>
        </FormContainer>
      )}
    </SignUpContainer>
  );
};

export default SignUp;
