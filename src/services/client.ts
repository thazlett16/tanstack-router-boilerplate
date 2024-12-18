import { initClient, tsRestFetchApi } from '@ts-rest/core';

import { rootContract } from '@/services/contracts/_root.contract';
import { API_BASE_URL } from '@/util/constants';

export const apiClient = initClient(rootContract, {
    baseUrl: API_BASE_URL,
    throwOnUnknownStatus: true,
    validateResponse: true,
    api: async (args) => {
        return tsRestFetchApi(args);
    },
});
