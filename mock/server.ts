import { setupServer } from 'msw/node';

import { handlers } from '@mock/handler';

export const server = setupServer(...handlers);
