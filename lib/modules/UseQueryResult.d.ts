import { QueryObserverResult } from '@tanstack/react-query';
export type UseQueryResult<TData, TError> = Pick<QueryObserverResult<TData, TError>, 'data' | 'error' | 'fetchStatus' | 'isError' | 'isFetched' | 'isFetchedAfterMount' | 'isFetching' | 'isLoading' | 'isRefetching' | 'isSuccess' | 'refetch'> & {
    isIdle: boolean;
    status: 'idle' | 'loading' | 'success' | 'error';
    internal: Pick<QueryObserverResult, 'dataUpdatedAt' | 'errorUpdatedAt' | 'failureCount' | 'isLoadingError' | 'isPaused' | 'isPlaceholderData' | 'isPreviousData' | 'isRefetchError' | 'isStale' | 'remove'>;
};
