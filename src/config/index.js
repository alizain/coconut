import fs from "../helpers/fs"
import path from "path"
import spec from "./spec"

const noop = () => {}

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
  let configFile = path.join(root, "coconut.json")
  let config = await fs.readFileAsync(configFile, { encoding: "utf8" })
  return init(JSON.parse(config))
}
