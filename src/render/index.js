import ReactDOMServer from "react-dom/server"
import { join } from "path"

function finalizePath(node) {
  return join(node.path.join("/"), node.slug, "index.html")
}

function finalizeMarkup(str) {
  return "<!DOCTYPE html>" + str
}

export function render(node, root, registry) {
  let name = node.layout || node.type
  if (!name) { return false }

  let comp = registry.get(name)
  if (!comp) { throw new Error(`${name} is not a registered component`) }

  let data = ReactDOMServer.renderToStaticMarkup(
    comp({ node, root })
  )

  return {
    path: finalizePath(node),
    data: finalizeMarkup(data)
  }
}

export function renderTree(node, root, registry) {
  let r = render(node, root, registry)
  let all = r === false ? [] : [r]
  if (node.children) {
    Object.values(node.children).forEach((child) => {
      all = all.concat(renderTree(child, root, registry))
    })
  }
  return all
}
