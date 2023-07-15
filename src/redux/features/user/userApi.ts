import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
  
    register: builder.mutation({
      query: ( credentials ) => ({
        url: '/register',
        method: 'POST',
        body: credentials,
      }),       
    }),
    login: builder.mutation({
        query: (credentials) => ({
          url: '/login',
          method: 'POST',
          body: credentials,
        }),
      }),
   
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation
} = productApi;
