import Navbar from "@/layouts/Navbar";
import { useAppDispatch } from "@/redux/hook";
import { useForm } from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom'

interface addBookFormInputs {
    title: string;
    price: string;
    image:string;
    author: string;
    genre: string;
    publicationDate: string;
    publicationYear: number;
 
  }

const AddBook = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm<addBookFormInputs>();
      const dispatch = useAppDispatch()

    const onSubmit = (data: addBookFormInputs) => {
       console.log(data);
      };
      
    return (
     <>
    
        <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-3 md:pt-8">
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Title</p>
          <input placeholder="Title" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"  {...register('title', { required: 'Title is required' })} />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Price</p>
          <input placeholder="Price" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" {...register('price', { required: 'Price is required' })} />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Author</p>
          <input placeholder="Author" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"  {...register('author', { required: 'Author is required' })} />
          {errors.author && <p>{errors.author.message}</p>}
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Image</p>
          <input placeholder="Image" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" {...register('image')}/>
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Genre</p>
          <select  className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" {...register('genre')}>
            <option value='mystery'>Mystery</option>
            <option value='thriller'>Thriller</option>
            <option value='romance'>Romance</option>
            <option value='science fiction'>Science Fiction</option>
            <option value='fantasy'>Fantasy</option>
            <option value='crime'>Crime</option>
            <option value='horror'>Horror</option>
            <option value='drama'>Drama</option>
            <option value='comedy'>Comedy</option>
            <option value='travel'>Travel</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Publication Date</p>
          <input placeholder="publication date" type="date" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" {...register('publicationDate', { required: 'publication date is required' })} />
        </div>
        <div className="flex flex-col gap-3 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Publication Year</p>
          <input placeholder="publicationYear" type="number" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"  {...register('publicationYear', { required: 'publication year is required' })} />
          {errors.publicationYear && <p>{errors.publicationYear.message}</p>}
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