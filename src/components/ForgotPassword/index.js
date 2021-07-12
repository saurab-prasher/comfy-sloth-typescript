import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  LoginContainer,
  FormContainer,
  Button,
  FormGroup,
} from "./ForgotPswElements.js";
import Loading from "../Loading";
import { useUserContext } from "../../context/user_context.js";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useUserContext();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(message, error);

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Failed to reset password");
      setLoading(false);
    }
  }

  return (
    <LoginContainer>
      {loading ? (
        <Loading />
      ) : (
        <FormContainer>
          <h1>Password Reset</h1>

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

            <Button type="submit">
              Reset Password <span>&rarr;</span>
            </Button>

            <FormGroup>
              <Link
                style={{
                  display: "inline-block",
                  margin: "0 auto",
                  fontSize: "1.6rem",
                  color: "#531410",
                  fontWeight: "500",
                }}
                to="/login"
              >
                Login here
              </Link>
            </FormGroup>
          </form>
        </FormContainer>
      )}
    </LoginContainer>
  );
};

export default ForgotPassword;
