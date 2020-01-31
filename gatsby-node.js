/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions

    const componentData = [
        "layout",
        "seo",
        "image"
    ]
    componentData.forEach((comp, idx) => {
        const nodeContent = JSON.stringify(comp)

        const nodeMeta = {
            id: createNodeId(`my-data-${idx}`),
            component: comp,
            parent: null,
            children: [],
            internal: {
                type: `ComponentData`,
                content: nodeContent,
                contentDigest: createContentDigest(comp)
            }
        }
    
        createNode(nodeMeta)
    });
}