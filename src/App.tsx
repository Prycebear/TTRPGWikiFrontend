
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Pages/Error/ErrorPage.tsx";
import Home from "./Pages/Home/Home.tsx";
import Root from "./Root.tsx";
import ContinentCards from "./Pages/DataPages/World/ContinentCards.tsx";
import GroupCards from "./Pages/DataPages/Groups/GroupCards.tsx";
import GodCards from "./Pages/DataPages/Gods/GodCards.tsx";
import DataCardPage from "./Pages/DataCardPage/DataCardPage.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import CampaignPage from "./Pages/DataPages/Campaign/CampaignPage.tsx";
import CharacterCards from "./Pages/DataPages/Character/CharacterCards.tsx";
import BasicDataOutline from "./Pages/BasicDataCards/BasicCardOutline.tsx";



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
        path: "/campaigns",
        element:<CampaignPage/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/characters",
        element:<CharacterCards/>,
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
        element:<BasicDataOutline/>,
        errorElement: <ErrorPage />,
      }
      ,
      {
        path: "/items",
        element:<DataCardPage/>,
        errorElement: <ErrorPage />,
        children:[
          {
            path: "weapon",
            element:<DataCardPage/>,
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
