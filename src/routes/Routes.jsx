import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import NewsCards from "../components/newsCards/NewsCards";
import NewsLayout from "../components/layouts/NewsLayout";
import NewsDetails from "../components/newsDetails/NewsDetails";
import Home from "../components/Home/Home";
import Categories from "../components/categories/Categories";
import LoginLayout from "../components/layouts/LoginLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoutes from "./PrivateRoutes";
import TermsAndConditions from "../components/TermsAndConditions";
import About from "../components/About";
import Career from "../components/Career";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<NewsCards></NewsCards>,
          loader:()=>fetch('https://express-server-billalbelal621-gmailcom.vercel.app/news')
        }, 
        
        {
          path:'category/:id',
          element:<NewsCards></NewsCards>
        }
      ]
    },

    {
      path:'/news-details/:id',
      element:<NewsLayout></NewsLayout>,
      children:[
        {
          path:"/news-details/:id",
          element:<PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>
        }
      ]
    },

    {
      path:'/login',
      element:<LoginLayout></LoginLayout>,
      children:[
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },

    {
      path:'register',
      element:<Register></Register>
    },
    {
      path:"/terms-and-conditions",
      element:<TermsAndConditions></TermsAndConditions>
    },
    {
      path:"/about",
      element:<PrivateRoutes><About></About></PrivateRoutes>
    },
    {
      path:'/career',
      element:<PrivateRoutes><Career></Career></PrivateRoutes>
    }
  ]);

export default router;
