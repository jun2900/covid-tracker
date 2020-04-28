import React from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths }, country }) => {
  if (!confirmed) {
    return "";
  }

  return (
    <div className={styles.container}>
      <br />
      <h2>{country ? `Negara: ${country}` : `Global`}</h2>
      <Row>
        <Col sm="4">
          <Card body>
            <CardTitle>Positif</CardTitle>
            <CardText>{confirmed.value}</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <CardTitle>Meninggal</CardTitle>
            <CardText>{deaths.value}</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <CardTitle>Sembuh</CardTitle>
            <CardText>{recovered.value}</CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
