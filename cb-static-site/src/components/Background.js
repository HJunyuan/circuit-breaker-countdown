import React, { useEffect } from "react";

import Parallax from "parallax-js";
import "./background.css";

import sky from "../images/BG_Sky.svg";
import skyline from "../images/BG_Skyline.svg";
import cloud1 from "../images/BG_Cloud1.svg";
import cloud2 from "../images/BG_Cloud2.svg";
import sun from "../images/BG_Sun.svg";

const styles = {
  parallax: {
    width: "100%",
    height: "100%",
    position: "fixed",
    background: `url(${sky}) no-repeat center center fixed`,
    backgroundSize: "cover",
    zIndex: "-1",
  },
  parallaxparent: {
    width: "100%",
    height: "100%",
  },
  parallaximg: {
    width: "110%",
    height: "100%",
    objectFit: "cover",
  },
};

export default props => {
  useEffect(() => {
    var scene = document.getElementById("scene");
    // var parallaxInstance = new Parallax(scene);
    new Parallax(scene);
  }, []);

  return (
    <>
      <div id="scene" style={styles.parallax}>
        <div data-depth="0.1" style={styles.parallaxparent}>
          <img
            src={sun}
            alt="sun"
            draggable={false}
            className="parallaxchild3"
            style={styles.parallaximg}
          />
        </div>
        <div data-depth="0" style={styles.parallaxparent}>
          <img
            src={skyline}
            alt="sun"
            draggable={false}
            className=""
            style={styles.parallaximg}
          />
        </div>
        <div data-depth="0.3" style={styles.parallaxparent}>
          <img
            src={cloud1}
            alt="cloud1"
            draggable={false}
            className="parallaxchild2"
            style={styles.parallaximg}
          />
        </div>
        <div data-depth="0.4" style={styles.parallaxparent}>
          <img
            src={cloud2}
            alt="cloud2"
            draggable={false}
            className="parallaxchild"
            style={styles.parallaximg}
          />
        </div>
      </div>
    </>
  );
};
