import React from "react"
import { Link, graphql } from "gatsby"
import loadable from '@loadable/component';

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const DynamicComponent = loadable((props) => import(`../components/${props.component}`, {
  ...props
}));

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const IndexPage = (props) => (
  <DynamicComponent component="layout" data={props.data}>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <a href="https://www.google.com/">Google</a>
  </DynamicComponent>
)

export default IndexPage
