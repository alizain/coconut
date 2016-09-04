import mapRecurse from "../helpers/mapRecurse"
import { mergeWithProps } from "../helpers/mergeProps"
import sortChildren from "../helpers/sortChildren"

export default function() {

  return mapRecurse((node) => {

    if (!node.children) { return node }

    sortChildren(node)

    let dirs = node.children.filter(obj => obj.isDirectory)
    let files = node.children.filter(obj => obj.isFile)
    let children = []

    files.forEach((obj) => {
      let match = dirs.find(d => d.path.name === obj.path.name)
      if (match) {
        match.data = mergeWithProps(match.data, obj.data)
      } else {
        children.push(obj)
      }
    })

    node.children = children.concat(dirs)
    return node

  })

}
