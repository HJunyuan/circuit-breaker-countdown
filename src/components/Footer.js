import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import Disclaimer from "./Disclaimer";

const styles = {
  root: {
    fontWeight: "600",
    textAlign: "center",
    margin: "0 auto 20px auto",
    padding: "20px",
    maxWidth: "300px",
    borderRadius: "20px",
    background: "rgba(240, 240, 240, 0.9)"
  }
};

export default props => {
  const [showDis, setShowDis] = useState(undefined);

  useEffect(() => {
    const readDisclaimer = localStorage.getItem("readDisclaimer");
    if (readDisclaimer !== "true") setShowDis(true);
  }, []);

  return (
    <>
      <Disclaimer
        show={showDis}
        onHide={() => {
          setShowDis(false);
          localStorage.setItem("readDisclaimer", true);
        }}
      />
      <footer style={styles.root}>
        <p>
          <Button size="sm" onClick={() => setShowDis(true)}>
            View disclaimer
          </Button>
        </p>
        <a
          href="https://github.com/HJunyuan"
          target="_blank"
          rel="noopener noreferrer"
        >
          @HJunyuan
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/GuangWeiNgoh"
          target="_blank"
          rel="noopener noreferrer"
        >
          @GuangWeiNgoh
        </a>
        <br />
        <a
          href="https://www.freepik.com/free-photos-vectors/banner"
          target="_blank"
          rel="noopener noreferrer"
        >
          Art by macrovector
        </a>
      </footer>
    </>
  );
};
