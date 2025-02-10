import { initClient, tsRestFetchApi } from '@ts-rest/core';

import { rootContract } from '@/services/contracts/_root.contract';

export const apiClient = initClient(rootContract, {
    baseUrl: '/api',
    // This one should not be true.
    // We will handle this in our Error Narrowing
    // throwOnUnknownStatus: true,
    validateResponse: true,
    api: async (args) => {
        return tsRestFetchApi(args);
    },
});
