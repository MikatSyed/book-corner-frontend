import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Signup from '@/pages/Signup';
import AddBook from '@/pages/AddBook';
import PrivateRoute from './PrivateRoute';
import AllBook from '@/pages/AllBook';
import BookDetails from '@/pages/BookDetails';
import EditBook from '@/pages/EditBook';
import WishList from '@/pages/WishList';
import ReadingList from '@/pages/ReadingList';



const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/addBook',
        element: <PrivateRoute path="/addBook"> <AddBook /></PrivateRoute>,
      },
      {
        path: '/allBook',
        element: <AllBook />,
      },
      {
        path: '/book/:id',
        element: <BookDetails />,
      },
      {
        path: '/book/edit/:id',
        element:  <PrivateRoute path="/book/edit/:id"> <EditBook /></PrivateRoute>,
      },
      {
        path: '/wishlist',
        element:   <WishList/>,
      },
      {
        path: '/readingList',
        element:   <ReadingList/>,
      },
    
    ],
    
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
 
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
