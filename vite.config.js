import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  esbuild: {
    // Ensure .js files with JSX are handled properly
    loader: "jsx",
    include: [/src\/.*\.[jt]sx?$/], // Ensure it applies to JS and JSX files
    exclude: [],
  },
})
