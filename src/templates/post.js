import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import Footer from "@components/blog/Footer.js"

const Template = ({ data, pageContext }) => {
	const { title, date, author } = data.markdownRemark.frontmatter
	const html = data.markdownRemark.html;
  const { next, prev } = pageContext;

	return (
		<Layout>
			{data.markdownRemark.frontmatter.cover && (
				<img
					className={`
						coverPhoto
						${['work', 'page', 'fullwidth'].includes(data.markdownRemark.frontmatter.class) ? 'isFull' : 'isNarrow'}
					`}
					src={data.markdownRemark.frontmatter.cover.publicURL}
					alt={`cover for ${title} blog post`}
				/>
			)}
			<div className="blogpost content" dangerouslySetInnerHTML={{ __html: html }} />
			{data.markdownRemark.frontmatter.class !== 'work' && (
				<div>
					<em>{author} - {date}</em>
				</div>
			)}
      <Footer prev={prev} next={next} />
		</Layout>
	);
};

export const postQuery = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				title
				subtitle
				subject
				date(formatString: "MMMM, DD, YYYY")
				path
				tags
				excerpt
				author
				class
				coverStyle
				cover {
					publicURL
				}
				image {
					publicURL
				}
			}
		}
	}
`;

export default Template;
