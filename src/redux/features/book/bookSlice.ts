import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
  
    addBook: builder.mutation({
      query: ( data ) => ({
        url: '/book',
        method: 'POST',
        body: data,
      }),       
    }),
    getBooks: builder.query({
      query: () => ({
        url: '/books',
        method: 'GET',
        
      }),       
    }),

    singleBook: builder.query({
        query: (id) => `/book/details/${id}`,
      }),
  
   
  }),
});

export const {
useAddBookMutation,
useGetBooksQuery,
useSingleBookQuery
} = bookApi;
