## Spec

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
