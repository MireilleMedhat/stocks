import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BASE_URL } from '../constants';

export const stockApi = createApi({
  reducerPath: 'stockApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    searchStocks: builder.query({
      query: ({ searchText, nextUrl }: { searchText: string; nextUrl: string | null }) => {
        return {
          url: nextUrl || BASE_URL,
          params: {
            search: searchText ? encodeURIComponent(searchText) : undefined,
            apiKey: API_KEY,
          }
        }
      },
      transformResponse: (response: any) => ({
        results: response.results,
        nextUrl: response.next_url,
      }),
    }),
  }),
});

export const { useSearchStocksQuery } = stockApi;
