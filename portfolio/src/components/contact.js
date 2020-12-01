// import { Component } from "react";
import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent, Button } from "react-mdl";
import sideMe from "../assets/images/sideMe.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ali Khan Mohamed</h2>
            <img src={sideMe} alt="avatar" style={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              My name is Ali and I am currently a full stack web developer
              looking to leverage my prior analyst and financial experience to
              build enhanced applications on the web. I have recently earned a
              certificate in full stack development from The Georgia Institute
              of Technology.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (404) 933-7270
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px" }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    Ali.Khan4990@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px" }}>
                    <a
                      href="https://www.linkedin.com/in/alikhan04/"
                      target="_blank"
                      rel="nooperner noreferrer"
                      style={{ color: "#004e92" }}
                    >
                      <i className="fa fa-linkedin-square" aria-hidden="true" />{" "}
                      LinkedIn
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
