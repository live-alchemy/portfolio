import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Tile from "@components/blog/Tile"

const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<div className="columns is-multiline">
				{edges.map((edge, i, arr) => {
					const { frontmatter } = edge.node;
					return frontmatter.class === 'blog' ? (<Tile key={`${frontmatter.date}_${i}`} props={frontmatter} />) : null
				})}
			</div>
		</Layout>
	);
};

export const query = graphql`
	query HomePageQuery {
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						subtitle
						date(formatString: "MMMM DD, YYYY")
						path
						tags
						class
						excerpt
						subject
						author
						cover {
							childImageSharp {
								gatsbyImageData(
									height: 600
								)
							}
						}
						image {
							childImageSharp {
								gatsbyImageData(
									height: 600
								)
							}
						}
					}
				}
			}
		}
	}
`;

export default IndexPage;
