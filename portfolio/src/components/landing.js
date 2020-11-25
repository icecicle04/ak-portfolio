import { Component } from "react";
import React from "react";
import { Grid, Cell, Card } from "react-mdl";
import family2 from "../assets/images/family2.jpg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landingGrid">
          <Cell className="socialTwo" col={6}>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                {" "}
                HTML/CSS | Bootstrap | Javascript | React | React Native |
                MongoDB | NodeJS | Express{" "}
              </p>
              <div className="social-links">
                {/* linkedIn */}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="nooperner noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                {/* GitHub */}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="nooperner noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
                {/* Gmail */}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="nooperner noreferrer"
                >
                  <i className="fa fa-envelope-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
          <Card col={6} shadow={6} style={{ width: "500px", margin: "auto" }}>
            <img src={family2} alt="me" className="profileImage" />
          </Card>
        </Grid>
      </div>
    );
  }
}

export default Landing;
