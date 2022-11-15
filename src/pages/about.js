import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const PAGE_TITLE = "About Me";

const AboutPage = () => {
  return (
    <Layout pageTitle={PAGE_TITLE}>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title={PAGE_TITLE} />;

export default AboutPage;
