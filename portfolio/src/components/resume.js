// import { Component } from "react";
import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import family2 from "../assets/images/family2.jpg";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={family2} alt="myself" style={{ height: "200px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Ali Khan Mohamed</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
          </Cell>
          <Cell col={8} className="resume-right-col">
            Right Side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
