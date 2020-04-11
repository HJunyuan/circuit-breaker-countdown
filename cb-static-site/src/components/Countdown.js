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
    fontFamily: "'Open Sans', 'Arial'"
  }
};

export default ({ style }) => {
  const [daysElapsed, setDaysElapsed] = useState("");
  const [timeLeftText, setTimeLeftText] = useState("");
  const [smTimeLeftText, setSmTimeLeftText] = useState("");

  useEffect(() => {
    const intervalID = setInterval(() => {
      const today = new Date();
      if (today > endDate) {
        setDaysElapsed(totalDays);
        setTimeLeftText("(:");
        clearInterval(intervalID);
        return;
      }
      const timeElapsed = today - startDate;
      const daysElapsed = Math.ceil(timeElapsed / (1000 * 60 * 60 * 24));
      setDaysElapsed(daysElapsed);

      const timeLeft = endDate - today;
      const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minsLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const secsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
      const msLeft = Math.floor(timeLeft % 1000);

      const plu = num => (num > 1 ? "s" : "");
      const pad = (n, width) => {
        n = n + "";
        return n.length >= width
          ? n
          : new Array(width - n.length + 1).join("0") + n;
      };

      let str = `${daysLeft} day${plu(daysLeft)} `;
      str += `${hoursLeft} hour${plu(hoursLeft)} `;
      str += `${minsLeft} min${plu(minsLeft)}`;
      setTimeLeftText(str);

      let smallStr = `${pad(secsLeft, 2)}s `;
      smallStr += `${pad(msLeft, 3)}ms`;
      setSmTimeLeftText(smallStr);
    }, 25);

    return () => clearInterval(intervalID);
  }, []);

  const rootStyle = {
    ...style,
    ...styles.root
  };

  return (
    <div style={rootStyle}>
      <h1 style={styles.header}>Hello Singapore,</h1>
      <p id="greeting" style={styles.body}>
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
          <b>{timeLeftText}</b>
          <small className="ml-2">{smTimeLeftText}</small>
        </div>
      </div>
      <p className="mt-2">#SGUnited #Stayhome</p>
    </div>
  );
};
