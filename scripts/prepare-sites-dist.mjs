import { cp, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const serverDir = path.join(dist, "server");
const openaiDir = path.join(dist, ".openai");
const hostingSource = path.join(root, ".openai", "hosting.json");
const hostingTarget = path.join(openaiDir, "hosting.json");
const indexHtml = await readText(path.join(dist, "index.html"));

async function readText(filePath) {
  const { readFile } = await import("node:fs/promises");
  return readFile(filePath, "utf8");
}

async function main() {
  await mkdir(serverDir, { recursive: true });
  await mkdir(openaiDir, { recursive: true });

  if (existsSync(hostingSource)) {
    await cp(hostingSource, hostingTarget);
  }

  await writeFile(
    path.join(serverDir, "index.js"),
    `const INDEX_HTML = ${JSON.stringify(indexHtml)};

const STATIC_EXTENSIONS = new Set([
  ".css",
  ".js",
  ".mjs",
  ".map",
  ".json",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
  ".ico",
  ".txt",
  ".woff",
  ".woff2",
]);

function contentType(pathname) {
  if (pathname.endsWith(".css")) return "text/css; charset=utf-8";
  if (pathname.endsWith(".js") || pathname.endsWith(".mjs")) return "text/javascript; charset=utf-8";
  if (pathname.endsWith(".json")) return "application/json; charset=utf-8";
  if (pathname.endsWith(".svg")) return "image/svg+xml";
  if (pathname.endsWith(".png")) return "image/png";
  if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) return "image/jpeg";
  if (pathname.endsWith(".webp")) return "image/webp";
  if (pathname.endsWith(".ico")) return "image/x-icon";
  if (pathname.endsWith(".woff")) return "font/woff";
  if (pathname.endsWith(".woff2")) return "font/woff2";
  return "application/octet-stream";
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const extension = url.pathname.includes(".") ? url.pathname.slice(url.pathname.lastIndexOf(".")) : "";

    if (STATIC_EXTENSIONS.has(extension) && env.ASSETS) {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return new Response(assetResponse.body, {
          status: assetResponse.status,
          headers: {
            ...Object.fromEntries(assetResponse.headers),
            "content-type": assetResponse.headers.get("content-type") || contentType(url.pathname),
          },
        });
      }
    }

    return new Response(INDEX_HTML, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-cache",
      },
    });
  },
};
`,
    "utf8",
  );
}

main();
