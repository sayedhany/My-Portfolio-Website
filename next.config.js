/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for deployment
  output: "export",
  trailingSlash: true,

  // Enable SWC minification for better performance
  swcMinify: true,

  // Compiler optimizations - will be ignored if Babel is used
  compiler: {
    // Enable styled-components SSR support
    styledComponents: true,
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimize images for static export
  images: {
    unoptimized: true, // Required for static export
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Note: `headers()` was removed to remain compatible with `output: "export"`.
  // For static deployments (Netlify), set HTTP headers in your platform config
  // (e.g. `netlify.toml`) instead of Next.js headers() when using `next export`.

  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    if (!dev && isServer) {
      config.output.webassemblyModuleFilename = "chunks/[id].wasm";
      config.plugins.push(new WasmChunksFixPlugin());
    }

    // Optimize bundle size
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": process.cwd(),
      };
    }

    return config;
  },
};

class WasmChunksFixPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap("WasmChunksFixPlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        { name: "WasmChunksFixPlugin" },
        (assets) =>
          Object.entries(assets).forEach(([pathname, source]) => {
            if (!pathname.match(/\.wasm$/)) return;
            compilation.deleteAsset(pathname);

            const name = pathname.split("/")[1];
            const info = compilation.assetsInfo.get(pathname);
            compilation.emitAsset(name, source, info);
          })
      );
    });
  }
}

module.exports = nextConfig;
