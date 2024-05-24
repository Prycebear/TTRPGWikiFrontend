
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Pages/Error/ErrorPage.tsx";
import Home from "./Pages/Home/Home.tsx";

import Character from "./Pages/Character/Character.tsx";
import Root from "./Root.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element:<Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/character",
    element:<Character/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/error",
    element:<ErrorPage/>,
    errorElement: <ErrorPage />,
  }

]);

function App() {
  // const [count, setCount] = useState(0)
  //   const [rando, setRando] = useState(Math.round(Math.random()*10))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
