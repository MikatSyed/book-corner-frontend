import Footer from "@/layouts/Footer";
import { useGetLatestBooksQuery } from "@/redux/features/book/bookSlice";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import { IBook } from "@/types/globalTypes";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addTowishList } from "@/redux/features/cart/wishlistSlice";
import { toast } from "react-hot-toast";
import { useAddToWishListMutation } from "@/redux/features/cart/wishListApi";
import { useEffect } from "react";
export default function Home() {
  const [addToWishList,{isSuccess,isError,error}] = useAddToWishListMutation();
  const { data } = useGetLatestBooksQuery(undefined)
  const { user } = useAppSelector((state) => state.user);
  const books = data?.data;

  const dispatch = useAppDispatch()
  const handleAddBook = (book: IBook) => {
    const newWishList = {
      bookId: book._id,
      title : book.title,
      image: book.image,
      author: book.author,
      genre: book.genre,
      price: book.price,
      wishlistedBy: user.email
    }
    addToWishList(newWishList)
  };
useEffect(()=>{
if(isSuccess){
 toast.success('Added to wishlist',{id:"addToWishList"})
}
if(isError){
 toast.error('Already Added in wishlist',{id:"addToWishList"})
}
},[isSuccess,isError])
  return (
    <>
     <section 
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10 mt-10 mb-5">

  
  {books?.map((book:IBook)=> <>
  
    <Card className="w-full max-w-[25rem] h-[35rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={book.image}
         className="h-[20rem] w-full"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <HeartIcon className="h-6 w-6" />
        </IconButton>
      </CardHeader>
      <CardBody>
      <Typography color="gray">
          {book.author}
  
        </Typography>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
           {book.title}
          </Typography>
          
          <Typography
            className="flex items-center gap-1.5 font-normal text-blue-300"
          >
           {book.publicationDate}
          </Typography>
          
        </div>
       
        <Typography color="gray" className="text-gray-600 mr-3 uppercase text-xs ">
          {book.genre}
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="Book Details Page">
          <Link to={`/book/${book._id}`}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
             Details
            </span>
            </Link>
          </Tooltip>
          <Tooltip content="Wishlist Page">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70" onClick={() => handleAddBook(book)}>
              Wistlist
            </span>
          </Tooltip>
          <Tooltip content="Readinglist Page">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
             Readinglist
            </span>
          </Tooltip>
       
      
        </div>
      </CardBody>
    </Card>
 
  </>)}

    

</section>
      <Footer />
    </>
  );
}
