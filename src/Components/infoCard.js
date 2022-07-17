import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

import AOS from "aos";
import { Col, Card } from "react-bootstrap";

import cardinfo01 from "../img/cardinfo01.png";
import cardinfo02 from "../img/cardinfo02.png";
import cardinfo03 from "../img/cardinfo03.png";
import Dcoff from "../img/Dcoff.png";

AOS.init();

const column_center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const cardInfo = [
  { img: Dcoff, title: "test", description: "test" },
  { img: cardinfo01, title: "test", description: "test" },
  { img: cardinfo02, title: "test", description: "test" },
  { img: cardinfo03, title: "test", description: "test" },
];

function IntroCard() {
  return cardInfo.map((item) => (
    <Col md="3" data-aos="fade-up" data-aos-duration="2200">
      <Card
        border="0"
        style={{
          margin: "10px 0px",
          overflow: "hidden",
          boxShadow: "10px 10px 10px 1px rgba(0,0,0, 0.08 )",
        }}
      >
        <Card.Body style={column_center}>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={item.img} data-aos="zoom-out" data-aos-duration="2500"/>
      </Card>
    </Col>
  ));
}

export default IntroCard;
