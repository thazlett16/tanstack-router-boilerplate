import { expect } from '@playwright/test';

import { test } from '@e2e/test-with-msw';

test.describe('Load Public Index page', () => {
    test('should show index page', async ({ page }) => {
        await page.goto('/');
        await expect(page.getByText('Default Pending Component')).toBeVisible();

        await expect(page.getByText('Hello "/_public"!')).toBeVisible();

        await expect(page.getByText('Hello "/_public/"!')).toBeVisible();
    });

    // test.only('if user fails to load', async ({ page, worker, http }) => {
    //     await worker.use(
    //         http.get('/api/users', async () => {
    //             await delay(250);
    //             return new HttpResponse(null, {
    //                 status: 403,
    //             });
    //         }),
    //     );
    // });
});
