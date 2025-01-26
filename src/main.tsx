import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import EntryApp from './entry-app';
import './main.css';

const rootElement = document.getElementById('app');

if (!rootElement) {
    throw new Error('Document root not found');
}

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <EntryApp />
    </StrictMode>,
);
