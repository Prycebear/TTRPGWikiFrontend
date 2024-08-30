import {useState} from "react";
import {LoginCompTest} from "./LoginCompTest.tsx";
import PostNewSpecies from "../DataPages/Species/PostNewSpecies.tsx";


export default function Home(){

    const[counter, setCounter] = useState(1);

    const onButtonClick = () => {
        setCounter(counter + 1);
    }

    return(
            <main className="align-middle">
                <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-5 fw-bold">Title</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">
                            {counter}
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <LoginCompTest counterFunction={onButtonClick}/>
                        </div>
                    </div>
                </div>
            </main>
    )
}