import React, { useState, useEffect } from "react";
import { Carousel, Card, Button } from "react-bootstrap"; 

const styles = {
  root: {
    textAlign: "center",
    color: "black"
  },
  header: {
    fontWeight: "bold",
    fontSize: "23px"
  },
  body: {
    margin: "auto",
    width: '25rem',
  },
  carousel:{
    paddingBottom: "50px",
    width: 'auto'
  },
  cardheader:{
    background: '#d9534f',
    color: 'white'
  },
  underline: {
    textDecoration: "underline",
    fontWeight: "bold"
  },
  progressBarWrapper: {
    position: "relative"
  },
  progressBar: {
    maxWidth: "480px",
    height: "40px",
    margin: "20px auto 0 auto",
    borderRadius: "20px"
  },
  progressBarText: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    color: "#5F5F5F",
    fontVariantNumeric: "tabular-nums",
    fontSize: "18px",
    fontFamily: "'Open Sans', 'Arial'"
  }
};

export default ({ style }) => {

  const rootStyle = {
    ...style,
    ...styles.root
  };

  return (
    <div style={rootStyle}>
      <Carousel style={styles.carousel}>
        <Carousel.Item>
            <Card style={styles.body}>
                <Card.Header style={styles.cardheader}>April 7</Card.Header>
                <Card.Body>
                    <Card.Title>106 New Cases</Card.Title>
                    <Card.Text>
                    52 linked to existing clusters. 33 discharged
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Carousel.Item>
        <Carousel.Item>
            <Card style={styles.body}>
                <Card.Header style={styles.cardheader}>April 8</Card.Header>
                <Card.Body>
                    <Card.Title>142 New Cases</Card.Title>
                    <Card.Text>
                    55 linked to known clusters.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Carousel.Item>
        
        </Carousel>
    </div>
  );
};
