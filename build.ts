import tailwind from "bun-plugin-tailwind";

// Static production build. The output in dist/ is a single-page app: configure
// your host to serve dist/index.html for unknown paths so deep links work.
const result = await Bun.build({
  entrypoints: ["./src/index.html"],
  outdir: "./dist",
  plugins: [tailwind],
  minify: true,
  sourcemap: "linked",
  target: "browser",
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  env: "BUN_PUBLIC_*",
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

for (const output of result.outputs) {
  console.log(`  ${output.path.replace(process.cwd() + "/", "")}  ${(output.size / 1024).toFixed(1)} KB`);
}
