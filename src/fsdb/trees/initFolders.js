import p from "path"
import Promise from "bluebird"
import mapRecurse from "../mapRecurse"
import { mergeWithObj } from "../mergeProps"

const fs = Promise.promisifyAll(require("fs"))

export default function(absRoot) {

  return mapRecurse(async (absPath) => {

    let relPath
    if (!absPath) {
      absPath = absRoot
      relPath = ""
    } else {
      relPath = p.relative(absRoot, absPath)
    }

    let absParsed = p.parse(absPath)
    let relParsed = p.parse(relPath)

    let stat = await fs.statAsync(absPath)
    let self = {
      pathStr: absPath,
      path: absParsed,
      isFile: stat.isFile(),
      isDirectory: stat.isDirectory(),
      data: mergeWithObj({}, {
        slug: relParsed.name,
        path: relParsed.dir.split("/")
      }),
      inheritance: undefined
    }

    if (self.isDirectory) {
      self.children = await fs.readdirAsync(absPath)
        .map(pathStr => p.join(absPath, pathStr))
    }

    return self

  })

}
