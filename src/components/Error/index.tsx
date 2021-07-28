import './error.css';

interface ErrorProps {
  message?: boolean | undefined;
  success?: boolean | undefined;
}

const Error: React.FC<ErrorProps> = ({ message, success }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='error-notice'>
          <div className={success ? `oaerror success` : `oaerror danger`}>
            <strong>{message}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
