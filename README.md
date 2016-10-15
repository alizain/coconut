# Coconut

A simple React & [fsdb](https://github.com/alizain/fsdb) based static site generator.

Check out the `sample` directory for a simple example.

## Data/Content Files

The two currently supported formats are:
- Markdown
- YAML
- JSON

For `md` files, front-matter is treated as root level data, and all content is inside the data key

``` Markdown
---
title: The Obliteration of Man
---

I am God
```

Which gets compiled to

``` javascript
{
  title: "The Obliteration of Man",
  body: "\nI am God",
  parent: ...
}
```

## Layouts

The entire layouts folder is required on startup. From there, all registered components are called with their respective nodes and rendered (ie. all nodes with `type: book` get rendered by the following React component)

**layouts/Book.js**
```javascript
import { Registry } from "@alizain/coconut"

function Book({ node }) {
  return (
    <h1>{node.title}</h1>
  )
}

Registry.set("book", Book)
```

You can also set a default layout to use for nodes:

```javascript
Registry.setDefault(Page)
```

Node layout is determined by the `layout` property, then by the `type` property. So a node with the following keys, will be rendered using the `listing` renderer.

```javascript
{
  layout: "listing",
  type: "collection"
}
```

## Config

```javascript
{
  dataDir: "./data",         // content/data directory
  layoutDir: "./layouts",    // React component directory
  distDir: "./dist",         // compiled HTML output directory
  commonFile: "common"       // shared props file
}
```
