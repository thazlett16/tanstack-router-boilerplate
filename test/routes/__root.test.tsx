import { beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, screen } from '@testing-library/react';

import { renderWithRouter } from '~/utils';

beforeEach(() => {
    vi.resetAllMocks();
    cleanup();
    localStorage.clear();
    window.history.replaceState(null, 'root', '/');
});

describe('routes/__root.tsx', () => {
    test('load root elements', async () => {
        renderWithRouter();

        expect(await screen.findByText('Default Pending Component')).toBeInTheDocument();

        // screen.debug(await screen.findByText('Home'));

        expect(await screen.findByText('Home')).toBeInTheDocument();
    });
});
