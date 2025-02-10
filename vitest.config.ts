import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';
import packageJson from './package.json';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            name: packageJson.name,
            dir: './test',
            setupFiles: ['./test/setup.ts'],
            environment: 'jsdom',
            coverage: {
                enabled: true,
                provider: 'istanbul',
                include: ['./src/**/*'],
            },
            typecheck: {
                enabled: true,
            },
            restoreMocks: true,
        },
    }),
);
