
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Pages/Error/ErrorPage.tsx";
import Home from "./Pages/Home/Home.tsx";
import Root from "./Root.tsx";
import CharacterCards from "./Pages/Character/CharacterCards.tsx";
import CharacterCard from "./Pages/Character/CharacterCard.tsx";



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
        element:<CharacterCards/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/character",
        element:<CharacterCards/>,
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
