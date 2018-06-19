import path from "path";
import Twig from "twig";

// Settings
const TEMPLATE_FOLDER = path.resolve(__dirname, "..", "templates");

function render(template: string, data: Object): void {
  const fileName = path.resolve(TEMPLATE_FOLDER, `${template}.twig`);

  Twig.renderFile(fileName, data, (err, html) => {
    console.log(html);

    if (err) {
      console.error(err);
    }
  });
}

export { render };
