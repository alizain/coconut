import "babel-register"
import fs from "./fs"
import { join } from "path"

export function requireArr(files) {
  files.forEach((f) => {
    try {
      require(f) // eslint-disable-line
    } catch (e) {
      console.error(e)
    }
  })
}

export default async function requireDir(root, recurse = false) {
  try {
    let files = await fs.readdirAsync(root).map(p => join(root, p))
    // let stats = await Promise.all(files.map(fs.statAsync))
    requireArr(files)
  } catch (err) {
    throw err
  }
}
