import Promise from "bluebird"
import path from "path"
import spec from "./spec"

const fs = Promise.promisifyAll(require("fs"))

const noop = val => val

export default function init(obj) {
  return Object.keys(spec).reduce((final, key) => {
    let val = obj[key] || spec[key].defaultValue
    if (val) {
      final[key] = (spec[key].transform || noop)(val)
    }
    return final
  }, {})
}

export async function fromFile(root) {
  let configFile = path.join(root, "catalyst.json")
  let config = await fs.readFileAsync(configFile, { encoding: "utf8" })
  return init(JSON.parse(config))
}
