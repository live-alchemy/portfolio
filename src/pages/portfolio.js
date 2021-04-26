import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Tile from "@components/portfolio/Tile"

function Portfolio ({ data }) {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<div className="columns is-multiline">
				{edges.map(edge => {
					const { frontmatter } = edge.node;
					return frontmatter.class === 'work' ? (<Tile props={frontmatter} />) : null
				})}
			</div>
		</Layout>
	);
};

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

export default Portfolio
