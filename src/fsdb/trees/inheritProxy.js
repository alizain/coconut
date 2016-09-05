import mapRecurse from "../mapRecurse"
import { mergeWithProps } from "../mergeProps"
import sortChildren from "../sortChildren"

export default function() {

  return mapRecurse((node) => {

    if (!node.children) { return node }

    sortChildren(node)

    node.children = node.children.filter((obj) => {
      if (obj.isFile && obj.path.name === "inheritance") {
        node.inheritance = mergeWithProps({}, obj.data)
        return false
      }
      return true
    })

    return node

  })

}
