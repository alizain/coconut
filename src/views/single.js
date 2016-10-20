// render all nodes one to one

import { join } from "path"

function renderPath(node) {
  return join(node.path.join("/"), node.slug, "index.html")
}

export function renderNode(node, registry) {
  let name = node.layout || node.type

  if (node.draft === true || node.render === false) {
    return false
  }

  let func = registry.resolve(name)
  if (!func) { throw new Error("Can't find renderer for node") }

  return {
    path: renderPath(node),
    renderer: func,
    args: [{ node }]
  }
}

export default function single(nodeArr, registry) {
  return nodeArr
    .map(n => renderNode(n, registry))
    .filter(n => !!n)
}
