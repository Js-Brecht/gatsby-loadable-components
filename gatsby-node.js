/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions

    const myData = {
        key: 123,
        dateTime: new Date()
    }

    const nodeContent = JSON.stringify(myData)

    const nodeMeta = {
        id: createNodeId(`my-data-${myData.key}`),
        parent: null,
        children: [],
        internal: {
            type: `ContentfulMarketingEvent`,
            content: nodeContent,
            contentDigest: createContentDigest(myData)
        }
    }

    const node = Object.assign({}, myData, nodeMeta)
    createNode(node)
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `type ContentfulMarketingEvent implements Node {
        dateTime: Date @dateformat(formatString: "YYYY-M-MMM-D-h:mm a")
    }`
    createTypes(typeDefs)
}