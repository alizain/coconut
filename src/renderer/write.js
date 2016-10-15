import fs from "../helpers/fs"
import { join } from "path"

export default async function write(dist, files) {
  files.forEach((f) => { f.path = join(dist, f.path) })
  await fs.ensureDir(files.map(f => f.path))
  return Promise.all(files.map(f => fs.writeFileAsync(f.path, f.data)))
}
