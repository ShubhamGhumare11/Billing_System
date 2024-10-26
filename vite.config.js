// import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react' //comment beause we are using  '@vitejs/plugin-react-swc';
// import react from '@vitejs/plugin-react-swc';


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     loader: {
//       '.js': 'jsx',
//     },
//   },
// })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';

// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     loader: 'jsx',
//     include: /node_modules\/.*\.js$/, // Specify JSX for node_modules if needed
//   },
// });


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     loader: 'jsx',           // Treat .js files as .jsx
//     include: /src\/.*\.js$/, // Only include files in the src directory
//   },
// // })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     // Use loader for .js files only in the src directory
//     loader: {
//       '.js': 'jsx', // Treat .js files as .jsx
//     },
//   },
//   resolve: {
//     alias: {
//       // Add any other aliases here if needed
//     },
//   },
//   build: {
//     rollupOptions: {
//       external: [
//         'stylis', // Exclude stylis from bundling
//       ],
//       output: {
//         // This can help to resolve any issues with stylis and bundling
//         globals: {
//           stylis: 'stylis', // Specify global variable for stylis
//         },
//       },
//     },
//   },
//   server: {
//     // Prevent Vite from processing files in node_modules
//     watch: {
//       ignored: ['**/node_modules/**'],
//     },
//   },
// });



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: {
      '.js': 'jsx',
    },
    include: /src\/.*\.jsx?$/, // Include .js and .jsx files from src
    exclude: /node_modules/, // Explicitly exclude node_modules
  },
  resolve: {
    alias: {
      // Add any other aliases here if needed
    },
  },
  build: {
    rollupOptions: {
      external: ['stylis'], // Exclude stylis from bundling
    },
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**'], // Ignore node_modules
    },
  },
});
