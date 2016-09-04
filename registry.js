const components = {}

function add(name, comp) {
  components[name] = comp
}

function all() {
  return components
}

export default {
  add,
  all
}
