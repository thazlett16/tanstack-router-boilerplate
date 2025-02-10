import { resolve } from 'node:path';

import { defineConfig } from 'vite';

import { default as tsConfigPathsPluginVite } from 'vite-plugin-tsconfig-paths';
import { default as tanStackRouterPluginVite } from 'vite-plugin-tanstack-react-router/vite';
import { default as reactPluginVite } from 'vite-plugin-react';

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@e2e': resolve(__dirname, './e2e'),
            '@mock': resolve(__dirname, './mock'),
            '@test': resolve(__dirname, './test'),
        },
    },
    build: {
        chunkSizeWarningLimit: 800,
    },
    plugins: [
        tsConfigPathsPluginVite({
            projects: ['./tsconfig.json'],
        }),
        tanStackRouterPluginVite({
            autoCodeSplitting: true,
            generatedRouteTree: './src/route-tree.gen.ts',
            routesDirectory: './src/routes',
            quoteStyle: 'single',
            semicolons: true,
        }),
        reactPluginVite({
            babel: {
                plugins: [
                    [
                        'babel-plugin-react-compiler',
                        {
                            target: '19',
                        },
                    ],
                ],
            },
        }),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'https://pokeapi.co',
                changeOrigin: true,
            },
        },
    },
});
