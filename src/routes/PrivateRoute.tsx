import { useAppSelector } from '@/redux/hook';
import { Navigate } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  path: string;
}

export default function PrivateRoute({ children, path }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user.email && !isLoading) {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(path)}`}
        replace
      />
    );
  }

  return (
    <>
      {children}
    </>
  );
}
