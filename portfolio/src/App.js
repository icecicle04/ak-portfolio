import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div style={{ height: "300px", position: "relative" }}>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <span style={{ color: "#ddd" }}>Ali Khan's</span>
                <strong> Portfolio</strong>
              </span>
            }
          >
            <Navigation>
              <a href="/">Home</a>
              <a href="/about">About Me</a>
              <a href="/contact">Contact</a>
              <a href="/projects">Projects</a>
              <a href="/resume">Resume</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="/">Home</a>
              <a href="/about">About Me</a>
              <a href="/contact">Contact</a>
              <a href="/projects">Projects</a>
              <a href="/resume">Resume</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
