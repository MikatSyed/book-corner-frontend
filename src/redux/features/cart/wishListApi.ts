import { api } from '@/redux/api/apiSlice';

const wishListApi = api.injectEndpoints({
 
  endpoints: (builder) => ({
  
    addToWishList: builder.mutation({
        query: (item) => ({
          url: '/wishlist',
          method: 'POST',
          body: item,
        }),
        invalidatesTags: ["WishlistBook"] 
      }),
    getWistList: builder.query({
        query: () => '/wishlist',
        providesTags:["WishlistBook"] 
      }),
    removeFromWishList: builder.mutation({
        query: (itemId) => ({
          url: `/wishlist/${itemId}`,
          method: 'DELETE',    
        }),      
        invalidatesTags:["WishlistBook"] 
      }),
   
  }),
});

export const {
useAddToWishListMutation,
useGetWistListQuery,
useRemoveFromWishListMutation
} = wishListApi;