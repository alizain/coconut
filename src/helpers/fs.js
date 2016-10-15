import { promisifyAll } from "bluebird"
import fs from "graceful-fs"
import mkdirp from "mkdirp"

fs.mkdirp = mkdirp

export default promisifyAll(fs)
