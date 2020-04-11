import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

const startDate = new Date(2020, 3, 7); // 3 = April
const endDate = new Date(2020, 4, 4); // 4 = May
const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

const styles = {
  root: {
    textAlign: "center",
    color: "white"
  },
  header: {
    fontWeight: "bold",
    fontSize: "28px"
  },
  body: {
    margin: "16px 0",
    lineHeight: "45px",
    fontSize: "40px"
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
    fontSize: "20px",
    fontFamily: "Arial"
  }
};

export default ({ style }) => {
  const [daysElapsed, setDaysElapsed] = useState("");
  const [daysLeft, setDaysLeft] = useState("");
  const [hoursLeft, setHoursLeft] = useState("");
  const [minutesLeft, setMinutesLeft] = useState("");

  useEffect(() => {
    const intervalID = setInterval(() => {
      const today = new Date();
      if (today > endDate) {
        setDaysElapsed(totalDays);
        setDaysLeft(0);
        setHoursLeft(0);
        setMinutesLeft(0);
        clearInterval(intervalID);
        return;
      }
      const timeElapsed = today - startDate;
      const daysElapsed = Math.ceil(timeElapsed / (1000 * 60 * 60 * 24));
      setDaysElapsed(daysElapsed);

      const timeLeft = endDate - today;
      setDaysLeft(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
      setHoursLeft(
        Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutesLeft(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const rootStyle = {
    ...style,
    ...styles.root
  };

  return (
    <div style={rootStyle}>
      <h1 style={styles.header}>Hello Singapore,</h1>
      <p style={styles.body}>
        It is <span style={styles.underline}>Day {daysElapsed}</span> of
        <br />
        the {totalDays}-day Circuit Breaker.
      </p>
      <div style={styles.progressBarWrapper}>
        <ProgressBar
          style={styles.progressBar}
          now={daysElapsed}
          max={totalDays}
        />
        <div style={styles.progressBarText}>
          <span>
            Just{" "}
            <b>
              {daysLeft} day{daysLeft > 1 && "s"}
            </b>{" "}
            <b>
              {hoursLeft} hour{hoursLeft > 1 && "s"}
            </b>{" "}
            <b>
              {minutesLeft} min{minutesLeft > 1 && "s"}
            </b>{" "}
            left!
          </span>
        </div>
      </div>
      <p className="mt-2">#SGUnited #Stayhome</p>
    </div>
  );
};
