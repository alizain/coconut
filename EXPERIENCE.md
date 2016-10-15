# The Experience

Everything should be bundled in, with `externalize` commands to self-configure some components

## Isomorphic Rendering - The Whole Story

For an ideal developer/user experience here's what we need:

**Developer**

- Instant, hot reloading, of all files
- Babel compatibility
- Choice of CSS processors (postcss, sass, less), fully configurable, and with the ability to mix and match?
- Blur the lines between static websites and interactive apps

**Client**

- Fully static HTML pages for non-JS environments
- Fallback for interactive client-side renders when JS disabled
- React/React-Router in JS environments with blazing fast page transitions
- Keep download sizes to an absolute minimum at all times
- Enhance with service workers as required

### The How

To really achieve this, we need to make 1 assumption: everything must flow through javascript! It doesn't matter if you write postcss, use gifs, or some new fangled thing, everything must go through javascript.

This way, we can use webpack to resolve dependencies for each page at compile time, and intelligently bundle them together.

We're going to need multiple streams

## Prior Art

Phenomic
Gatsby
