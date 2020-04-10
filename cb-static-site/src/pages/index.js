import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Background from "../components/Background";
import Countdown from "../components/Countdown";

const IndexPage = () => (
  <>
    <SEO />
    <Background />
    <Layout>
      <Countdown style={{ marginTop: "18vh" }} />
    </Layout>
  </>
);

export default IndexPage;
