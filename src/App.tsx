
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Pages/Error/ErrorPage.tsx";
import Home from "./Pages/Home/Home.tsx";

import Character from "./Pages/Character/Character.tsx";
import Root from "./Root.tsx";
import {CharacterdetailPage} from "./Pages/Character/CharacterDetailPage.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "homes",
        element: <Home/>,
      },
      {
        path: "/home",
        element:<Home/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/characters",
        element:<Character/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/character",
        element:<CharacterdetailPage/>,
        errorElement: <ErrorPage />,
      },
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
