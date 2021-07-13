import React from "react";
import "./error.css";

const Error = ({ message, success }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="error-notice">
          <div className={success ? `oaerror success` : `oaerror danger`}>
            <strong>{message}</strong>
          </div>
          {/* <div className="oaerror warning">
            <strong>Error</strong> - You missed a field, pay attention!
          </div>
          <div className="oaerror info">
            <strong>Error</strong> - Someone already thought of your dumb
            username. Choose another.
          </div>
          <div className="oaerror success">
            <strong>Finally</strong> - Congrats, you figured out how to login.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Error;
