
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Pages/Error/ErrorPage.tsx";
import Home from "./Pages/Home/Home.tsx";
import Root from "./Root.tsx";
import ContinentCards from "./Pages/World/ContinentCards.tsx";
import WeaponCards from "./Pages/Items/WeaponCards.tsx";
import GroupCards from "./Pages/Groups/GroupCards.tsx";
import GodCards from "./Pages/Gods/GodCards.tsx";
import DataCardPage from "./Pages/DataCardPage/DataCardPage.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/home",
        element:<Home/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/characters",
        element:<DataCardPage/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/character",
        element:<DataCardPage/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/world",
        element:<ContinentCards/>,
        errorElement: <ErrorPage />,
      }
      ,
      {
        path: "/race",
        element:<DataCardPage/>,
        errorElement: <ErrorPage />,
      }
      ,
      {
        path: "/items",
        element:<ErrorPage/>,
        errorElement: <ErrorPage />,
        children:[
          {
            path: "/items/weapon",
            element:<WeaponCards/>,
            errorElement: <ErrorPage />,
          }
        ]
      }
      ,
      {
        path: "/groups",
        element:<GroupCards/>,
        errorElement: <ErrorPage />,
      }
      ,
      {
        path: "/gods",
        element:<GodCards/>,
        errorElement: <ErrorPage />,
      }
      ,

      {
        path: "/error",
        element:<ErrorPage/>,
        errorElement: <ErrorPage />,
      }
    ],
  },


]);

function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
