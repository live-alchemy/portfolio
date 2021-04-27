import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import siteImage from "@images/live-alchemy-logo.png"

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        tagLine
        url
        keywords
      }
    }
  }
`

export default function Seo({ description, lang, meta, keywords, title }) {
  const data = useStaticQuery(detailsQuery)
  const metaDescription = description || data.site.siteMetadata.description
  keywords = keywords || data.site.siteMetadata.keywords
  title = title || data.site.siteMetadata.title
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: siteImage,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://live-alchemy.netlify.app',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: data.site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'instagram:creator',
          content: data.site.siteMetadata.author,
        },
        {
          name: 'instagram:title',
          content: title,
        },
        {
          name: 'instagram:description',
          content: metaDescription,
        },
        ]
        .concat(
          keywords.length > 0
            ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
            : []
        )
        .concat(meta)
      }
    />
  )
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}
