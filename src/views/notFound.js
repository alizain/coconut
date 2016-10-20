// render the 404 layout without any data

export default function notFound(nodeArr, registry) {
  let func = registry.resolve("NotFound")
  if (!func) { return [] }
  return [
    {
      path: "404.html",
      renderer: func,
      args: [{}]
    }
  ]
}
