/// <reference types="vite/client" />
/// <reference types="vite-plugin-svg-icons/client" /> 

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: ComponentOptions | ComponentOptions['setup']
    export default component
}

