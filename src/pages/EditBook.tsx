import { useUpdateBookMutation,useSingleBookQuery } from "@/redux/features/book/bookSlice";
import { useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {Link, useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom"

interface EditBookFormInputs {
    title?: string;
    price?: string;
    image?:string;
    author?: string;
    genre?: string;
    publicationDate?: string;
    publisher?:string;
 
  }

const EditBook = () => {
    const { id } = useParams();
    const navigate = useNavigate()
  const [updateBook,{isSuccess,isLoading}] = useUpdateBookMutation()
  const { user } = useAppSelector((state) => state.user);
  const { data: bookData} = useSingleBookQuery(id);
  console.log({bookData})
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<EditBookFormInputs>();
    
      useEffect(()=>{
        if(isLoading){
         toast.loading("Posting...",{id:"EditProduct"})
        }
        if(isSuccess){
         toast.success("Edited Successfully",{id:"EditProduct"})
         navigate('/all-books')
        }
       
       },[isLoading,isSuccess])

    const onSubmit = (data: EditBookFormInputs) => {
        updateBook({id,...data});
      };
      
    return (
     <>
    
        <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-3 md:pt-8">
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Title</p>
          <input placeholder="enter book title..." className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" defaultValue={bookData?.data[0]?.title} {...register('title', { required: 'Title is required' })} />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Price</p>
          <input placeholder="enter book price..." className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"defaultValue={bookData?.data[0]?.price}  {...register('price', { required: 'Price is required' })} />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Author</p>
          <input placeholder="enter book author name..." className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" defaultValue={bookData?.data[0]?.author}   {...register('author', { required: 'Author is required' })} />
          {errors.author && <p>{errors.author.message}</p>}
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Image</p>
          <input placeholder="enter book image url..." className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" defaultValue={bookData?.data[0]?.image} {...register('image')}/>
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Genre</p>
          <select  className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" defaultValue={bookData?.data[0]?.genre}  {...register('genre')}>
           
            <option value='Mystery'>Mystery</option>
            <option value='Thriller'>Thriller</option>
            <option value='Romance'>Romance</option>
            <option value='Science fiction'>Science Fiction</option>
            <option value='Fantasy'>Fantasy</option>
            <option value='Crime'>Crime</option>
            <option value='Horror'>Horror</option>
            <option value='Drama'>Drama</option>
            <option value='Comedy'>Comedy</option>
            <option value='Travel'>Travel</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Publication Date</p>
          <input  type="date" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" defaultValue={bookData?.data[0]?.publicationDate}  {...register('publicationDate', { required: 'publication date is required' })} />
        </div>

        <div style={{display: 'none'}} >
          <input  type="email" defaultValue={user?.email!}  {...register('publisher')} />
        </div>
    
     
        <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
         
          <Link to="/">  <button className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">Cancel</button></Link>
          <button type="submit" className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">Edit</button>
        
      
        </div>
        </form>
      </div>
     </>
    );
};

export default EditBook;