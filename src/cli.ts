import { render } from ".";

/**
 * HTML
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
    // tslint:disable-next-line:no-console
    console.log(output);
  })
  .catch((err) => {
    // tslint:disable-next-line:no-console
    console.error(err);
  });
