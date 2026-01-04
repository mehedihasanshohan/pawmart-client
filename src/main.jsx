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
import { ToastContainer } from 'react-toastify';
import MyOrders from './pages/MyOrders.jsx';
import MyListings from './MyListings.jsx';
import UpdateListing from './pages/UpdateListing.jsx';
import PetCare from './pages/PetCare.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import Privacy from './pages/Privacy.jsx';
import DashBoardLayout from './Root/DahboardLayout.jsx';
import MyProfile from './Root/MyProfile.jsx';
import MyCharts from './Root/MyCharts.jsx';


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
        element:
                   <ListingDetails></ListingDetails>
      },
      {
        path: "/listings",
        element: <AllListings></AllListings>,
      },
      {
        path: '/update-listing/:id',
        element: <UpdateListing></UpdateListing>
      },
      {
        path: '/pet-care',
        element: <PetCare></PetCare>,
        loader: () => fetch('/data/carecenters.json').then(res => res.json())
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/privacy',
        element: <Privacy></Privacy>
      }


    ]
  },
  {
    path: "dashboard",
    element:<DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path:  '',
        element: <div className='text-center mt-20'>
          <h2 className='text-3xl font-semibold'>Welcome to your Dashboard</h2></div>
      },
      {
        path: 'addListing',
        element: <AddListing></AddListing>
      },
      {
        path: 'mylistings',
        element: <MyListings></MyListings>
      },
      {
        path: 'myOrders',
        element: <MyOrders></MyOrders>
      },
      {
        path: "my-profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "my-charts",
        element: <MyCharts></MyCharts>
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
