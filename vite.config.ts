import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // 1. Импортируйте модуль path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // 2. Добавьте секцию resolve
    alias: {
      // 3. Определите алиасы
      '@': path.resolve(__dirname, './src'),
      // Вы можете добавить и другие алиасы для конкретных слоев FSD, если хотите
      // Например, если все ваши страницы лежат в src/pages
      'pages': path.resolve(__dirname, './src/pages'),
      'widgets': path.resolve(__dirname, './src/widgets'),
      'features': path.resolve(__dirname, './src/features'),
      'entities': path.resolve(__dirname, './src/entities'),
      'shared': path.resolve(__dirname, './src/shared'),
      // и так далее для других слоев FSD
    },
  },
});