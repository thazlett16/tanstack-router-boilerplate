import { beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, screen } from '@testing-library/react';

import { renderWithRouter } from '~/utils';

beforeEach(() => {
    vi.resetAllMocks();
    cleanup();
    localStorage.clear();
    window.history.replaceState(null, 'root', '/');
});

describe('routes/_public/route.tsx', () => {
    test.skip('load route', async () => {
        renderWithRouter();

        expect(await screen.findByText('Hello "/_public"!')).toBeInTheDocument();
    });
});
