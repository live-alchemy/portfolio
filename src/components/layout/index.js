import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Seo from "@components/layout/Seo.js";
import Header from "@components/layout/Header";
import "@css/bulma.scss";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagLine
          description
        }
      }
    }
  `);
  return (
    <>
      <Seo title={data.site.siteMetadata.title} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        tagLine={data.site.siteMetadata.tagLine}
      />
      <div
        style={{
          margin: "75px auto",
          maxWidth: `max(360px, calc(100vw - 180px))`,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0,
        }}
      >
        {children}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
