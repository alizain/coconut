import fs from "../helpers/fs"
import { parse, join } from "path"

function absolutify(dist) {
  return (f) => { f.path = join(dist, f.path) }
}

function ensureDirs(files) {
  return Promise.all(
    files.map(f =>
      fs.mkdirpAsync(parse(f.path).dir)
    )
  )
}

function writeAll(files) {
  return Promise.all(
    files.map(f =>
      fs.writeFileAsync(f.path, f.output)
    )
  )
}

export default async function(dist, files) {
  files.forEach(absolutify(dist))
  await ensureDirs(files)
  return writeAll(files)
}
