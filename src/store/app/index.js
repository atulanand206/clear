import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = `${process.env.REACT_APP_REST_SCHEME}://${process.env.REACT_APP_REST_HOST}${process.env.REACT_APP_SERVER_ENDPOINT_PREFIX}`;
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // prepareHeaders: (headers) => {
  //   const token = getCookie('token');
  //
  //   if (token) {
  //     headers.set('authorization', `Bearer ${token}`);
  //   }
  //   return headers;
  // }
  // prepareHeaders:
  // fetchFn: useFetch
});

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,

  endpoints: (builder) => ({
    profile: builder.query({
      query: () => 'profile',
    }),
  }),
});

export const { useProfileQuery } = apiSlice;

export default apiSlice;
