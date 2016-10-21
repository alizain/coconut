import slug from "slug"

export default function slugify(text) {
  return slug(text, { lower: true })
}
