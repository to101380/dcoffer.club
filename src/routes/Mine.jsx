import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "../App.css";
import { ChakraProvider, Button, Tabs, TabList, Tab } from "@chakra-ui/react";
import Controlled from "../Components/controlled";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { useState } from "react";
// import { Outlet, Link } from "react-router-dom";

import logo from "../img/DcofferLogoWord.png";
import blindbox from "../img/blindbox.png";

AOS.init();

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

// const row_center = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   flexDirection: "row",
// };



function navbar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      style={navbarstyle}
      className="align-center"
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
          Connect Wallet
        </Button>
      </Container>
    </Navbar>
  );
}

function Mint() {
  
  return (
    <Container>
      <div
        className="cosCard"
        data-aos="fade-up"
        data-aos-duration="2000"
        style={{ overflow: "hidden" }}
      >
        <Row>
          <Col md="6">
            <img
              alt="dcoff"
              width="450"
              src={blindbox}
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </Col>
          <Col md="6" style={column_center}>
            <h1 className="weber">DCOFF</h1>
            <Controlled />            
          </Col>
        </Row>
      </div>
    </Container>
  );
}

function mine() {
  return (
    <ChakraProvider>
      {navbar()}

      <section className="section_style_01">{Mint()}</section>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
      </Tabs>
    </ChakraProvider>
  );
}

export default mine;
