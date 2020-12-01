// import { Component } from "react";
import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import sideMe from "../assets/images/sideMe.png";
import suit from "../assets/images/suit.jpg";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={suit}
                alt="myself"
                style={{ height: "325px", width: "400px" }}
              />
            </div>
            <h2 style={{ paddingTop: "1em" }}>Ali Khan Mohamed</h2>
            <h4 style={{ color: "grey" }}>Full Stack Web Developer</h4>
            <hr style={{ borderTop: "3px solid #004e92", width: "50%" }} />
            <p>
              Full stack web developer looking to leverage my prior analyst and
              financial experience to build enhanced applications on the web.
              Recently earned a certificate in full stack development from The
              Georgia Institute of Technology. Developed skills in JavaScript,
              CSS, React.js, Node.js, mysql, Heroku, mongoDB, Express, and
              responsive web design.
            </p>
            <hr style={{ borderTop: "3px solid #004e92", width: "50%" }} />
            <h5>Location</h5>
            <p>Atlanta, GA</p>
            <h5>Phone</h5>
            <p>(404) 933-7270</p>
            <h5>Email</h5>
            <p>Ali.Khan4990@gmail.com</p>
            <hr style={{ borderTop: "3px solid #004e92", width: "50%" }} />
            <h5>View Official Resume</h5>
            <a
              href="https://docs.google.com/document/d/1-l1AeISr4KMfKXe97gFxpp0op6z0nx9ajLXta3DeYfE/edit?usp=sharing"
              target="_blank"
              rel="nooperner noreferrer"
            >
              <i
                style={{ fontSize: "5em" }}
                className="fa fa-file"
                aria-hidden="true"
              ></i>
            </a>
            <hr style={{ borderTop: "3px solid #004e92", width: "50%" }} />
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Georgia Institute of Technology"
              schoolDescription="Certificate in Full Stack Web Development"
            />
            <Education
              startYear={2013}
              endYear={2015}
              schoolName="Kennesaw State University, Coles College of Business"
              schoolDescription="Bachelor of Business Administration, Finance"
            />
            <hr style={{ borderTop: "3px solid #004e92" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2020}
              companyName="eVestment Alliance (NDAQ)"
              companyTitle="Compensation and Benefits Analyst"
              companyDescription={
                <ul style={{ marginLeft: "-30px" }}>
                  <li>
                    Implemented initiatives to improve sales and non-sales
                    compensation programs worldwide.
                  </li>
                  <li>
                    Created variable performance-based compensation plans based
                    on the role and desired results.
                  </li>
                  <li>
                    Benchmarked 256 jobs and presented market results via Power
                    BI to illustrate ‘Us to Market’ and internal standings.
                  </li>
                  <li>
                    Executed yearly salary reviews and incentive recommendation
                    processes.
                  </li>
                  <li>
                    Retained talent through successfully participating and
                    utilizing survey data to implement career pathing and job
                    grades.
                  </li>
                  <li>
                    Increased credibility and transparency in incentive programs
                    by establishing a compensation philosophy and processes for
                    the global organization.
                  </li>
                  <li>
                    Managed all welfare benefits (medical, dental, vision,
                    disability), supplemental benefits, 401(k), equity plans,
                    along with yearly wellness programs for the global
                    population.
                  </li>
                </ul>
              }
            />
            <Experience
              startYear={2015}
              endYear={2018}
              companyName="Cortland Partners"
              companyTitle="Compensation Analyst"
              companyDescription={
                <ul style={{ marginLeft: "-30px" }}>
                  <li>
                    Spearheaded 2016 year-end compensation evaluation review
                    (1,400 associates) and improved process for 2017.
                  </li>
                  <li>
                    Benchmarked current positions and performed analysis to
                    ensure market competitiveness for our compensation
                    structures.
                  </li>
                  <li>
                    Administered equity plan and issue yearly grants along with
                    buyout calculations for departing associates.
                  </li>
                  <li>
                    Implemented spreadsheets to compute variable incentives for
                    on-site technicians, streamlining the incentive payout
                    process for property managers.
                  </li>
                  <li>
                    Participated in annual National Multifamily Housing
                    Community (NMHC) salary surveys.
                  </li>
                  <li>
                    Lead multiple year-end audits – medical benefits, HSA, and
                    PTO audits.
                  </li>
                </ul>
              }
            />
            <hr style={{ borderTop: "3px solid #004e92" }} />
            <h2>Skills</h2>
            <Skills skill="React" progress={60} />
            <Skills skill="JavaScript" progress={75} />
            <Skills skill="MongoDB" progress={70} />
            <Skills skill="HTML" progress={80} />
            <Skills skill="CSS" progress={85} />
            <Skills skill="Handlebars" progress={40} />
            <Skills skill="jQuery" progress={50} />
            <Skills skill="Node.js" progress={75} />
            <Skills skill="Heroku" progress={80} />
            <Skills skill="mysql" progress={85} />
            <Skills skill="Microsoft Office" progress={90} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
