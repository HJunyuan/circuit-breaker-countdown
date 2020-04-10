/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";

// import Header from "./header"
import Footer from "./Footer";
import "typeface-raleway";
import "typeface-quicksand";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  main: {
    flexGrow: 1,
  },
};

const Layout = ({ children, style }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  const rootStyle = {
    ...styles.root,
    ...style,
  };

  return (
    <>
      <Container style={rootStyle}>
        <main style={styles.main}>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
