import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"
import unocss from 'unocss/vite'
import {presetUno} from 'unocss'
import {presetDaisy} from 'unocss-preset-daisy-cjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    unocss({
			presets: [presetUno(), presetDaisy()],
		}),
  ],
})
