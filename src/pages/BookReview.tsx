import { useGetCommentQuery, usePostCommentMutation } from '@/redux/features/book/bookApi';
import { useAppSelector } from '@/redux/hook';
import { Button, Textarea } from '@material-tailwind/react';
import { ChangeEvent, FormEvent, useState } from 'react'
import { FiSend } from 'react-icons/fi';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";



interface IProps {
  id: string;
}

export default function BookReview({ id }: IProps) {
  const { user } = useAppSelector((state) => state.user);
    const { data } = useGetCommentQuery(id, {
        refetchOnMountOrArgChange: true
      });
  const [postComment, { isLoading, isError, isSuccess }] =
  usePostCommentMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const [inputValue, setInputValue] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  console.log(inputValue);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();
   
    
    const options = {
      id: id,
      data: { comment: inputValue },
    };

    postComment(options);

    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setIsButtonDisabled(false)
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
        {user.email && (
                      <> 
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
    
          <div className="w-full h-['20rem']">
      <Textarea label="Comment"   className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue} />
    </div>
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
          color='blue'
          disabled={isButtonDisabled}
        >
          <FiSend />
        </Button>
      </form>
      </>
        )}
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
           
            <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
        
          <Typography color="blue-gray">{user?.email}</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
         {comment}
        </Typography>
      </CardBody>
    </Card>
           
          </div>
        ))}
      </div>
    </div>
  );
}