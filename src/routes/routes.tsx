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
        path: '/add-book',
        element: <PrivateRoute path="/add-book"> <AddBook /></PrivateRoute>,
      },
      {
        path: '/books',
        element: <AllBook />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
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
