import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Lyrics () {
  const data = useStaticQuery(graphql`
    query Lyrics {
      allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/music/lyrics/*.md" } }) {
        totalCount
        edges {
          node {
            html
            frontmatter {
              title
              path
              excerpt
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
    .sort((a, b) => Number(a.node.frontmatter.excerpt) - Number(b.node.frontmatter.excerpt))
    .map((edge, index) => (
      <div id={edge.node.frontmatter.title} className="box content">
        <h4 className="title">{edge.node.frontmatter.title}</h4>
        <div className="" dangerouslySetInnerHTML={{ __html: edge.node.html }} />
      </div>
    ))
};
