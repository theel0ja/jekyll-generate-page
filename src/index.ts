import path from "path";
import Twig, { CompileOptions } from "twig";
import IRenderData from "./interfaces/IRenderData";

// Settings

function render(template: string, data: IRenderData) {
  return new Promise((resolve, reject) => {
    const TEMPLATE_FOLDER = path.resolve(__dirname, "..", "templates");

    const fileName = path.resolve(TEMPLATE_FOLDER, `${template}.twig`);

    Twig.renderFile(fileName, data as any, (err, output: string) => {
      resolve(output);

      if (err) {
        reject(err);
      }
    });
  });
}

export { render };
