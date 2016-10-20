import fsdb from "@alizain/fsdb"
import requireDir from "./helpers/requireDir"
import { Registry } from "./registry"
import render from "./output/render"
import write from "./output/write"
import views from "./views"

export async function once(config) {
  if (!config) { return }
  try {
    await requireDir(config.layoutDir)
    let nodeArr = await fsdb(config.dataDir, config)
    let files = render(nodeArr, Registry, views)
    await write(config.distDir, files)
  } catch (err) {
    throw err
  }
}

export default once
