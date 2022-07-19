import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import AOS from "aos";
import InfoCard from "./Components/infoCard";
import Roadmap from "./Components/roadmapInfo";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { ChakraProvider, Button, useBoolean } from "@chakra-ui/react";

import MyNFT from "./img/myNFT.png";
import logo from "./img/DcofferLogoWord.png";
import Dcoff from "./img/myDcoff.png";
import NFTGIF from "./img/NFTintro.gif";
import FB from "./img/icon/Facebook.png";
import DC from "./img/icon/Discord.png";
import IG from "./img/icon/Instagram.png";
import TG from "./img/icon/Telegram.png";
import TW from "./img/icon/Twitter.png";
import FB1 from "./img/icon/FB1.png";
import DC1 from "./img/icon/DC1.png";
import IG1 from "./img/icon/IG1.png";
import TG1 from "./img/icon/TG1.png";
import TW1 from "./img/icon/TW1.png";

AOS.init();

const expand = "lg";

const navbarstyle = {
  opacity: "0.9",
  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.1 )",
};

const column_center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const row_center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

const icon = [
  { icon: FB, hover: FB1, url: "https://www.facebook.com/" },
  { icon: DC, hover: DC1, url: "https://www.facebook.com/" },
  { icon: IG, hover: IG1, url: "https://www.facebook.com/" },
  { icon: TG, hover: TG1, url: "https://www.facebook.com/" },
  { icon: TW, hover: TW1, url: "https://www.facebook.com/" },
];

function Socialmedia(i) {
  const [flag, setFlag] = useBoolean();

  return (
    <div
      onMouseEnter={setFlag.on}
      onMouseLeave={setFlag.off}
      style={row_center}
    >
      {flag ? (
        <a href={icon[i].url} target="_blank" rel="noopener noreferrer">
          <img
            alt="dcoffer"
            src={icon[i].icon}
            width="45"
            style={{
              marginBottom: "13px",
              opacity: "0.5",
              transition: " 200ms",
            }}
          />
        </a>
      ) : (
        <a href={icon[i].url} target="_blank" rel="noopener noreferrer">
          <img
            alt="dcoffer"
            src={icon[i].hover}
            width="35"
            style={{ margin: "10px" }}
          />
        </a>
      )}
    </div>
  );
}

function DcoffInfo() {
  return (
    <Container style={{ margin: "30px" }}>
      <div className="cosCard" data-aos="fade-up" data-aos-duration="2000">
        <Row>
          <Col md="6" style={column_center}>
            <img
              alt="dcoff"
              src={Dcoff}
              width="450"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </Col>
          <Col md="6" style={column_center}>
            <h1 className="weber">DCOFF (DCF)</h1>
            <p>sdsefsefsefjoiejf</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

function NFTInfo() {
  return (
    <Container style={{ margin: "30px" }}>
      <div className="cosCard" data-aos="fade-up" data-aos-duration="2000">
        <Row>
          <Col md="6" style={column_center}>
            <div style={{padding:"12%"}}>
              <h1 className="weber" style={{ color: "black",marginBottom: "30px" }}>
                DCOFFER MINER
              </h1>
              <p>
                Each Bored Ape is unique and programmatically generated from
                over 170 possible traits, including expression, headwear,
                clothing, and more. All apes are dope, but some are rarer than
                others. The apes are stored as ERC-721 tokens on the Ethereum
                blockchain and hosted on IPFS. (See Record and Proof.)
                Purchasing an ape costs 0.08 ETH. To access members-only areas
                such as THE BATHROOM, Apeholders will need to be signed into
                their Metamask Wallet.
              </p>
            </div>
          </Col>
          <Col md="6" style={column_center}>
            <img alt="decoffer" src={NFTGIF} width="450" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

function App() {
  return (
    <ChakraProvider>
      <div>
        <Navbar
          fixed="top"
          style={navbarstyle}
          key={expand}
          bg="dark"
          expand={expand}
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                alt="dcoffer"
                src={logo}
                width="120"
                className="d-inline-block align-center"
              />
            </Navbar.Brand>
            <Button colorScheme="teal" size="sm">
              <Link to="/mine">Launch APP</Link>
            </Button>
          </Container>
        </Navbar>
        <body className="body_style">
          <Container className="section_style_01">
            <Row className="justify-content-md-center">
              <Col style={row_center} md="6">
                <img
                  alt="dcoffer"
                  src={MyNFT}
                  width="600"
                  className="d-inline-block align-center"
                />
              </Col>
              <Col style={column_center} md="6">
                <img
                  alt="dcoffer"
                  src={logo}
                  width="85%"
                  className="d-inline-block align-center"
                  style={{ margin: "30px 0px 10px 0px" }}
                />
                <div style={row_center}>
                  {Socialmedia(0)}
                  {Socialmedia(1)}
                  {Socialmedia(2)}
                  {Socialmedia(3)}
                  {Socialmedia(4)}
                </div>
                <Button Button colorScheme="red" style={{ marginTop: "30px" }}>
                  <Link to="/mine">GET ME IF YOU CAN</Link>
                </Button>
              </Col>
            </Row>
          </Container>
          <section className="section_style_03">{NFTInfo()}</section>
          <section style={column_center}>
            {DcoffInfo()}
            <Container style={{ margin: "10px 0px 130px 0px" }}>
              <Row>
                <InfoCard />
              </Row>
            </Container>
          </section>
          <section style={column_center}>
            <Roadmap />
          </section>
        </body>
        <footer className="section_style_02"></footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
