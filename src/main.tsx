import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { EntryApp } from '@/entry-app';
import { EntryAppProviders } from '@/providers/entry-app-providers';

import '@/main.css';

const rootElement = document.getElementById('app');

if (!rootElement) {
    throw new Error('Document root not found');
}

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <EntryAppProviders>
            <EntryApp />
        </EntryAppProviders>
    </StrictMode>,
);
