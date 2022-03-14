import React from "react";
import { graphql } from "gatsby";

import Layout from "@components/layout";
import Tile from "@components/portfolio/Tile";
import HireMe from "@components/portfolio/HireMe";
import CV from "@images/CV.pdf";

function Portfolio({ data }) {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <div class="level">
        <h1 class="title is-1">Showcase</h1>
        <a download="alex-folk-cv" href={CV} class="button">
          Download CV
        </a>
      </div>
      <hr />
      <div class="columns is-multiline">
        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return frontmatter.class === "work" ? (
            <Tile props={frontmatter} />
          ) : null;
        })}
      </div>
      <HireMe />
    </Layout>
  );
}

export const query = graphql`
  query Portfolio {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            class
            excerpt
            subject
            author
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default Portfolio;
