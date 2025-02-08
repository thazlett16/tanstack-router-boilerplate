import { useDeferredValue } from 'react';

import type { DefaultError, QueryKey, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useDeepCompareMemo } from 'use-deep-compare';
import { useSpinDelay } from 'spin-delay';

/**
 * This hook is modeled after the above blog
 * https://www.teemutaskula.com/blog/exploring-query-suspense
 */
export function useSuspenseQueryDeferred<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
>({ queryKey: rawQueryKey, ...options }: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>) {
    const deepCompareQueryKey = useDeepCompareMemo(() => rawQueryKey, [rawQueryKey]);

    const deferredQueryKey = useDeferredValue(deepCompareQueryKey);

    const query = useSuspenseQuery({
        ...options,
        queryKey: deferredQueryKey,
    });

    const isSuspending = useSpinDelay(deepCompareQueryKey !== deferredQueryKey);

    return { ...query, isSuspending };
}
