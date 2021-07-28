import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';

import {
  SignUpContainer,
  FormContainer,
  Button,
  FormGroup,
} from './SignupElements';
import Error from '../Error';
import Loading from '../Loading';

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const { handleSubmitSignup, loading, error } = useUserContext();

  return (
    <SignUpContainer>
      {loading ? (
        <Loading />
      ) : (
        <FormContainer>
          {error ? <Error message={error} /> : null}
          <h1>Create an account</h1>
          <p>
            Already have an account? <Link to='/login'>Sign in</Link>
          </p>

          <form
            onSubmit={(e) =>
              handleSubmitSignup(e, emailRef, passwordRef, passwordConfirmRef)
            }
          >
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
            <FormGroup className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                ref={passwordRef}
                placeholder='Enter Password'
                type='password'
                name='password'
                id='password'
                required
              />
            </FormGroup>

            <FormGroup className='form-group'>
              <label htmlFor='password-confirmation'>
                Password Confirmation
              </label>
              <input
                ref={passwordConfirmRef}
                type='password'
                placeholder='Confirm Password'
                name='password'
                id='password-conformation'
                required
              />
            </FormGroup>
            <Button disabled={loading} type='submit'>
              Sign up <span>&rarr;</span>
            </Button>
          </form>
        </FormContainer>
      )}
    </SignUpContainer>
  );
};

export default SignUp;
