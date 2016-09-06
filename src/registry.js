const components = {}

function get(name) {
  return components[name]
}

function add(name, comp) {
  if (get(name)) { throw new Error(`Cannot register duplicate components (${name})`) }
  components[name] = comp
}

export const Registry = {
  add,
  get
}

export default Registry
