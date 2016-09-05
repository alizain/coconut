export default function() {

  return function catalyze(node, parent) {

    let self = {}
    if (!parent) {
      Object.defineProperties(self, node.data)
      Object.defineProperties(self, {
        root: { value: self }
      })
    } else {
      self = Object.create(parent, node.data)
      Object.defineProperties(self, {
        parent: { value: parent }
      })
    }

    let inheritance = self
    if (node.inheritance) {
      inheritance = Object.create(self, node.inheritance)
      Object.defineProperties(self, {
        inheritance: { value: inheritance }
      })
    }

    if (node.children) {
      let children = node.children.reduce((all, obj) => {
        all[obj.data.slug.value] = catalyze(obj, inheritance)
        return all
      }, {})
      Object.defineProperties(self, {
        children: { value: Object.freeze(children) }
      })
    }

    return self

  }

}
