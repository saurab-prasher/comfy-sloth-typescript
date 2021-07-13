import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
  height: 85vh;
  .page_404 {
    padding: 4rem;
    background: #fff;
    max-width: 128rem;
    margin: 0 auto;
    text-align: center;
    img {
      width: 100%;
    }
  }

  .four_zero_four_bg {
    background-image: url("https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif");
    height: 40rem;
    background-position: center;
    background-repeat: no-repeat;
  }

  .four_zero_four_bg h1 {
    font-size: 8rem;
  }

  .four_zero_four_bg h3 {
    font-size: 8rem;
  }

  .link_404 {
    color: #fff;
    padding: 1rem 2rem;
    background: #531410;
    margin: 2rem 0;
    font-size: 1.6rem;
    border-radius: 3px;
    display: inline-block;
  }
  .contant_box_404 {
    margin-top: -3rem;

    h3 {
      font-size: 3rem;
      /* margin: 2rem 0; */
    }
    p {
      font-size: 1.8rem;
    }
  }
`;
const Error = () => {
  return (
    <ErrorContainer>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <Link to="/" className="link_404">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorContainer>
  );
};

export default Error;
