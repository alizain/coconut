import fsdb from "./fsdb"
import load from "./render/load"
import write from "./render/write"
import { renderTree } from "./render"
import { Registry } from "./registry"

export async function once(config) {
  if (!config) { return }
  try {
    let root = await fsdb(config)
    await load(config.layouts)
    let files = renderTree(root, root, Registry, config.dist)
    await write(config.dist, files)
  } catch (err) {
    console.error(err)
  }
}

export default once
