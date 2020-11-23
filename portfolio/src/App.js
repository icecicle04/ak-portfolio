import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

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
              <Link href="/">Home</Link>
              <Link href="/about">About Me</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/resume">Resume</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link href="/">Home</Link>
              <Link href="/about">About Me</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/resume">Resume</Link>
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
