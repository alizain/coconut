import Promise from "bluebird"
import { parse, join } from "path"

const fs = Promise.promisifyAll(require("fs"))
const mkdirp = Promise.promisify(require("mkdirp"))

function mkdirpAll(paths) {
  return Promise.all(paths.map(p => mkdirp(parse(p).dir, undefined)))
}

export default async function write(dist, files) {
  files.forEach(f => { f.path = join(dist, f.path) })
  await mkdirpAll(files.map(f => f.path))
  return Promise.all(files.map((f) => fs.writeFileAsync(f.path, f.data)))
}
