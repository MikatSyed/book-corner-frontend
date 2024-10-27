import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div className='main'>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
