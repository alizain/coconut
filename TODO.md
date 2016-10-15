## Code

- Add logging
- Extract fsdb and write compatibility layer with GraphQL

## Tooling

- Make it easier to get started (more batteries included), especially need a better CSS/images story, perhaps with webpack? We can include a `coconut expose webpack` command to externalize the webpack config outside of coconut. There also should be a way to make sure that we can use postcss, scss, or less.

## Misc

- Write blog post

## Inheritance

Think about putting everything inside `node.data` so that you can offer full inheritance as a config setting. With this, you can also combine properties that are non-inheritable or that are only inheritable with some sort of indicator.

**Property Flags**

```javascript
// don't inherit
{
  "<prop": 123
}
// only inherit
{
  ">prop": 456
}
```

**Config Settings**

```javascript
{
  "inheritance": "simple" | "complete"
}
```
