import path from 'node:path';

import { defineConfig } from 'vite';

import { default as tsConfigPathsPluginVite } from 'vite-plugin-tsconfig-paths';
import { default as tanStackRouterPluginVite } from 'vite-plugin-tanstack-react-router/vite';
import { default as reactPluginVite } from 'vite-plugin-react';

export default defineConfig({
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
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@test': path.resolve(__dirname, './test'),
            '@e2e': path.resolve(__dirname, './e2e'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://pokeapi.co',
                changeOrigin: true,
            },
        },
    },
});
