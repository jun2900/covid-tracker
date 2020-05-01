import React from "react";
import { Card, CardTitle, Row, Col } from "reactstrap";
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
        <Col xs="12" md="4">
          <Card
            body
            className="text-center"
            inverse
            style={{ borderRadius: 25, backgroundColor: "#ffa500" }}
          >
            <CardTitle>
              <h5>Positif</h5>
            </CardTitle>
            <h5>{confirmed.value}</h5>
          </Card>
        </Col>
        <Col xs="12" md="4">
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
            <h5>{deaths.value}</h5>
          </Card>
        </Col>
        <Col xs="12" md="4">
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
            <h5>{recovered.value}</h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
