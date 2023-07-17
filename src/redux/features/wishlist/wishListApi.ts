import { api } from '@/redux/api/apiSlice';

const wishListApi = api.injectEndpoints({
 
  endpoints: (builder) => ({
  
    addToWishList: builder.mutation({
        query: (item) => ({
          url: '/wishlist',
          method: 'POST',
          body: item,
        }),
      }),
     getWistList: builder.query({
        query: () => '/wishlist',
      }),
   
  }),
});

export const {
useAddToWishListMutation,
useGetWistListQuery
} = wishListApi;
