import ReactDOMServer from "react-dom/server"
import { join } from "path"

function finalizePath(node) {
  return join(node.path.join("/"), node.slug, "index.html")
}

function finalizeMarkup(str) {
  return "<!DOCTYPE html>" + str
}

export function renderNode(node, registry, config) {
  let name = node.layout || node.type || config.defaultLayout
  if (!name) {
    throw new Error(`Cannot find layout for ${node}`)
  }

  if (node.draft === true || node.render === false) {
    return false
  }

  let func = registry.get(name)
  if (!func) { throw new Error(`${name} is not a registered component`) }

  let content = ReactDOMServer.renderToStaticMarkup(
    func({ node })
  )

  return {
    path: finalizePath(node),
    content: finalizeMarkup(content)
  }
}

export function renderArr(nodeArr, registry, config) {
  return nodeArr
    .map(n => renderNode(n, registry, config))
    .filter(n => !!n)
}
