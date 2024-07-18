import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: '/public_html/', // This sets the base path for your assets
    define: {
      "process.env": env,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'public_html', // This sets the output directory for your build
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
      chunkSizeWarningLimit: 2000,
    },
  };
});

// import path from "path";
// import react from "@vitejs/plugin-react";
// import { defineConfig, loadEnv } from "vite";

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");
//   return {
//     define: {
//       "process.env": env,
//     },
//     plugins: [react()],
//     resolve: {
//       alias: {
//         "@": path.resolve(__dirname, "./src"),
//       },
//     },
//     build: {
//       rollupOptions: {
//         output: {
//           manualChunks: {
//             // Customize chunking strategy, for example:
//             vendor: ['react', 'react-dom'],
//           },
//         },
//       },
//       chunkSizeWarningLimit: 2000,  // Adjust the warning limit as needed
//     },
//   };
// });
