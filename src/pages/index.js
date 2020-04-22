import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Background from "../components/Background";
import Countdown from "../components/Countdown";
import Share from "../components/Share";
import Cna from "../components/cna";

const IndexPage = ({ location }) => (
  <>
  
    <SEO pathname={location.pathname} />
    <Background />
    
      <Layout>
        <Countdown style={{ marginTop: "10vmax" }} />
        <Cna/>
        <Share />
        
      </Layout>
  </>
);

export default IndexPage;
