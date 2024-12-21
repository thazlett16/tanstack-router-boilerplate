import { useDeferredValue } from 'react';
import {
    type DefaultError,
    type QueryKey,
    type UseSuspenseQueryOptions,
    useSuspenseQuery,
} from '@tanstack/react-query';
import { useDeepCompareMemo } from 'use-deep-compare';
import { useSpinDelay } from 'spin-delay';

export function useSuspenseQueryDeferred<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
>({
    queryKey: rawQueryKey,
    ...options
}: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>) {
    const deepCompareQueryKey = useDeepCompareMemo(
        () => rawQueryKey,
        [rawQueryKey],
    );

    const deferredQueryKey = useDeferredValue(deepCompareQueryKey);

    const query = useSuspenseQuery({
        ...options,
        queryKey: deferredQueryKey,
    });

    const isSuspending = useSpinDelay(deepCompareQueryKey !== deferredQueryKey);

    return { ...query, isSuspending };
}
