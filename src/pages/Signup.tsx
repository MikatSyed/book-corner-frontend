import { useRegisterMutation } from '@/redux/features/user/userApi';
import { createUser } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
}

export default function Signup() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SignupFormInputs>();
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user);
  
  const onSubmit = (data: SignupFormInputs) => {
    dispatch(createUser({email:data.email,password:data.password}))
    reset();
  };
  useEffect(()=>{
 
    if (user?.email) {
      toast.success('Registration Successfull',{id:"registerUser"})
      navigate("/login")
    } 
  },[user])
  
  return (
    <>
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
            <input type="name" id="login-email" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Name"   {...register('name', { required: 'Name is required' })}/>
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        </div>
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

        <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Signup</button>
      </form>
      <div className="py-12 text-center">
        <p className="whitespace-nowrap text-gray-600">
          Already have an account?
          <a href="login" className="underline-offset-4 font-semibold text-gray-900 underline">Signin now.</a>
        </p>
      </div>
    </div>
  </div>
  <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
    <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
      <p className="mb-8 text-3xl font-semibold leading-10">We work 10x faster than our compeititors and stay consistant. While they're bogged won with techincal debt, we're realeasing new features.</p>
      <p className="mb-4 text-3xl font-semibold">John Elmond</p>
      <p className="">Founder, Emogue</p>
      <p className="mb-7 text-sm opacity-70">Book Corner</p>
    </div>
    <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
  </div>
</div>

    </>
  );
}
