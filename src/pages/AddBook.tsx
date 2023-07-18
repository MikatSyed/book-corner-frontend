import { useAddBookMutation } from "@/redux/features/book/bookApi";
import { useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {Link} from 'react-router-dom'

interface addBookFormInputs {
    title: string;
    price: string;
    image:string;
    author: string;
    genre: string;
    publicationDate: string;
    publisher:string;
 
  }

const AddBook = () => {
  const [postBook,{isSuccess,isLoading}] = useAddBookMutation()
  const { user } = useAppSelector((state) => state.user);

    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm<addBookFormInputs>();
    
      useEffect(()=>{
        if(isLoading){
         toast.loading("Posting...",{id:"addProduct"})
        }
        if(isSuccess){
         toast.success("Added Successfully",{id:"addProduct"})
         reset();
        }
       
       },[isLoading,isSuccess])

    const onSubmit = (data: addBookFormInputs) => {
     postBook(data);
      };
      
    return (
     <>
    
        <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-3 md:pt-8">
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Title</p>
          <input placeholder="enter book title..." className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"  {...register('title', { required: 'Title is required' })} />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Price</p>
          <input placeholder="enter book price..." className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" {...register('price', { required: 'Price is required' })} />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Author</p>
          <input placeholder="enter book author name..." className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"  {...register('author', { required: 'Author is required' })} />
          {errors.author && <p>{errors.author.message}</p>}
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Image</p>
          <input placeholder="enter book image url..." className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" {...register('image')}/>
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Genre</p>
          <select  className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" {...register('genre')}>
            <option value=''>choose a genre</option>
            <option value='Mystery'>Mystery</option>
            <option value='Thriller'>Thriller</option>
            <option value='Romance'>Romance</option>
            <option value='Science fiction'>Science iction</option>
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
          <input  type="date" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" {...register('publicationDate', { required: 'publication date is required' })} />
        </div>

        <div style={{display: 'none'}} >
          <input  type="email" defaultValue={user?.email!}  {...register('publisher')} />
        </div>
    
     
        <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
         
          <Link to="/">  <button className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">Cancel</button></Link>
          <button type="submit" className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">Add</button>
        
      
        </div>
        </form>
      </div>
     </>
    );
};

export default AddBook;