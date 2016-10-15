import { resolve } from "path"

export default {
  dataDir: {
    description: "the folder that contains all content/data",
    defaultValue: "./data",
    transform: val => resolve(val)
  },
  layoutDir: {
    description: "the folder that contains all React layout components",
    defaultValue: "./layouts",
    transform: val => resolve(val)
  },
  distDir: {
    description: "the folder to output all compiled HTML",
    defaultValue: "./dist",
    transform: val => resolve(val)
  },
  commonFile: {
    description: "file containing shared props for all sibling nodes",
    defaultValue: "common"
  },
  defaultLayout: {
    description: "fallback layout for nodes"
  }
}
