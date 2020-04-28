import React from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths }, country }) => {
  if (!confirmed) {
    return "";
  }
  console.log(country);

  return (
    <div className={styles.container}>
      <br />
      <h2>{country ? `Negara: ${country}` : `Global`}</h2>
      <Row>
        <Col sm="4">
          <Card body className="text-center">
            <CardTitle>
              <h5>Positif</h5>
            </CardTitle>
            <CardText>{confirmed.value}</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body className="text-center">
            <CardTitle>
              <h5>Meninggal</h5>
            </CardTitle>
            <CardText>{deaths.value}</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body className="text-center">
            <CardTitle>
              <h5>Sembuh</h5>
            </CardTitle>
            <CardText>{recovered.value}</CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
