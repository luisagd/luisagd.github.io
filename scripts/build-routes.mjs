import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const dist = new URL("../dist/", import.meta.url);
const shell = await readFile(new URL("index.html", dist), "utf8");
const pagesRoot = fileURLToPath(new URL("../src/pages/", import.meta.url));

async function getPageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await getPageFiles(path)));
    else if (/\.(js|jsx)$/.test(entry.name)) files.push(path);
  }

  return files;
}

const routes = (await getPageFiles(pagesRoot))
  .map((file) => relative(pagesRoot, file).replaceAll("\\", "/"))
  .map((file) => file.replace(/\.(js|jsx)$/, ""))
  .map((route) => (route === "index" ? "" : route.replace(/\/index$/, "")))
  .filter((route) => route && route !== "404");

for (const route of routes) {
  const output = join(dist.pathname, route, "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, shell);
}

await writeFile(new URL("404.html", dist), shell);
await cp(new URL("../CNAME", import.meta.url), new URL("CNAME", dist));
