"use strict";

const { join } = require("path");
const pdf = require("@fusuma/task-pdf");

const [, , output] = process.argv;

if (!output) process.exit(1);

(async () => {
  const base = join(process.cwd(), output);
  const port = 3455;

  await pdf(join(base, "dist"), join(base, "slide.pdf"), port);
})();
