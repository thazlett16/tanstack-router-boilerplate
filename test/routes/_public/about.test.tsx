import { beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, screen } from '@testing-library/react';

import { renderWithRouter } from '~/utils';

beforeEach(() => {
    vi.resetAllMocks();
    cleanup();
    localStorage.clear();
    window.history.replaceState(null, 'root', '/about');
});

describe('routes/_public/about.tsx', () => {
    test.skip('load page', async () => {
        renderWithRouter();

        expect(await screen.findByText('Hello "/_public/about"!')).toBeInTheDocument();
    });
});
