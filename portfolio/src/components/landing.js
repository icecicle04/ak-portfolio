import { Component } from "react";
import React from "react";
import { Grid, Cell, Card } from "react-mdl";
import family2 from "../assets/images/family2.jpg";
import sideMe from "../assets/images/sideMe.png";
import suit from "../assets/images/suit.jpg";
import Carousel from "react-bootstrap/Carousel";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landingGrid">
          <Cell className="socialTwo" col={4}>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                {" "}
                HTML/CSS | React | Javascript | Bootstrap | React Native |
                MongoDB | NodeJS | Express{" "}
              </p>
              <div className="social-links">
                {/* linkedIn */}
                <a
                  href="https://www.linkedin.com/in/alikhan04/"
                  target="_blank"
                  rel="nooperner noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/icecicle04"
                  target="_blank"
                  rel="nooperner noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
                {/* Gmail */}
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=ali.khan4990@gmail.com"
                  target="_blank"
                  rel="nooperner noreferrer"
                >
                  <i className="fa fa-envelope-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
          <Cell col={8} className="carouselCell">
            {/* <Card
              shadow={6}
              style={{
                width: "750px",
                height: "500px",
                margin: "auto",
              }} */}

            <Carousel>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={suit} alt="First slide" />
                <Carousel.Caption>
                  <h1
                    className="carouselCaption"
                    style={{
                      textAlign: "left",
                      fontSize: "55px",
                      color: "white",
                    }}
                  >
                    Hi! I'm Ali
                  </h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-50" src={sideMe} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={family2}
                  alt="me in a suit"
                />
              </Carousel.Item>
            </Carousel>
            {/* </Card> */}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
