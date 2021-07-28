import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Error from '../Error';

import {
  LoginContainer,
  FormContainer,
  Button,
  FormGroup,
} from './ForgotPswElements';

import Loading from '../Loading';
import { useUserContext } from '../../context/userContext.js';

const ForgotPassword = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const { handleResetPassword, error, loading, message } = useUserContext();

  return (
    <LoginContainer>
      {loading ? (
        <Loading />
      ) : (
        <FormContainer>
          {error || message ? (
            <Error success={true} message={error || message} />
          ) : null}
          <h1>Password Reset</h1>

          <form onSubmit={(e) => handleResetPassword(e, emailRef)}>
            <FormGroup className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                ref={emailRef}
                placeholder='Enter Email'
                type='email'
                name='email'
                id='email'
                required
              />
            </FormGroup>

            <Button type='submit'>
              Reset Password <span>&rarr;</span>
            </Button>

            <FormGroup>
              <Link
                style={{
                  display: 'inline-block',
                  margin: '0 auto',
                  fontSize: '1.6rem',
                  color: '#531410',
                  fontWeight: 'bolder',
                }}
                to='/login'
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
