import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import AOS from "aos";
import { Container, Col } from "react-bootstrap";
import { ChakraProvider, useBoolean } from "@chakra-ui/react";

import r1 from "../img/roadmap/roadmap01.png";
import r2 from "../img/roadmap/roadmap02.png";
import r3 from "../img/roadmap/roadmap03.png";
import r4 from "../img/roadmap/roadmap04.png";
import r5 from "../img/roadmap/roadmap05.png";
import r6 from "../img/roadmap/roadmap06.png";

AOS.init();

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
  { icon: r1, name: "NFT", status: "more...", url: "/Mine" },
  {
    icon: r2,
    name: "MINE",
    status: "more...",
    url: "https://www.facebook.com/",
  },
  {
    icon: r3,
    name: "STAKE",
    status: "more...",
    url: "https://www.facebook.com/",
  },
  {
    icon: r4,
    name: "LOAN",
    status: "coming soon",
    url: "https://www.facebook.com/",
  },
  {
    icon: r5,
    name: "SHOP",
    status: "coming soon",
    url: "https://www.facebook.com/",
  },
  {
    icon: r6,
    name: "TOYS",
    status: "coming soon",
    url: "https://www.facebook.com/",
  },
];

function close(i) {
  return (
    <div
      style={{ margin: "30px", opacity: "0.9" }}
      data-aos="zoom-out"
      data-aos-duration="3000"
    >
      <div style={column_center}>
        <img
          alt="roadmap"
          src={icon[i].icon}
          width="80"
          className="d-inline-block align-center"
          style={{ margin: "8px", opacity: "0.5", filter: "grayscale(1)" }}
        />
        <p>{icon[i].name}</p>
        <div className="text-center">{icon[i].status}</div>
      </div>
    </div>
  );
}

function operation(i) {
  return (
    <div
      style={{ margin: "30px" }}
      data-aos="zoom-out"
      data-aos-duration="3000"
    >
      <Link to={icon[i].url}>
        <div style={column_center}>
          {Image(i)}
          <p>{icon[i].name}</p>
          <div className="text-center">{icon[i].status}</div>
        </div>
      </Link>
    </div>
  );
}

function Image(i) {
  const [flag, setFlag] = useBoolean();

  return (
    <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
      {flag ? (
        <img
          alt="roadmap"
          src={icon[i].icon}
          width="80"
          className="d-inline-block align-center"
          style={{ margin: "8px", opacity: "0.5", transition: " 200ms" }}
        />
      ) : (
        <img
          alt="roadmap"
          src={icon[i].icon}
          width="80"
          className="d-inline-block align-center"
          style={{ margin: "8px" }}
        />
      )}
    </div>
  );
}

function roadmap() {
  return (
    <ChakraProvider>
      <Container style={{ marginBottom: "130px" }}>
        <div className="cosCard" data-aos="fade-up" data-aos-duration="2000">
          <Col md="12">
            <div style={row_center}>
              {operation(0)}
              {operation(1)}
              {operation(2)}
            </div>
            <div style={row_center}>
              {close(3)}
              {close(4)}
              {close(5)}
            </div>
          </Col>
        </div>
      </Container>
    </ChakraProvider>
  );
}

export default roadmap;
