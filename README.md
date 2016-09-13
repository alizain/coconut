# Catalyst

## Data/Content Files

The two currently supported formats are:
- Markdown
- YAML

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
import { Registry } from "@alizain/catalyst"

function Book({ node }) {
  return (
    <h1>{node.title}</h1>
  )
}

Registry.add("book", Book)
```

## References

With the underlying data model, you can reference files within other files! Yipeee!! Let's demonstrate with an example:

**data/authors/muju**
``` yaml
title: Muju
```

**data/content/shasekishu/index.yaml**
``` yaml
title: Shasekishū
author: "*/authors/muju"
type: book
```

**layouts/Book.js**
``` javascript
function Book({ node }) {
  return (
    <h1>{node.title}</h1>
    <p className="author">{node.author.title}</p>
  )
}
```

## Folders as Nodes

Folders can be nodes with data too! Either use an `index` file inside the folder or use a file with the exact same name as a sibling to the folder

**data/content/shasekishu/index.yaml**
``` yaml
title: Shasekishū
```

**data/content/shasekishu.yaml**
``` yaml
author: "*/authors/muju"
```

**in memory**
``` javascript
{
  title: "Shasekishū",
  author: {
    title: "Muju"
  },
  children: { }   // the files in this directory
}
```

## Inheritance

All children of a node can inherit certain properties from a common place. The usual use-case of this is when modelling collections of content, such as koans in a book

The implementation will look at any files named `common` in a folder by default. This can be changed in the config.

**data/content/shasekishu/common.yaml**
``` yaml
author: "*/authors/muju"
```

**data/content/shasekishu/a-cup-of-tea.md**
``` markdown
---
title: A Cup of Tea
---

Twenty monks and one nun, who was named Eshun, were practicing meditation with a certain Zen master.

Eshun was very pretty even though her head was shaved and her dress plain. Several monks secretly fell in love with her. One of them wrote her a love letter, insisting upon a private meeting.

Eshun did not reply. The following day the master gave a lecture to the group, and when it was over, Eshun arose. Addressing the one who had written to her, she said: "If you really love me so much, come and embrace me now."
```

**in memory**
``` javascript
{
  title: "A Cup of Tea",
  author: {
    title: "Muju"
  },
  parent: ...
  body: ...
}
```

## Config

```javascript
{
  data: "./data",         // all content/data
  layouts: "./layouts",   // all React layout components
  dist: "./dist",         // where the compiled HTML goes
  inheritFrom: "common"   // file containing shared props for all sibling nodes"
}
```

## Developing

### fsdb Intermediate Representation

```javascript
{
  pathStr: 'data/authors',
  path: {
    root: '',
    dir: 'data',
    base: 'authors',
    ext: '',
    name: 'authors'
  },
  isFile: false,
  isDirectory: true,
  children: [ Object, ... ],
  data: {},  // everything should be here
  inheritance: {}, // exactly like data, except used as a proxy middleman between the parent and their children
}
```
