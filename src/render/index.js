import "babel-register"
import path from "path"
import Promise from "bluebird"
import Registry from "./registry"

const fs = Promise.promisifyAll(require("fs"))

const layouts = "../../sample/layouts"

function requireArr(files) {
  files.forEach((f) => {
    try {
      require(f) // eslint-disable-line global-require
    } catch (e) {
      // swallow errors for now
    }
  })
}

async function init(dir) {
  let absPath = path.resolve(dir)
  let files = await fs.readdirAsync(absPath)
    .map(fragPath => path.join(absPath, fragPath))
  requireArr(files)
  return Registry.all()
}

init(layouts)
  .then((data) => { console.log(data) })
