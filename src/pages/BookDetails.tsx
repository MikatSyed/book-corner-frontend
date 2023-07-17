import { useDeleteBookMutation, useSingleBookQuery } from "@/redux/features/book/bookSlice";
import { useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { useParams,Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import BookReview from "./BookReview";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { user } = useAppSelector((state) => state.user);
    const { data: bookData } = useSingleBookQuery(id);
    const [deleteBook, { isSuccess }] = useDeleteBookMutation();

     const handleDelete =()=> {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          deleteBook(id)
          navigate('/all-books')
        }
      })
     }
    return (
      <>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    {
        bookData?.data?.map((book:any)=><>   <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" className="lg:w-1/3  w-full object-cover object-center rounded border border-gray-200" src={book.image}/>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">{book.author}</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{book.title}</h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-gray-600 ml-3">4 Reviews</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            
            <span className="text-gray-600 ml-3">{book.genre}</span>
            
            </span>
          </div>
          <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          
          
          </div>
          {user.email === bookData?.data[0].publisher && <><div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">${book.price}</span>
           <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={()=> navigate(`/book/edit/${book._id}`)}>Edit</button>
            <button className=" ml-2 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={handleDelete}>
             Delete
            </button>
          </div></>}
        </div>
      </div></>)
    }
  </div>
</section>
<BookReview id={id!} />
      </>
    );
};

export default BookDetails;