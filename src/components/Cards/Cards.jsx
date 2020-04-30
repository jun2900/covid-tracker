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
          <Card
            body
            className="text-center"
            inverse
            style={{ borderRadius: 25, backgroundColor: "#ffa500" }}
          >
            <CardTitle>
              <h5>Positif</h5>
            </CardTitle>
            <CardText>
              <h5>{confirmed.value}</h5>
            </CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card
            body
            className="text-center"
            inverse
            color="danger"
            style={{ borderRadius: 25 }}
          >
            <CardTitle>
              <h5>Meninggal</h5>
            </CardTitle>
            <CardText>
              <h5>{deaths.value}</h5>
            </CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card
            body
            className="text-center"
            inverse
            color="success"
            style={{ borderRadius: 25 }}
          >
            <CardTitle>
              <h5>Sembuh</h5>
            </CardTitle>
            <CardText>
              <h5>{recovered.value}</h5>
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
