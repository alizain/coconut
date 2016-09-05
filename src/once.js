import "babel-register"
import path from "path"
import Promise from "bluebird"
import fsdb from "./fsdb"
import Registry from "./render/registry"

const dataDir = "./sample/data"
const layoutsDir = "./sample/layouts"

const fs = Promise.promisifyAll(require("fs"))

function requireArr(files) {
  files.forEach((f) => {
    try {
      require(f) // eslint-disable-line global-require
    } catch (e) {
      console.error(e)
    }
  })
}

async function loadFiles(dir) {
  let absPath = path.resolve(dir)
  let files = await fs.readdirAsync(absPath)
    .map(fragPath => path.join(absPath, fragPath))
  requireArr(files)
}

loadFiles(layoutsDir)
  .then(() => { console.log(Registry.all()) })
