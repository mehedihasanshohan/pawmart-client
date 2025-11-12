import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Root/MainLayOut.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import CategoryFilteredPage from './components/CategoryFilteredPage.jsx';
import ListingDetails from './pages/ListingDetails.jsx';
import AllListings from './pages/AllListings';
import AOS from "aos";
import "aos/dist/aos.css";
import AddListing from './pages/AddListing.jsx';
import PrivateRoute from './routes/PrivateRoutes.jsx';
import { ToastContainer } from 'react-toastify';
import MyOrders from './pages/MyOrders.jsx';


AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {index: true, element: <Home></Home>},
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/category-filtered-product/:category",
        element: <CategoryFilteredPage></CategoryFilteredPage>
      },
      {
        path: "/listing/:id",
        element: <ListingDetails></ListingDetails>,
      },
      {
        path: "/listings",
        element: <AllListings></AllListings>,
      },
      {
        path: '/addListing',
        element: <AddListing></AddListing>
      },
      {
        path: '/myOrders',
        element: <MyOrders></MyOrders>
      }


    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
)
