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
   
  }),
});

export const {
useAddToWishListMutation
} = wishListApi;
