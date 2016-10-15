import ReactDOMServer from "react-dom/server"
import { join } from "path"
import { inspect } from "util"

function finalizePath(node) {
  return join(node.path.join("/"), node.slug, "index.html")
}

function finalizeMarkup(str) {
  return "<!DOCTYPE html>" + str
}

export function renderNode(node, registry) {
  let name = node.layout || node.type

  if (node.draft === true || node.render === false) {
    return false
  }

  let func = registry.resolve(name)
  if (!func) { throw new Error(`Cannot find renderer for node ${inspect(node)}`) }

  let content = ReactDOMServer.renderToStaticMarkup(
    func({ node })
  )

  return {
    path: finalizePath(node),
    content: finalizeMarkup(content)
  }
}

export function renderArr(nodeArr, registry) {
  return nodeArr
    .map(n => renderNode(n, registry))
    .filter(n => !!n)
}
