export default function() {

  return function catalyze(node, parent, root) {

    let self = Object.create(Object.prototype, node.data)
    if (parent) {
      if (parent.inheritance) {
        self = Object.create(parent.inheritance, node.data)
      }
      Object.defineProperty(self, "parent", { value: parent })
    }

    if (!root) {
      root = self
    }
    Object.defineProperty(self, "root", { value: root })

    if (node.inheritance) {
      let inheritance = Object.create(Object.prototype, node.inheritance)
      Object.defineProperty(self, "inheritance", { value: inheritance })
    }

    if (node.children) {
      let children = node.children.reduce((all, obj) => {
        all[obj.data.slug.value] = catalyze(obj, self, root)
        return all
      }, {})
      Object.defineProperty(self, "children", { value: Object.freeze(children) })
    }

    return self

  }

}
