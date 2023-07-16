import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
 
  endpoints: (builder) => ({
  
    addBook: builder.mutation({
      query: ( data ) => ({
        url: '/book',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ["Books"] 
    }),
    getBooks: builder.query({
      query: () => ({
        url: '/books',
        method: 'GET',
        
      }), 
      providesTags:["Books"]      
    }),

    singleBook: builder.query({
        query: (id) => `/book/details/${id}`,
        providesTags:["Books"]     
      }),
    updateBook: builder.mutation({
        query: ({id,...bookData})=> ({
        url: `/book/${id}`,
        method: 'PATCH',
        body:bookData
        }),
        invalidatesTags: ["Books"] 
        
    }),
  
   
  }),
});

export const {
useAddBookMutation,
useGetBooksQuery,
useSingleBookQuery,
useUpdateBookMutation
} = bookApi;
