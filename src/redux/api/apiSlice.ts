import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://book-corner-backend-mikatsyed.vercel.app/' }),
  tagTypes: ['Books','Comments','WishlistBook','readingListBook'],
  endpoints: () => ({}),
});
