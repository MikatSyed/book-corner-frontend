import { usePostCommentMutation } from '@/redux/features/book/bookSlice';
import { ChangeEvent, FormEvent, useState } from 'react'
import { FiSend } from 'react-icons/fi';



interface IProps {
  id: string;
}

export default function BookReview({ id }: IProps) {

  const [postComment, { isLoading, isError, isSuccess }] =
  usePostCommentMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const [inputValue, setInputValue] = useState<string>('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    
    const options = {
      id: id,
      data: { comment: inputValue },
    };

    postComment(options);

    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </button>
      </form>
      
    </div>
  );
}