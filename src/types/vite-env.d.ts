/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly EXAMPLE_STRING?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
