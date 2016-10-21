import ReactDOMServer from "react-dom/server"

function finalizeMarkup(str) {
  return "<!DOCTYPE html>" + str
}

export function renderNode(node) {
  let markup
  try {
    markup = ReactDOMServer.renderToStaticMarkup(
      node.renderer.apply(undefined, node.args)
    )
  } catch (e) {
    console.error(e.stack)
  }
  if (!markup) {
    return false
  }
  node.output = finalizeMarkup(markup)
  return node
}

export default function render(nodeArr, registry, views) {
  return views
    .reduce((all, curr) => all.concat(curr(nodeArr, registry)), [])
    .map(renderNode)
    .filter(n => !!n)
}
