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
import 'bootstrap/dist/css/bootstrap.min.css';
import CampaignPage from "./Pages/DataPages/Campaign/CampaignPage.tsx";
import CharacterCards from "./Pages/DataPages/Character/CharacterCards.tsx";
import MortalRacesCards from "./Pages/DataPages/Species/MortalRacesCards.tsx";
import PostNewSpecies from "./Pages/DataPages/Species/PostNewSpecies.tsx";
import SignUpPage from "./Pages/Login/SignUpPage.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: "/home",
                element: <Home/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: "/signup",
                element: <SignUpPage/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: "/campaigns",
                element: <CampaignPage/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: "/characters",
                element: <CharacterCards/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: "/species",
                element: <MortalRacesCards/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: "/mortal",
                element: <MortalRacesCards/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: "/species-post",
                element: <PostNewSpecies/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: "/world",
                element: <ContinentCards/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: "/race",
                element: <MortalRacesCards/>,
                errorElement: <ErrorPage/>,
            }
            ,
            {
                path: "/items",
                element: <MortalRacesCards/>,
                errorElement: <ErrorPage/>,
                children: [
                    {
                        path: "weapon",
                        element: <MortalRacesCards/>,
                        errorElement: <ErrorPage/>,
                    }
                ]
            }
            ,
            {
                path: "/groups",
                element: <GroupCards/>,
                errorElement: <ErrorPage/>,
            }
            ,
            {
                path: "/gods",
                element: <GodCards/>,
                errorElement: <ErrorPage/>,
            }
            ,

            {
                path: "/error",
                element: <ErrorPage/>,
                errorElement: <ErrorPage/>,
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
