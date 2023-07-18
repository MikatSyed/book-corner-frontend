import { api } from '@/redux/api/apiSlice';

const readingListApi = api.injectEndpoints({
 
  endpoints: (builder) => ({
  
    addToReadingList: builder.mutation({
        query: (item) => ({
          url: '/readinglist',
          method: 'POST',
          body: item,
        }),
        invalidatesTags: ["readingListBook"] 
      }),
    getReadingList: builder.query({
        query: () => '/readinglist',
        providesTags:["readingListBook"] 
      }),
    updateReadingList: builder.mutation({
        query: ({id,...data}) => ({
          url: `book/readinglist/${id}`,
          method: 'PATCH',
          body: data
        }),
        invalidatesTags: ["readingListBook"] 
      }),
   
   
  }),
});

export const {
useAddToReadingListMutation,
useGetReadingListQuery,
useUpdateReadingListMutation
} = readingListApi;