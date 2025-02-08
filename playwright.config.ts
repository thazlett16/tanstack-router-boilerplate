import { defineConfig, devices } from '@playwright/test';

const PORT = 35678;
const baseURL = `http://localhost:${PORT}`;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './e2e',

    reporter: [['line']],

    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,

    use: {
        baseURL,
    },

    webServer: {
        command: `VITE_SERVER_PORT=${PORT} pnpm build && VITE_SERVER_PORT=${PORT} pnpm serve --port ${PORT}`,
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        stdout: 'pipe',
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },

        /* Test against mobile viewports. */
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 6'] },
        },

        /* Test against branded browsers. */
        {
            name: 'Microsoft Edge',
            use: { ...devices['Desktop Edge'], channel: 'msedge' },
        },
        {
            name: 'Google Chrome',
            use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        },
    ],
});
