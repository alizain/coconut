const components = {}

function add(name, comp) {
  components[name] = comp
}

function all() {
  return components
}

export const Registry = {
  add,
  all
}

export default Registry
