import React from "react"
import { Link, graphql } from "gatsby"
import loadable from '@loadable/component';

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const DynamicComponent = loadable((props) => import(`../components/${props.component}`));
// const DynamicComponent = () => import(`../components/layout.js`).then((component) => component.default);

const IndexPage = ({ data }) => {
  const components = data.allComponentData.nodes;
  return <DynamicComponent component={components[0].component}>
    {/* <SEO title="Home" /> */}
    <DynamicComponent component={components[1].component} title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <DynamicComponent component={components[2].component} />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <a href="https://www.google.com/">Google</a>
  </DynamicComponent>
};

export const query = graphql`
  query ComponentQuery {
    allComponentData {
      nodes {
        id
        component
      }
    }
  }
`

export default IndexPage
