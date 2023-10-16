import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  endpoints: (builder) => ({
    getAboutInfo: builder.query({
      query: ({ lang }) => {
        const searchParams = new URLSearchParams({ lang });
        return `/about/lang?${searchParams.toString().toLowerCase()}`;
      },
    }),
    getSkills: builder.query({
      query: ({ lang }) => {
        const searchParams = new URLSearchParams({ lang });
        return `/skills/lang?${searchParams.toString().toLowerCase()}`;
      },
    }),
  }),
});

export const { useGetAboutInfoQuery, useGetSkillsQuery } = apiSlice;
