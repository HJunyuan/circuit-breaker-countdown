/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import siteImg from "../images/cb-site.png";

function SEO({
  description,
  lang,
  meta,
  title: propsTitle,
  img: propsImg,
  pathname
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteURL
          }
        }
      }
    `
  );

  const title = propsTitle || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const img = site.siteMetadata.siteURL + (propsImg || siteImg);
  const url = site.siteMetadata.siteURL + (pathname && pathname);

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:site_name`,
          content: title
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:url`,
          content: url
        },
        {
          property: `og:image`,
          content: img
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          property: `twitter:url`,
          content: url
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          property: `twitter:image`,
          content: img
        }
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

export default SEO;
