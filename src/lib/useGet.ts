import useSWR, { SWRConfiguration } from "swr";
import request from "@/lib/request";

const fetcher = (url: string) => request.get(url).then((res) => res.data);

export const swrGlobalConfig: SWRConfiguration = {
  fetcher: fetcher,
  revalidateOnFocus: false,
  dedupingInterval: 5000,
};

// GET request hook - works for both authenticated and unauthenticated routes
// Automatically includes Bearer token if user is authenticated
export const useGet = (url: string | null, options?: SWRConfiguration) => {
  return useSWR(url, fetcher, {
    ...swrGlobalConfig,
    ...options,
  });
};
