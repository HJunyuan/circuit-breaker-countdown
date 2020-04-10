import React from "react";

const styles = {
  root: {
    marginBottom: "10vh",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default props => {
  return (
    <footer style={styles.root}>
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
  );
};
