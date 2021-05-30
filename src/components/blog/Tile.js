import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import defaultImage from "@images/crescent-sun.png"
import "@css/bulma.scss"

export default function Tile ({ props }) {
  return (
    <div className='column is-4'>
      <div className='card'>
        <Link to={props.path} style={{ textDecoration: `none`, color: `inherit` }}>
          <div className='card-image'>
            <figure className='image is-4by4'>
              {
                props.image && props.image.childImageSharp ?
                  (<GatsbyImage imgClassName="tileImage" alt='Blog post image' image={props.image.childImageSharp.gatsbyImageData} />) :
                  (<img src={defaultImage} alt='placeholder' />)
              }
            </figure>
          </div>
        </Link>
        <div className='card-content'>
          <div className='media'>
            <div className='media-content'>
              <p className='title is-4'>
                <Link to={props.path} style={{ textDecoration: `none`, color: `inherit` }}>{props.title}</Link>
              </p>
              {props.subject && <p className="subtitle">Series: {props.subject}</p>}
            </div>
          </div>

          <div className='content'>
            {props.excerpt}
            <br />
            <span className='tags'>
              {props.tags.map(tag => (<a key={props.date + tag} href='#!'><small>#{tag}</small></a>))}
            </span>
            <br />
            <time dateTime={props.date}>{props.date}</time>
          </div>
        </div>
      </div>
    </div>
  )
};
