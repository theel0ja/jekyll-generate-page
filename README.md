# Jekyll generate page
Generate a Jekyll page.

## Links

* [NPM package](https://www.npmjs.com/package/jekyll-generate-page)
* [Documentation](https://theel0ja.info/jekyll-generate-page/)

## Example

```ts
import { render } from "jekyll-generate-page";

/**
 * HTML (or markdown)
 */
const html = `
<h1>About us</h1>
<p>Deserunt in et enim exercitation est voluptate est fugiat dolore amet sit amet.</p>
`;

/**
 * Render
 */
render("default", {
  jekyll: {
    layout: "page",
    permalink: "/about/",
    title: "About us",
  },
  html,
})
  .then((output) => {
    console.log(output);
  })
  .catch((err) => {
    console.error(err);
  });
```