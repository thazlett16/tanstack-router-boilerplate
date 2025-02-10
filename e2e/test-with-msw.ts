import { test as playwrightTest } from '@playwright/test';
import { http } from 'msw';
import type { MockServiceWorker } from 'playwright-msw';
import { createWorkerFixture } from 'playwright-msw';

import { handlers } from '@mock/handler';

export const test = playwrightTest.extend<{
    worker: MockServiceWorker;
    http: typeof http;
}>({
    worker: createWorkerFixture(handlers),
    http,
});
