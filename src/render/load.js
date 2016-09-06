import "babel-register"
import path from "path"
import Promise from "bluebird"

const fs = Promise.promisifyAll(require("fs"))

export function requireAll(files) {
  files.forEach((f) => {
    try {
      require(f) // eslint-disable-line global-require
    } catch (e) {
      console.error(e)
    }
  })
}

export default async function load(absRoot) {
  try {
    let files = await fs.readdirAsync(absRoot)
      .map(fragPath => path.join(absRoot, fragPath))
    requireAll(files)
  } catch (err) {
    throw err
  }
}
