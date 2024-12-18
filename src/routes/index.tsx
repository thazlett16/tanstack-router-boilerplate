import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: HomeComponent,
});

function HomeComponent() {
    return (
        <div>
            <h3>Welcome Home! Checkout the pokemon!</h3>
        </div>
    );
}
