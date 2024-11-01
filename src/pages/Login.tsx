
import { loginUser } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';



interface SignInFormInputs {
  
  email: string;
  password: string;
}

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm<SignInFormInputs>();
  const { user } = useAppSelector((state) => state.user);
  
  
  const onSubmit = (data: SignInFormInputs) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  const redirect = new URLSearchParams(location.search)?.get('redirect');
console.log(redirect);
useEffect(()=>{
 
  if (redirect && user?.email) {

    navigate(redirect);
  } else if(user?.email) {
    navigate("/")
  }
},[user])

  return (
    <div className='main'>
<div className="flex flex-wrap">
  <div className="flex w-full flex-col md:w-1/2">
   
    <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
      <p className="text-left text-3xl font-bold">Welcome To Book Corner</p>
      <p className="mt-2 text-left text-gray-500">Please enter your details.</p>
      <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img className="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt=""/> Log in with Google</button>
      <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
        <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
      </div>
      <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-3 md:pt-8">
      
        <div className="flex flex-col pt-4">
          <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="email" id="login-email" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email"  {...register('email', { required: 'Email is required' })} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </div>
        
        <div className="mb-12 flex flex-col pt-4">
          <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="password" id="login-password" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password"  {...register('password', { required: 'Password is required' })}/>
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>

        <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Signin</button>
      </form>
      <div className="py-12 text-center">
        <p className="whitespace-nowrap text-gray-600">
          Already have an account?
          <a href="signup" className="underline-offset-4 font-semibold text-gray-900 underline">Signup now.</a>
        </p>
      </div>
    </div>
  </div>
  <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
    <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
     
    </div>
    <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="https://brandio.io/envato/iofrm/html/images/img1.jpg" />
  </div>
</div>

    </div>
  );
}
