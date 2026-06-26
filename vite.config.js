import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    module:{
      localsConvention: 'camelCase', 
      //lo que hace esto es que al importar los estilos en el componente, las clases se pueden usar 
      //como camelCase en lugar de kebab-case. Por ejemplo, si tienes una clase CSS llamada .my-class, podrías usarla 
      // como styles.myClass en tu componente React. 
    },
  },
});
