import sortby from "lodash.sortby"

/**
 * Sort children idempotently
 */

export default function sortChildren(node) {
  sortby(node.children, "path.dir", "path.name", "path.ext")
}
