// render all nodes one to one

import { join } from "path"
import slugify from "../helpers/slugify"

function renderPath(node) {
  return join(
    node.path
      .concat([node.slug])
      .map(slugify)
      .join("/"),
    "index.html"
  )
}

export function renderNode(node, registry) {
  if (node.draft === true || node.render === false) {
    return false
  }

  if (node._.isDirectory && !node._.isFile) {
    return false
  }

  let name = node.layout || node.type

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
