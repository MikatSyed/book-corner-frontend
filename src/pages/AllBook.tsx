import { useGetBooksQuery, useSearchBooksQuery } from "@/redux/features/book/bookApi";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  IconButton,
  Checkbox,
} from "@material-tailwind/react";
import {
  HeartIcon,
} from "@heroicons/react/24/solid";
import { IBook } from "@/types/globalTypes";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { toast } from "react-hot-toast";
import { useAddToWishListMutation } from "@/redux/features/cart/wishListApi";
import { useEffect, useState } from "react";
import { useAddToReadingListMutation } from "@/redux/features/cart/readingListApi";
import { genreConstant } from "@/utils/filterConstant";
import { setGenre,setYearRange } from "@/redux/features/book/bookSlice";

const AllBook = () => {
  const dispatch = useAppDispatch();
    const { data:allBooks ,isFetching: isFetchingAllBooks} = useGetBooksQuery(undefined)
    const [addToWishList,{isSuccess,isError}] = useAddToWishListMutation();
    const [addToReadingList,{isSuccess:readingSucess,isError:readingError}] = useAddToReadingListMutation();
    const { user } = useAppSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');
    const {  isFetching: isFetchingSearchedBooks } = useSearchBooksQuery(searchTerm);
    const { genres,yearRange } = useAppSelector(state => state.book);
    console.log({yearRange});
    console.log(genres);
    let books;
    if (genres?.length !== 0 ) {
       
        books = allBooks?.data?.filter((book: { genre: string }) => genres?.includes(book?.genre));
        console.log(books?.data);
    }else if(yearRange !== 0){
        books = allBooks?.data?.filter(
        (item: { publicationYear: number }) => item.publicationYear > yearRange
      );
    }
     else {
        books = allBooks?.data;
    }
  
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };
  
      // books = searchTerm ? searchedBooks : allBooks;

    const handleAddWishListBook = (book: IBook) => {
      const newWishListBook = {
        bookId: book._id,
        title : book.title,
        image: book.image,
        author: book.author,
        genre: book.genre,
        price: book.price,
        wishlistedBy: user.email
      }
      addToWishList(newWishListBook)
    };
    const handleAddReadingListBook = (book: IBook) => {
      const newReadingListBook = {
        bookId: book._id,
        title : book.title,
        image: book.image,
        author: book.author,
        publicationDate: book.publicationDate,
        genre: book.genre,
        price: book.price,
        readinglistedBy: user.email,
        isPlanToRead: false,
        isReading: false,
        isFinished: false,
      }
      addToReadingList(newReadingListBook)
    };
  useEffect(()=>{
  if(isSuccess){
   toast.success('Added to wishlist',{id:"addToWishList"})
  }
  if(isError){
   toast.error('Already Added in wishlist',{id:"addToWishList"})
  }
  if(readingSucess){
   toast.success('Added to readinglist',{id:"addToReadingList"})
  }
  if(readingError){
   toast.error('Already Added in readinglist',{id:"addToReadingList"})
  }
  },[isSuccess,isError,readingSucess,readingError])



  const handleSetGenre = (value: string) => {
    dispatch(setGenre(value));
};

const [sliderValue, setSliderValue] = useState(2000); // Initial value for the slider

const handleSliderChange = (event:any) => {
  const value = event.target.value; // Get the value from the event object
  setSliderValue(value); 
  dispatch(setYearRange(value))
  console.log(value);// Update the state with the new value
};



    return (   
  <>
 <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search books..." />
      {isFetchingAllBooks || isFetchingSearchedBooks ? (
        <div>Loading...</div>
      ) : (
  <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div className="space-y-4">
                <h4>Genre :</h4>
                <div className="flex flex-wrap gap-2.5">
                    {genreConstant?.map(genre => (
                        <div className="px-2 py-1 bg-secondary/30 rounded-lg flex justify-center items-center gap-2">
                            <Checkbox
                                color="brown"
                                ripple={false}
                                containerProps={{ className: 'p-0' }}
                                onClick={() => handleSetGenre(genre)}
                            />
                            {genre}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="space-y-3 ">
          <h3>Publication Year</h3>
          <div className="max-w-xl">
          <input
        type="range"
        min={2000}
        max={2050}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Selected Year: {sliderValue}</p>
          </div>
          
        </div>
      </div>
      <div className="col-span-9 grid grid-cols-1 gap-10 pb-20">
      <section 
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10 mt-10 mb-5">

  
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
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70" onClick={() => handleAddWishListBook(book)}>
              Wistlist
            </span>
          </Tooltip>
          <Tooltip content="Readinglist Page">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70" onClick={() => handleAddReadingListBook(book)}>
             Readinglist
            </span>
          </Tooltip>
       
      
        </div>
      </CardBody>
    </Card>
 
  </>)}

    

</section>
      </div>
    </div>
      )}

  </>
     
    );
};

export default AllBook;