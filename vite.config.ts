import { resolve } from 'path'
import { defineConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      // 여러 진입점은 객체 또는 배열로 지정할 수 있습니다.
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'apptive-passport-design',
      fileName: 'apptive-passport-design',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        dir: 'dist',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      }
    }
  },
  plugins: [dtsPlugin({
    rollupTypes: true,
    tsconfigPath: './tsconfig.app.json'
  })]
})
