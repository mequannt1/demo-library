export declare function useFetch<T>(url: string): {
    data: T | null;
    loading: boolean;
    error: string | null;
};
