import path from 'node:path';

import { defineConfig } from 'vite';

import { default as reactPluginVite } from 'vite-plugin-react';
import { TanStackRouterVite as tanStackRouterPluginVite } from 'vite-plugin-tanstack-react-router/vite';
import { default as tsConfigPathsPluginVite } from 'vite-plugin-tsconfig-paths';

export default defineConfig({
    plugins: [
        tsConfigPathsPluginVite({
            projects: ['./tsconfig.json'],
        }),
        tanStackRouterPluginVite({
            autoCodeSplitting: true,
            generatedRouteTree: './src/route-tree.gen.ts',
            quoteStyle: 'single',
            routesDirectory: './src/routes',
            semicolons: true,
        }),
        reactPluginVite({}),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
