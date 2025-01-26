import { initClient, tsRestFetchApi } from '@ts-rest/core';

import { rootContract } from '@/services/contracts/_root.contract';

export const apiClient = initClient(rootContract, {
    baseUrl: '/api',
    throwOnUnknownStatus: true,
    validateResponse: true,
    api: async (args) => {
        return tsRestFetchApi(args);
    },
});
