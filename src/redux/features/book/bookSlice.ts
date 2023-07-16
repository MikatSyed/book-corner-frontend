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
    updateBook: builder.mutation({
        query: ({id,...bookData})=> ({
        url: `/book/${id}`,
        method: 'PATCH',
        body:bookData
        }),
        
    }),
  
   
  }),
});

export const {
useAddBookMutation,
useGetBooksQuery,
useSingleBookQuery,
useUpdateBookMutation
} = bookApi;
