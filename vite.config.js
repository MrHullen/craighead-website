import { sveltekit } from "@sveltejs/kit/vite"

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },
  kit: {
    vite: {
        ssr:{
            noExternal: ['chart.js']
        }
    }
}
}

export default config
