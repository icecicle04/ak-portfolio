// import { Component } from "react";
import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";
import verdant from "../assets/images/verdant.png";
import verdantHome from "../assets/images/verdantHome.png";
import bookish from "../assets/images/bookish.png";
import bookishHome from "../assets/images/bookishHome.png";
import dinner from "../assets/images/dinner.png";
import dinnerHome from "../assets/images/dinnerHome.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card col={6} shadow={5} style={{ width: "500px", margin: "auto" }}>
            {/* <CardTitle
            style={{
              color: "black",
              height: "76px",
              background: "ghostwhite",
            }}
          > */}
            {/* <span>
              <img className="verdantLogo" src={verdant} alt="verdant"></img>
            </span> */}
            {/* </CardTitle> */}
            <img className="verdant" alt="verdant logo" src={verdant} />

            <CardText>
              This full-stack app uses the MERN stack and features bootstrap
              styling to provide a streamlined, intuitive UX. The app allows
              users to create a profile which stores a brief personal bio as
              well as any saved plants and plant-related articles. A forum is
              also available to chat with other users.
            </CardText>
            <CardActions border className="projectButton">
              <Button
                className="projectButton"
                href="https://github.com/icecicle04/verdant"
                target="_blank"
                rel="nooperner noreferrer"
                colored
              >
                GitHub
              </Button>
              <Button
                className="projectButton"
                colored
                href="https://verdant-thumbs.herokuapp.com/"
                target="_blank"
                rel="nooperner noreferrer"
              >
                Deployed Site
              </Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card
            col={6}
            shadow={5}
            style={{ minWidth: "450", width: "1000px", margin: "auto" }}
          >
            {/* <CardTitle
            style={{
              color: "black",
              height: "76px",
              background: "ghostwhite",
            }}
          > */}
            {/* <span>
              <img className="verdantLogo" src={verdant} alt="verdant"></img>
            </span> */}
            {/* </CardTitle> */}
            <img
              className="verdantHome"
              alt="verdant home screen"
              src={verdantHome}
            />
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card col={6} shadow={5} style={{ width: "500px", margin: "auto" }}>
            {/* <CardTitle
            style={{
              color: "black",
              height: "76px",
              background: "ghostwhite",
            }}
          > */}
            {/* <span>
              <img className="verdantLogo" src={verdant} alt="verdant"></img>
            </span> */}
            {/* </CardTitle> */}
            <img className="bookish" alt="bookish logo" src={bookish} />

            <CardText>
              This app serves to connect book lovers to other readers who would
              like to participate in a virtual book club experience together.
              Bookish users connect in “clubs”, where they commit to reading a
              specific book within a specified timeframe. Users can find the
              club they want to join by searching for a book by author; once
              found, Bookish will display a list of clubs that are currently
              reading said book. The user can choose to join one of those clubs,
              or start their own. In order to keep users on track to and to
              mimic the cozy, intimate feeling of in-person book clubs,
              discussion groups will be limited to a maximum of 10 users.
            </CardText>
            <CardActions border className="projectButton">
              <Button
                className="projectButton"
                href="https://github.com/icecicle04/bookish"
                target="_blank"
                rel="nooperner noreferrer"
                colored
              >
                GitHub
              </Button>
              <Button
                className="projectButton"
                colored
                href="http://gt-bookish.herokuapp.com/"
                target="_blank"
                rel="nooperner noreferrer"
              >
                Deployed Site
              </Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card
            col={6}
            shadow={5}
            style={{ minWidth: "450", width: "1000px", margin: "auto" }}
          >
            {/* <CardTitle
            style={{
              color: "black",
              height: "76px",
              background: "ghostwhite",
            }}
          > */}
            {/* <span>
              <img className="verdantLogo" src={verdant} alt="verdant"></img>
            </span> */}
            {/* </CardTitle> */}
            <img
              className="bookishHome"
              alt="bookish home screen"
              src={bookishHome}
            />
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card col={6} shadow={5} style={{ width: "500px", margin: "auto" }}>
            {/* <CardTitle
            style={{
              color: "black",
              height: "76px",
              background: "ghostwhite",
            }}
          > */}
            {/* <span>
              <img className="verdantLogo" src={verdant} alt="verdant"></img>
            </span> */}
            {/* </CardTitle> */}
            <img className="dinner" alt="dinner decider logo" src={dinner} />

            <CardText>
              Dinner Decider provides users with a fun, straight-forward
              solution to a universal problem: choosing where (or what!) to eat.
            </CardText>
            <CardActions border className="projectButton">
              <Button
                className="projectButton"
                href="https://github.com/icecicle04/dinner-decider"
                target="_blank"
                rel="nooperner noreferrer"
                colored
              >
                GitHub
              </Button>
              <Button
                className="projectButton"
                colored
                href="https://aimeecesler.github.io/dinner-decider/"
                target="_blank"
                rel="nooperner noreferrer"
              >
                Deployed Site
              </Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card
            col={6}
            shadow={5}
            style={{ minWidth: "450", width: "1000px", margin: "auto" }}
          >
            {/* <CardTitle
            style={{
              color: "black",
              height: "76px",
              background: "ghostwhite",
            }}
          > */}
            {/* <span>
              <img className="verdantLogo" src={verdant} alt="verdant"></img>
            </span> */}
            {/* </CardTitle> */}
            <img
              className="dinnerHome"
              alt="dinner decider home screen"
              src={dinnerHome}
            />
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Verdant - React Based Project</Tab>
          <Tab>Bookish - JavaScript and Handlebars Based Project</Tab>
          <Tab>Dinner Decider - JavaScript Based Project</Tab>
        </Tabs>
        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
