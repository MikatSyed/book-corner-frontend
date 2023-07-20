
import { ArrowDownTrayIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Avatar,
  Input,
 
} from "@material-tailwind/react";
import { useGetReadingListQuery, useUpdateReadingListMutation } from "@/redux/features/cart/readingListApi";
import { IBook } from "@/types/globalTypes";
import { Switch } from "@material-tailwind/react";
import { useAppSelector } from "@/redux/hook";
 
const TABLE_HEAD = ["Title", "Price", "Author","Genre", "Publication Date", "Plan To Read", "Reading", "Finished"];
 

export default function ReadingList() {
    const { user } = useAppSelector((state) => state.user);
    const { data: readingListItems } = useGetReadingListQuery(undefined,{refetchOnMountOrArgChange: true})
    const [updateReadingList] = useUpdateReadingListMutation()

    const filterData  = readingListItems?.data?.filter((book:IBook)=> book?.readinglistedBy === user?.email)

  const handleIsPlanToRead = (id : string) => {
    const options = {
        isPlanToRead : true
    }
    updateReadingList({id,...options})
  }
  const handleIsReading = (id : string) => {
    const options = {
        isReading : true
    }
    updateReadingList({id,...options})
  }
  
  const handleIsFinished = (id : string) => {
    const options = {
        isFinished : true
    }
    updateReadingList({id,...options})
  }
  
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Reading List
            </Typography>
            
          </div>
       
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterData?.map(
              (book:IBook) => {
                return (
                  <tr key={book?._id}>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={book?.image}
                          alt={book?.image}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography variant="small" color="blue-gray" className="font-bold">
                          {book?.title}
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        ${book?.price}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {book?.author}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {book?.genre}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {book?.publicationDate}
                      </Typography>
                    </td>
                    
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-normal" onClick={()=>handleIsPlanToRead(book?.bookId!)}>
                    {book.isPlanToRead ? <Switch   color="green" checked  />  : <Switch   color="green"   /> }          
                      </Typography>
                    </td>     
                   
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-normal" onClick={()=>handleIsReading(book?.bookId!)}>
                    {book.isReading ? <Switch   color="green" checked  />  : <Switch   color="green"   /> }          
                      </Typography>
                    </td>

                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-normal" onClick={()=>handleIsFinished(book?.bookId!)}>
                    {book.isFinished ? <Switch   color="green" checked  />  : <Switch   color="green"   /> }          
                      </Typography>
                    </td>
                    
                   
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" color="blue-gray" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" color="blue-gray" size="sm">
            1
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            2
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            3
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            8
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            9
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" color="blue-gray" size="sm">
          Next
        </Button>
      </CardFooter> */}
    </Card>
  );
}