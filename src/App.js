
import './App.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Nav from './Components/Nav';
import Registration from './Components/Registration';
import Hero from './Components/Hero';
import About from './Components/About';
import Footer from './Components/Footer';
import Founder from './Components/Founder';
import Course from './Components/Course';
import Students from './Components/Students';


const Layout = () => {
  return (
    <>
      <Nav />
      <Hero heading="Learning with Tea Groups" location="New Delhi"/>
      <Outlet />
  
      <Founder/>
      <Footer/>

    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    
   
    children: [

      {
        path: "/about",
        element: <About />
      },
      {
        path: "/course",
        element: <Course />
      },
     {
       path: "/students",
      element: <Students />,
    },
      {
        path: "/reg",
        element: <Registration />
      },
    ]
  }
])
function App() {


  return (

    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
