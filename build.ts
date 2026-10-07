import tailwind from "bun-plugin-tailwind";
import { rm } from "node:fs/promises";

// Static production build into dist/.
//
// BASE_PATH is the folder the site is served from. GitHub Pages serves this repo at
// https://halla-bol-org.github.io/impress-react/, so the deploy workflow builds with
// BASE_PATH=/impress-react/. Leave it unset ("/") for local builds or a custom domain.
const base = `/${(process.env.BASE_PATH ?? "").replace(/^\/+|\/+$/g, "")}/`.replace("//", "/");

await rm("./dist", { recursive: true, force: true });

const result = await Bun.build({
  entrypoints: ["./src/index.html"],
  outdir: "./dist",
  plugins: [tailwind],
  minify: true,
  sourcemap: "linked",
  target: "browser",
  publicPath: base,
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  env: "BUN_PUBLIC_*",
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

// Tell the router which folder it lives in (read in App.tsx).
const indexFile = Bun.file("./dist/index.html");
const html = (await indexFile.text()).replace("<head>", `<head><meta name="base-path" content="${base}">`);
await Bun.write(indexFile, html);

// GitHub Pages serves 404.html for unknown paths; a copy of the app makes deep
// links such as /download and /privacy-policy work on refresh.
await Bun.write("./dist/404.html", html);
// Serve the files as-is, without Jekyll processing.
await Bun.write("./dist/.nojekyll", "");

for (const output of result.outputs) {
  console.log(`  ${output.path.replace(process.cwd() + "/", "")}  ${(output.size / 1024).toFixed(1)} KB`);
}
console.log(`  + dist/404.html, dist/.nojekyll  (base path: ${base})`);
