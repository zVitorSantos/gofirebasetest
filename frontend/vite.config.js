import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

export default defineConfig({
  plugins: [vue()],
});
