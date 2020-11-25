// import { Component } from "react";
import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import family2 from "../assets/images/family2.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ali Khan Mohamed</h2>
            <img src={family2} alt="avatar" style={{ height: "250px" }} />
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
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (404) 933-7270
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    Ali.Khan4990@gmail.com
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
