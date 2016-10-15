import { promisifyAll } from "bluebird"
import fs from "fs-extra"

export default promisifyAll(fs)
