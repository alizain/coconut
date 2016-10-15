import fsdb from "@alizain/fsdb"
import requireDir from "./helpers/requireDir"
import { Registry } from "./registry"
import write from "./renderer/write"
import { renderArr } from "./renderer"

export async function once(config) {
  if (!config) { return }
  try {
    await requireDir(config.layoutDir)
    let nodeArr = await fsdb(config.dataDir, config)
    let files = renderArr(nodeArr, Registry)
    await write(config.distDir, files)
  } catch (err) {
    throw err
  }
}

export default once
