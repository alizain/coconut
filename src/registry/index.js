const components = {}
let defaultLayout

function get(name) {
  return components[name]
}

function resolve(name) {
  return get(name) || defaultLayout
}

function setDefault(func) {
  if (defaultLayout) { console.warn("Re-setting default component") }
  defaultLayout = func
}

function set(name, func) {
  if (get(name)) { throw new Error(`Cannot register duplicate components (${name})`) }
  components[name] = func
}

export const Registry = {
  resolve,
  setDefault,
  set
}

export default Registry
