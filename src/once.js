import path from "path"
import Promise from "bluebird"
import fsdb from "./fsdb"
import { Registry } from "./registry"

const fs = Promise.promisifyAll(require("fs"))

function requireArr(files) {
  console.log(files)
  files.forEach((f) => {
    try {
      require(f) // eslint-disable-line global-require
    } catch (e) {
      console.error(`something went wrong requiring ${f}`)
    }
  })
}

async function loadFiles(dir) {
  let absPath = path.resolve(dir)
  try {
    return await fs.readdirAsync(absPath)
      .map(fragPath => path.join(absPath, fragPath))
  } catch (err) {
    throw err
  }
}


export async function once(config) {
  console.log("i made it here")
  let data = await fsdb(config.data)
  console.log("i made it here after data")
  let files = await loadFiles(config.layouts)
  console.log(files)
  console.log("i made it here after layout")
  requireArr(files)
  console.log("i made it here after require")
  console.log(data)
}

export default once
